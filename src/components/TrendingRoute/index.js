import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import MenuCard from '../MenuCard'
import TrendingVideos from '../TrendingVideosCard'
import Loading from '../LoadingView'
import FailureView from '../FailureView'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TrendingBanner,
  TrendingBannerIcon,
  TrendingBannerText,
  TrendingContainer,
  TrendingVideosContainer,
  VideosListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        trendingVideosList: updatedData,
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
          <TrendingBanner isDark={darkMode}>
            <TrendingBannerIcon isDark={darkMode}>
              <HiFire />
            </TrendingBannerIcon>
            <TrendingBannerText>Trending</TrendingBannerText>
          </TrendingBanner>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLoadingView = () => <Loading />

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderVideosView = () => {
    const {trendingVideosList} = this.state
    return (
      <>
        {this.renderBanner()}
        <VideosListContainer>
          {trendingVideosList.map(each => (
            <TrendingVideos videoDetails={each} key={each.id} />
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

  renderTrendingView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <TrendingVideosContainer isDark={darkMode} data-testid="trending">
            {this.renderView()}
          </TrendingVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        <TrendingContainer>
          <MenuCard />
          {this.renderTrendingView()}
        </TrendingContainer>
      </>
    )
  }
}

export default Trending
