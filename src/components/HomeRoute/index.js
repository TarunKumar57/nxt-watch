import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import {GrFormClose} from 'react-icons/gr'
import Header from '../Header'
import MenuCard from '../MenuCard'
import VideoCard from '../HomeVideoCard'
import Loading from '../LoadingView'
import FailureView from '../FailureView'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  BannerContainer,
  BannerImageContainer,
  BannerImage,
  BannerCloseButton,
  BannerTextContainer,
  BannerText,
  BannerButton,
  HomeContainer,
  HomeVideosContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  RetryButton,
  NoVideosContainer,
  NoVideosImg,
  NoVideosHeading,
  NoVideosParagraph,
  VideosListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    displayBanner: true,
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    videosList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getVideos()
  }

  onClickClose = () => {
    this.setState({displayBanner: false})
  }

  renderBanner = () => (
    <BannerContainer data-testid="banner">
      <BannerImageContainer>
        <BannerImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerCloseButton
          type="button"
          onClick={this.onClickClose}
          data-testid="close"
        >
          <GrFormClose size={25} />
        </BannerCloseButton>
      </BannerImageContainer>
      <BannerTextContainer>
        <BannerText>
          Buy Nxt Watch Premium prepaid plans with <br />
          UPI
        </BannerText>
        <BannerButton type="button">GET IT NOW</BannerButton>
      </BannerTextContainer>
    </BannerContainer>
  )

  renderLoadingView = () => <Loading />

  onRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderNoVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <NoVideosContainer isDark={darkMode}>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading>No Search Results Found</NoVideosHeading>
            <NoVideosParagraph isDark={darkMode}>
              Try different key words or remove search filter
            </NoVideosParagraph>
            <RetryButton type="button" onClick={this.onRetry}>
              Retry
            </RetryButton>
          </NoVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderVideosView = () => {
    const {videosList} = this.state
    return (
      <VideosListContainer>
        {videosList.map(each => (
          <VideoCard videoDetails={each} key={each.id} />
        ))}
      </VideosListContainer>
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

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchButton = () => {
    this.getVideos()
  }

  renderHomeView = () => {
    const {searchInput, displayBanner, videosList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <HomeVideosContainer isDark={darkMode} data-testid="home">
              {displayBanner && this.renderBanner()}
              <SearchContainer>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  isDark={darkMode}
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                />
                <SearchButton
                  type="button"
                  data-testid="searchButton"
                  isDark={darkMode}
                  onClick={this.onSearchButton}
                >
                  <BsSearch size={25} />
                </SearchButton>
              </SearchContainer>
              {searchInput !== '' && videosList.length === 0
                ? this.renderNoVideosView()
                : this.renderView()}
            </HomeVideosContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  render() {
    return (
      <>
        <Header />
        <HomeContainer>
          <MenuCard />
          {this.renderHomeView()}
        </HomeContainer>
      </>
    )
  }
}

export default Home
