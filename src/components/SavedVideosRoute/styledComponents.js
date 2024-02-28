import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: Roboto;
`

export const SavedVideoContainer = styled.div`
  width: 75vw;
  min-height: 100vh;
  @media (max-width: 600px) {
    width: 100vw;
  }
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const NoSavedVideosContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  @media (max-width: 912px) {
    height: 70vh;
  }
`
export const NoSavedVideosImg = styled.img`
  height: 50vh;
  @media (max-width: 912px) {
    height: 30vh;
  }
`
export const NoSavedVideosHeading = styled.h2`
  margin-bottom: 0%;
`
export const NoSavedVideosParagraph = styled.p`
  color: ${props => (props.isDark ? '#cbd5e1' : '#616e7c')};
`

export const SavedVideosBanner = styled.div`
  font-size: 32px;
  display: flex;
  align-items: center;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  background-color: ${props => (props.isDark ? '#231f20' : '#f1f1f1')};
`
export const SavedVideosBannerIcon = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  border-radius: 50px;
  margin-left: 5%;
  color: #ff0b37;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const SavedVideosBannerText = styled.p`
  margin-left: 5%;
`
export const VideosListContainer = styled.ul`
  list-style-type: none;
  padding-left: 5%;
`
