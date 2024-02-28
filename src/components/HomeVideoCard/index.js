import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoCardContainer,
  ThumbnailImg,
  VideoCardLogoTextContainer,
  ChannelLogo,
  VideoCardTextContainer,
  Title,
  ChannelName,
  DateViewCountContainer,
  ViewCount,
  DateText,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    channel,
    title,
    viewCount,
    publishedAt,
    id,
  } = videoDetails
  const date = formatDistanceToNowStrict(new Date(publishedAt), {
    addSuffix: true,
  })
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode, changeActiveMenu} = value
        const iconStyle = {
          width: '20px',
          height: '20px',
          marginRight: '5px',
          marginLeft: '5px',
          marginBottom: '12px',
        }
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
              <VideoCardLogoTextContainer>
                <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
                <VideoCardTextContainer>
                  <Title darkMode={darkMode}>{title}</Title>
                  <ChannelName>{channel.name}</ChannelName>
                  <DateViewCountContainer>
                    <ViewCount>{viewCount} views</ViewCount>
                    <BsDot style={iconStyle} />
                    <DateText>{date}</DateText>
                  </DateViewCountContainer>
                </VideoCardTextContainer>
              </VideoCardLogoTextContainer>
            </Link>
          </VideoCardContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default VideoCard
