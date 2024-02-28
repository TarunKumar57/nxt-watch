import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNowStrict} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiMenuAddFill} from 'react-icons/ri'
import Header from '../Header'
import MenuCard from '../MenuCard'
import Loading from '../LoadingView'
import FailureView from '../FailureView'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItemContainer,
  VideoItemDetailsContainer,
  VideoContainer,
  VideoPlayerContainer,
  VideoCardTextContainer,
  Title,
  DateViewCountContainer,
  DateLikeSaveContainer,
  LikeSaveContainer,
  LikeSaveButton,
  LikeSaveParagraph,
  ViewCount,
  DateText,
  Hr,
  VideoChannelContainer,
  ProfileImg,
  ChannelDescriptionContainer,
  ChannelName,
  Subscribers,
  Description,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = {
        id: fetchedData.video_details.id,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        channel: {
          name: fetchedData.video_details.channel.name,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          subscribersCount: fetchedData.video_details.channel.subscriber_count,
        },
        viewCount: fetchedData.video_details.view_count,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => <Loading />

  onRetry = () => {
    this.getVideoDetails()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  onLike = () => {
    const {isLiked} = this.state
    if (isLiked === false) {
      this.setState({
        isLiked: true,
        isDisliked: false,
      })
    } else {
      this.setState({
        isLiked: false,
      })
    }
  }

  onDislike = () => {
    const {isDisliked} = this.state
    if (isDisliked === false) {
      this.setState({
        isLiked: false,
        isDisliked: true,
      })
    } else {
      this.setState({
        isDisliked: false,
      })
    }
  }

  renderVideosView = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    const {
      id,
      title,
      videoUrl,
      // thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetails
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode, savedVideosList, updateSavedVideos} = value
          const iconStyle = {
            width: '25px',
            height: '25px',
            marginRight: '5px',
            marginLeft: '5px',
          }

          const isVideoSaved = savedVideosList.find(each => each.id === id)
          const isSaveActive = isVideoSaved !== undefined
          const videoSavedText = isVideoSaved !== undefined ? 'Saved' : 'Save'

          const date = formatDistanceToNowStrict(new Date(publishedAt), {
            addSuffix: true,
          })
          return (
            <VideoContainer data-testid="videoItemDetails">
              <VideoPlayerContainer>
                <ReactPlayer
                  url={videoUrl}
                  height="100%"
                  width="100%"
                  controls
                />
              </VideoPlayerContainer>
              <VideoCardTextContainer isDark={darkMode}>
                <Title isDark={darkMode}>{title}</Title>
                <DateLikeSaveContainer>
                  <DateViewCountContainer>
                    <ViewCount>{viewCount} views</ViewCount>
                    <BsDot style={iconStyle} />
                    <DateText>{date}</DateText>
                  </DateViewCountContainer>
                  <LikeSaveContainer>
                    <LikeSaveButton
                      type="button"
                      isDark={darkMode}
                      isActive={isLiked}
                      onClick={this.onLike}
                    >
                      <AiOutlineLike size={20} />
                      <LikeSaveParagraph>Like</LikeSaveParagraph>
                    </LikeSaveButton>
                    <LikeSaveButton
                      type="button"
                      isDark={darkMode}
                      isActive={isDisliked}
                      onClick={this.onDislike}
                    >
                      <AiOutlineDislike size={20} />
                      <LikeSaveParagraph>Dislike</LikeSaveParagraph>
                    </LikeSaveButton>
                    <LikeSaveButton
                      type="button"
                      isDark={darkMode}
                      isActive={isSaveActive}
                      //   onClick={this.onSave}
                      onClick={() => updateSavedVideos(videoDetails)}
                    >
                      <RiMenuAddFill size={18} />
                      <LikeSaveParagraph>{videoSavedText}</LikeSaveParagraph>
                    </LikeSaveButton>
                  </LikeSaveContainer>
                </DateLikeSaveContainer>
              </VideoCardTextContainer>
              <Hr isDark={darkMode} />
              <VideoChannelContainer>
                <ProfileImg src={channel.profileImageUrl} alt={channel.name} />
                <ChannelDescriptionContainer>
                  <ChannelName isDark={darkMode}>{channel.name}</ChannelName>
                  <Subscribers isDark={darkMode}>
                    {channel.subscribersCount} subscribers
                  </Subscribers>
                </ChannelDescriptionContainer>
              </VideoChannelContainer>
              <Description isDark={darkMode}>{description}</Description>
            </VideoContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  renderVideoItemDetailsView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <VideoItemContainer isDark={darkMode}>
            {this.renderView()}
          </VideoItemContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        <VideoItemDetailsContainer>
          <MenuCard />
          {this.renderVideoItemDetailsView()}
        </VideoItemDetailsContainer>
      </>
    )
  }
}

export default VideoItemDetails
