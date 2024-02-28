import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: Roboto;
`
export const VideoItemContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  @media (max-width: 600px) {
    width: 100vw;
  }
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoContainer = styled.div`
  margin: 0% 5%;
  font-family: Roboto;
  @media (max-width: 600px) {
    margin: 0% 1%;
  }
`

export const VideoCardTextContainer = styled.div`
  margin: 0px;
  margin: 0px 9px;
  color: ${props => (props.isDark ? '#cbd5e1' : '#616e7c')};
`
export const VideoPlayerContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 432px;
  @media (max-width: 912px) {
    height: 300px;
    width: 100%;
    padding: 0%;
  }
`
export const Title = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`
export const DateLikeSaveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`
export const DateViewCountContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LikeSaveContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LikeSaveButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 9px;
  font-family: Roboto;
  cursor: pointer;
  color: ${props => (props.isDark ? '#cbd5e1' : '#616e7c')};
  color: ${props => props.isActive && '#2563eb'};
`
export const LikeSaveParagraph = styled.p`
  font-size: medium;
  margin-left: 5px;
`
export const ViewCount = styled.p`
  // margin-top: 3px;
`
export const DateText = styled.p`
  // margin-top: 3px;
`
export const Hr = styled.hr`
  border: 1px solid ${props => (props.isDark ? '#cbd5e1' : '#cccccc')};
`
export const VideoChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const ProfileImg = styled.img`
  height: 50px;
  margin-top: 9px;
`
export const ChannelDescriptionContainer = styled.div`
  margin: 9px 12px;
`
export const ChannelName = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  margin: 3px 3px;
`
export const Subscribers = styled.p`
  color: ${props => (props.isDark ? '#cbd5e1' : '#616e7c')};
  font-size: small;
`
export const Description = styled.p`
  color: ${props => (props.isDark ? '#f1f5f9' : '#64748b')};
  margin-top: 0%;
  padding: 0% 6%;
  @media (max-width: 600px) {
    padding: 0% 3%;
  }
`
