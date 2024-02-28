import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import MenuCard from '../MenuCard'
import GamingVideos from '../GamingVideoCard'
import Loading from '../LoadingView'
import FailureView from '../FailureView'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  GameBanner,
  GameBannerIcon,
  GameBannerText,
  GamingContainer,
  GamingVideosContainer,
  VideosListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gameVideosList: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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
        viewCount: video.view_count,
      }))
      this.setState({
        gameVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderBanner = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <GameBanner isDark={darkMode}>
            <GameBannerIcon isDark={darkMode}>
              <SiYoutubegaming />
            </GameBannerIcon>
            <GameBannerText>Gaming</GameBannerText>
          </GameBanner>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLoadingView = () => <Loading />

  onRetry = () => {
    this.getVideoDetails()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderVideosView = () => {
    const {gameVideosList} = this.state
    return (
      <>
        {this.renderBanner()}
        <VideosListContainer>
          {gameVideosList.map(each => (
            <GamingVideos videoDetails={each} key={each.id} />
          ))}
        </VideosListContainer>
      </>
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

  renderGamingView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <GamingVideosContainer isDark={darkMode}>
            {this.renderView()}
          </GamingVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        <GamingContainer>
          <MenuCard />
          {this.renderGamingView()}
        </GamingContainer>
      </>
    )
  }
}

export default Gaming
