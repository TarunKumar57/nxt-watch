import {Component} from 'react'
import {RiMenuAddFill} from 'react-icons/ri'
import Header from '../Header'
import MenuCard from '../MenuCard'
import SavedVideoCard from '../SavedVideosCard'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SavedVideosBanner,
  SavedVideosBannerIcon,
  SavedVideosBannerText,
  VideosListContainer,
  SavedVideosContainer,
  SavedVideoContainer,
  NoSavedVideosContainer,
  NoSavedVideosImg,
  NoSavedVideosHeading,
  NoSavedVideosParagraph,
} from './styledComponents'

class SavedVideos extends Component {
  renderNoSavedVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <NoSavedVideosContainer isDark={darkMode}>
            <NoSavedVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedVideosHeading>No saved videos found</NoSavedVideosHeading>
            <NoSavedVideosParagraph isDark={darkMode}>
              You can save videos while watching them
            </NoSavedVideosParagraph>
          </NoSavedVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderBanner = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <SavedVideosBanner isDark={darkMode}>
            <SavedVideosBannerIcon isDark={darkMode}>
              <RiMenuAddFill />
            </SavedVideosBannerIcon>
            <SavedVideosBannerText>Saved videos</SavedVideosBannerText>
          </SavedVideosBanner>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSavedVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode, savedVideosList} = value
        return (
          <SavedVideoContainer isDark={darkMode} data-testid="savedVideos">
            {savedVideosList.length === 0 ? (
              this.renderNoSavedVideosView()
            ) : (
              <>
                {this.renderBanner()}
                <VideosListContainer>
                  {savedVideosList.map(each => (
                    <SavedVideoCard videoDetails={each} key={each.id} />
                  ))}
                </VideosListContainer>
              </>
            )}
          </SavedVideoContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        <SavedVideosContainer>
          <MenuCard />
          {this.renderSavedVideosView()}
        </SavedVideosContainer>
      </>
    )
  }
}

export default SavedVideos
