import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: Roboto;
`

export const TrendingBanner = styled.div`
  font-size: 32px;
  display: flex;
  align-items: center;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  background-color: ${props => (props.isDark ? '#231f20' : '#f1f1f1')};
`
export const TrendingBannerIcon = styled.div`
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
export const TrendingBannerText = styled.p`
  margin-left: 5%;
`

export const TrendingVideosContainer = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 600px) {
    width: 100vw;
  }
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const VideosListContainer = styled.ul`
  list-style-type: none;
  padding-left: 5%;
  height: 80vh;
  overflow: auto;
`
