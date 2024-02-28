import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  margin: 15px 0px;
  font-family: Roboto;
  @media (max-width: 576px) {
    width: 90vw;
  }
`
export const CardContainer = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
export const ThumbnailImg = styled.img`
  height: 210px;
  @media (min-width: 576px) {
    height: 150px;
  }
  @media (min-width: 912px) {
    height: 210px;
  }
`
export const VideoCardLogoTextContainer = styled.div`
  align-self: flex-start;
  margin: 9px;
  @media (max-width: 600px) {
    display: flex;
    align-items: flex-start;
  }
`
export const ChannelLogo = styled.img`
  height: 30px;
  margin-top: 9px;
  @media (min-width: 600px) {
    display: none;
  }
`
export const VideoCardTextContainer = styled.div`
  margin: 0px;
  margin-left: 9px;
  color: #616e7c;
`
export const Title = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  font-weight: 500;
  font-size: large;
  margin: 3px 3px;
`
export const MobileContainer = styled.div`
  @media (max-width: 576px) {
    display: flex;
    align-items: center;
    padding: 0%;
    margin: 0%;
  }
`
export const ChannelName = styled.p`
  margin: 3px 3px;
  @media (max-width: 576px) {
    margin-bottom: 15px;
  }
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
