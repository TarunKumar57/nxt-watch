import styled from 'styled-components'

export const NavContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  font-family: Roboto;
  margin-bottom: 0px;
  @media (max-width: 600px) {
    display: none;
  }
`

export const LogoImg = styled.img`
  height: 36px;
  margin-left: 5%;
`

export const NavListContainer = styled.div`
  width: 30%;
  font-weight: 500;
  list-style-type: none;
  padding-left: 0%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const NavIcon = styled.li`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`
export const NavProfile = styled.li``
export const NavButton = styled.li``

export const LogoutButton = styled.button`
  color: ${props => (props.isDark ? '#f9f9f9' : '#4f46e5')};
  background-color: transparent;
  border: 1.5px solid ${props => (props.isDark ? '#f9f9f9' : '#4f46e5')};
  border-radius: 3px;
  margin-right: 5%;
  height: 25px;
  width: 80px;
  cursor: pointer;
`

export const NavMobileContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  font-family: Roboto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  margin-bottom: 0px;
  @media (min-width: 600px) {
    display: none;
  }
`
export const MobileLogo = styled.img`
  height: 30px;
  margin-left: 3%;
`

export const NavMobileIconsList = styled.ul`
  align-self: center;
  list-style-type: none;
  width: 123px;
  padding-left: 0%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 3%;
`
export const NavMobileIcon = styled.li`
  margin-top: 9px;
  font-size: 30px;
  cursor: pointer;
  background-color: ${props => {
    const {darkTheme} = props
    const color = darkTheme ? '#424242' : '#e2e8f0'
    return props.isActive ? color : ''
  }};
`
export const PopupContainer = styled.div``
export const LogoutPopupContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh;
  width: 30vw;
  border-radius: 9px;
  @media (max-width: 600px) {
    height: 20vh;
    width: 80vw;
  }
`
export const ConfirmMessage = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#00306e')};
  font-size: large;
`
export const ConfirmButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border: 1.5px solid #3b82f6;
  outline: none;
  border-radius: 3px;
  padding: 10px 20px;
  margin-left: 9px;
`
export const CancelButton = styled.button`
  color: ${props => (props.isDark ? '#f9f9f9' : '#cbd5e1')};
  background-color: transparent;
  border: 1.5px solid ${props => (props.isDark ? '#f9f9f9' : '#cbd5e1')};
  outline: none;
  border-radius: 3px;
  padding: 10px 20px;
`
export const CloseButton = styled.button`
  font-size: 26px;
  margin-left: 80%;
  padding-top: 9px;
  border: none;
  outline: none;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  background-color: transparent;
  font-weight: bold;
`
export const PopupCardContainer = styled.div`
  height: 50vh;
  width: 70vw;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`
export const PopupMenuCardContainer = styled.div`
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  font-family: Roboto;
  padding-top: 10vh;
  margin-top: 1vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`
export const PopupMenuCardList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0px;
  align-self: center;
  height: 24vh;
  width: 100%;
`
export const PopupMenuCardListItem = styled.li`
  font-size: ${props => (props.isActive ? '20px' : '18px')};
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.isDark ? '#cccccc' : '#313131')};
  border: none;
  outline: none;
  width: 100%;
  height: 50px;
  padding-left: 20vw;
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
