import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'
import {
  VideoCardContainer,
  CardContainer,
  ThumbnailImg,
  VideoCardLogoTextContainer,
  ChannelLogo,
  VideoCardTextContainer,
  Title,
  MobileContainer,
  ChannelName,
  DateViewCountContainer,
  ViewCount,
  DateText,
} from './styledComponents'

const SavedVideoCard = props => {
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
          width: '25px',
          height: '25px',
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
              <CardContainer>
                <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
                <VideoCardLogoTextContainer>
                  <ChannelLogo
                    src={channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <VideoCardTextContainer>
                    <Title isDark={darkMode}>{title}</Title>
                    <MobileContainer>
                      <ChannelName>{channel.name}</ChannelName>
                      <BsDot style={iconStyle} className="icon" />
                      <DateViewCountContainer>
                        <ViewCount>{viewCount} views</ViewCount>
                        <BsDot style={iconStyle} />
                        <DateText>{date}</DateText>
                      </DateViewCountContainer>
                    </MobileContainer>
                  </VideoCardTextContainer>
                </VideoCardLogoTextContainer>
              </CardContainer>
            </Link>
          </VideoCardContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default SavedVideoCard
