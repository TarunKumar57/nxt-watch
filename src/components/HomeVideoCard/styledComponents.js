import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  width: min-content;
  margin: 9px;
  font-family: Roboto;
  @media (max-width: 576px) {
    width: 90vw;
  }
`
export const ThumbnailImg = styled.img`
  height: 150px;
  @media (max-width: 576px) {
    height: 180px;
    width: 100%;
  }
`
export const VideoCardLogoTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0px;
`
export const ChannelLogo = styled.img`
  height: 30px;
  margin-top: 9px;
`
export const VideoCardTextContainer = styled.div`
  font-size: medium;
  margin: 0px;
  margin-left: 9px;
  color: #616e7c;
`
export const Title = styled.p`
  color: ${props => (props.darkMode ? '#f9f9f9' : '#0f0f0f')};
  //   font-weight: 500;
  margin: 3px 3px;
`
export const ChannelName = styled.p`
  margin: 3px 3px;
`
export const DateViewCountContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0%;
`
export const ViewCount = styled.p`
  margin-top: 3px;
`
export const DateText = styled.p`
  margin-top: 3px;
`
