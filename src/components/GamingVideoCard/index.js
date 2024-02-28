import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoCardContainer,
  ThumbnailImg,
  VideoTextContainer,
  Title,
  ViewCount,
} from './styledComponents'

const GamingVideos = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode, changeActiveMenu} = value

        const linkStyle = {
          textDecoration: 'none',
        }

        return (
          <VideoCardContainer>
            <Link
              to={`/videos/${id}`}
              style={linkStyle}
              onClick={() => changeActiveMenu('INITIAL')}
            >
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoTextContainer>
                <Title isDark={darkMode}>{title}</Title>
                <ViewCount>{viewCount} Watching WorldWide</ViewCount>
              </VideoTextContainer>
            </Link>
          </VideoCardContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default GamingVideos
