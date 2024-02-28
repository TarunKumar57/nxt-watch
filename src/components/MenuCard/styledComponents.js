import styled from 'styled-components'

export const MenuCardContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  font-family: Roboto;
  min-height: 100vh;
  width: 20vw;
  padding-top: 1%;
  margin-top: 0%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 912px) {
    width: 23vh;
  }
  @media (max-width: 600px) {
    display: none;
  }
`
export const MenuCardList = styled.ul`
  list-style-type: none;
  width: 100%;
  padding-left: 0px;
  margin-top: 0px;
`
export const MenuCardListItem = styled.li`
  font-size: ${props => (props.isActive ? '24px' : '20px')};
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.isDark ? '#cccccc' : '#313131')};
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  padding-left: 18%;
  color: ${props => {
    const {isDark} = props
    const color = isDark ? '#f9f9f9' : '#181818'
    return props.isActive ? color : ''
  }};
  background-color: ${props => {
    const {isDark} = props
    const color = isDark ? '#424242' : '#e2e8f0'
    return props.isActive ? color : ''
  }};
`
export const MenuCardListText = styled.p`
  font-size: 18px;
  margin-left: 9px;
`
export const MenuCardBottomContainer = styled.div`
  padding-left: 9%;
`
export const ContactUs = styled.p`
  font-weight: 500;
`
export const MenuCardLogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0px;
  margin-left: 0%;
`
export const MenuCardLogo = styled.img`
  height: 50px;
  margin-right: 12px;
`
