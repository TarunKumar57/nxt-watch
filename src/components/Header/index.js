import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {MdMenu, MdClose, MdHome} from 'react-icons/md'
import {IoSunnyOutline, IoMoon} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'
// import 'reactjs-popup/dist/index.css'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavContainer,
  LogoImg,
  NavIcon,
  NavProfile,
  NavButton,
  NavListContainer,
  LogoutButton,
  NavMobileContainer,
  MobileLogo,
  NavMobileIconsList,
  NavMobileIcon,
  PopupContainer,
  LogoutPopupContainer,
  ConfirmMessage,
  ConfirmButton,
  CancelButton,
  CloseButton,
  PopupCardContainer,
  PopupMenuCardContainer,
  PopupMenuCardList,
  PopupMenuCardListItem,
} from './styledComponents'

const activeMenuCardItem = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode, changeMode, activeMenu, changeActiveMenu} = value

        const linkStyle = {
          textDecoration: 'none',
        }
        const iconStyle = {height: '25px', width: '25px', marginRight: '5px'}

        const iconColor = darkMode ? '#424242' : '#7e858e'
        const iconActiveColor = '#ff0b37'

        return (
          <>
            <NavContainer isDark={darkMode}>
              <Link to="/" style={linkStyle}>
                <LogoImg
                  src={
                    darkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
              <NavListContainer>
                <NavIcon onClick={() => changeMode()} data-testid="theme">
                  {darkMode ? <IoSunnyOutline /> : <IoMoon />}
                </NavIcon>
                <NavProfile>
                  <LogoImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NavProfile>
                <NavButton>
                  <PopupContainer>
                    <Popup
                      modal
                      trigger={
                        <LogoutButton
                          type="button"
                          onClick={onClickLogout}
                          isDark={darkMode}
                        >
                          Logout
                        </LogoutButton>
                      }
                    >
                      {close => (
                        <LogoutPopupContainer isDark={darkMode}>
                          <ConfirmMessage>
                            Are you sure you want to logout
                          </ConfirmMessage>
                          <div>
                            <CancelButton type="button" onClick={() => close()}>
                              Cancel
                            </CancelButton>
                            <Link to="/login" className="link">
                              <ConfirmButton type="button">
                                Confirm
                              </ConfirmButton>
                            </Link>
                          </div>
                        </LogoutPopupContainer>
                      )}
                    </Popup>
                  </PopupContainer>
                </NavButton>
              </NavListContainer>
            </NavContainer>

            <NavMobileContainer isDark={darkMode}>
              <Link to="/" style={linkStyle}>
                <MobileLogo
                  src={
                    darkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
              <NavMobileIconsList>
                <NavMobileIcon onClick={() => changeMode()} data-testid="theme">
                  {darkMode ? <IoSunnyOutline /> : <IoMoon />}
                </NavMobileIcon>
                <NavMobileIcon>
                  <PopupContainer>
                    <Popup modal trigger={<MdMenu />}>
                      {close => (
                        <PopupCardContainer style={linkStyle} isDark={darkMode}>
                          <CloseButton
                            type="button"
                            onClick={() => close()}
                            isDark={darkMode}
                          >
                            <MdClose />
                          </CloseButton>
                          <>
                            <PopupMenuCardContainer isDark={darkMode}>
                              <PopupMenuCardList>
                                <Link to="/" style={linkStyle}>
                                  <PopupMenuCardListItem
                                    key="HOME"
                                    isDark={darkMode}
                                    isActive={
                                      activeMenu === activeMenuCardItem.home
                                    }
                                    onClick={() =>
                                      changeActiveMenu(activeMenuCardItem.home)
                                    }
                                  >
                                    <MdHome
                                      color={
                                        activeMenu === activeMenuCardItem.home
                                          ? iconActiveColor
                                          : iconColor
                                      }
                                      style={iconStyle}
                                    />
                                    Home
                                  </PopupMenuCardListItem>
                                </Link>
                                <Link to="/trending" style={linkStyle}>
                                  <PopupMenuCardListItem
                                    key="TRENDING"
                                    isDark={darkMode}
                                    isActive={
                                      activeMenu === activeMenuCardItem.trending
                                    }
                                    onClick={() =>
                                      changeActiveMenu(
                                        activeMenuCardItem.trending,
                                      )
                                    }
                                  >
                                    <HiFire
                                      color={
                                        activeMenu ===
                                        activeMenuCardItem.trending
                                          ? iconActiveColor
                                          : iconColor
                                      }
                                      style={iconStyle}
                                    />
                                    Trending
                                  </PopupMenuCardListItem>
                                </Link>
                                <Link to="/gaming" style={linkStyle}>
                                  <PopupMenuCardListItem
                                    key="GAMING"
                                    isDark={darkMode}
                                    isActive={
                                      activeMenu === activeMenuCardItem.gaming
                                    }
                                    onClick={() =>
                                      changeActiveMenu(
                                        activeMenuCardItem.gaming,
                                      )
                                    }
                                  >
                                    <SiYoutubegaming
                                      color={
                                        activeMenu === activeMenuCardItem.gaming
                                          ? iconActiveColor
                                          : iconColor
                                      }
                                      style={iconStyle}
                                    />
                                    Gaming
                                  </PopupMenuCardListItem>
                                </Link>
                                <Link to="/saved-videos" style={linkStyle}>
                                  <PopupMenuCardListItem
                                    key="SAVED_VIDEOS"
                                    isDark={darkMode}
                                    isActive={
                                      activeMenu ===
                                      activeMenuCardItem.savedVideos
                                    }
                                    onClick={() =>
                                      changeActiveMenu(
                                        activeMenuCardItem.savedVideos,
                                      )
                                    }
                                  >
                                    <RiMenuAddFill
                                      color={
                                        activeMenu ===
                                        activeMenuCardItem.savedVideos
                                          ? iconActiveColor
                                          : iconColor
                                      }
                                      style={iconStyle}
                                    />
                                    Saved videos
                                  </PopupMenuCardListItem>
                                </Link>
                              </PopupMenuCardList>
                            </PopupMenuCardContainer>
                          </>
                        </PopupCardContainer>
                      )}
                    </Popup>
                  </PopupContainer>
                </NavMobileIcon>
                <NavMobileIcon>
                  <PopupContainer>
                    <Popup modal trigger={<FiLogOut onClick={onClickLogout} />}>
                      {close => (
                        <LogoutPopupContainer isDark={darkMode}>
                          <ConfirmMessage>
                            Are you sure you want to logout
                          </ConfirmMessage>
                          <CancelButton type="button" onClick={() => close()}>
                            Cancel
                          </CancelButton>
                          <Link to="/login" className="link">
                            <ConfirmButton type="button">Confirm</ConfirmButton>
                          </Link>
                        </LogoutPopupContainer>
                      )}
                    </Popup>
                  </PopupContainer>
                </NavMobileIcon>
              </NavMobileIconsList>
            </NavMobileContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(Header)
