import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  @media (max-width: 600px) {
    padding: 9px;
    width: 100vw;
    background-position: center;
  }
`
export const BannerImage = styled.img`
  width: 100px;
`
export const BannerImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BannerText = styled.p`
  font-weight: 500;
  color: #212121;
  font-size: 15px;
`
export const BannerButton = styled.button`
  width: 120px;
  height: 35px;
  background-color: transparent;
  border: #212121 solid 1px;
  color: #212121;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  margin-top: 10px;
`
export const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`
export const HomeVideosContainer = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 912px) {
    width: 75vw;
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`
export const SearchContainer = styled.div`
  height: 35px;
  width: 35vw;
  border: 1px solid ${props => (props.isDark ? '#ebebeb' : '#7e858e')};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0%;
  margin: 2% 3%;
  @media (max-width: 600px) {
    width: 90vw;
    margin: 3% 3%;
  }
`
export const SearchInput = styled.input`
  height: 33px;
  width: 100%;
  background-color: transparent;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  border: none;
  outline: none;
  border-radius: 5px;
  padding-left: 9px;
`
export const SearchButton = styled.button`
  font-size: 0px;
  background-color: ${props => (props.isDark ? '#424242' : '#e2e8f0')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  border-width: 0px;
  height: 33px;
  width: 30px;
  width: 50px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
`
export const NoVideosContainer = styled.div`
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
export const NoVideosImg = styled.img`
  height: 50vh;
  @media (max-width: 912px) {
    height: 30vh;
  }
`
export const NoVideosHeading = styled.h1`
  margin-bottom: 0%;
`
export const NoVideosParagraph = styled.p`
  color: ${props => (props.isDark ? '#f1f5f9' : '#231f20')};
  @media (min-width: 600px) {
    font-size: large;
  }
`
export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  border: 1px solid #4f46e5;
  border-radius: 5px;
  height: 39px;
  width: 90px;
  cursor: pointer;
  @media (max-width: 600px) {
    height: 39px;
    width: 90px;
  }
`
export const VideosListContainer = styled.ul`
  list-style-type: none;
  padding-left: 5%;
  display: flex;
  flex-wrap: wrap;
  height: 80vh;
  overflow-y: scroll;
`
