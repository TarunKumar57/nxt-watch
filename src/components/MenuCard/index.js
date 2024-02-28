import {Link} from 'react-router-dom'
import {MdHome} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  MenuCardContainer,
  MenuCardList,
  MenuCardListItem,
  MenuCardListText,
  MenuCardBottomContainer,
  ContactUs,
  MenuCardLogoContainer,
  MenuCardLogo,
} from './styledComponents'

const activeMenuCardItem = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const MenuCard = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkMode, activeMenu, changeActiveMenu} = value
      const linkStyle = {textDecoration: 'none'}
      const iconColor = darkMode ? '#424242' : '#7e858e'
      const iconActiveColor = '#ff0b37'
      return (
        <>
          <MenuCardContainer isDark={darkMode}>
            <MenuCardList>
              <Link to="/" style={linkStyle}>
                <MenuCardListItem
                  key="HOME"
                  isDark={darkMode}
                  isActive={activeMenu === activeMenuCardItem.home}
                  onClick={() => changeActiveMenu(activeMenuCardItem.home)}
                >
                  <MdHome
                    color={
                      activeMenu === activeMenuCardItem.home
                        ? iconActiveColor
                        : iconColor
                    }
                  />
                  <MenuCardListText>Home</MenuCardListText>
                </MenuCardListItem>
              </Link>
              <Link to="/trending" style={linkStyle}>
                <MenuCardListItem
                  key="TRENDING"
                  isDark={darkMode}
                  isActive={activeMenu === activeMenuCardItem.trending}
                  onClick={() => changeActiveMenu(activeMenuCardItem.trending)}
                >
                  <HiFire
                    color={
                      activeMenu === activeMenuCardItem.trending
                        ? iconActiveColor
                        : iconColor
                    }
                  />
                  <MenuCardListText>Trending</MenuCardListText>
                </MenuCardListItem>
              </Link>
              <Link to="/gaming" style={linkStyle}>
                <MenuCardListItem
                  key="GAMING"
                  isDark={darkMode}
                  isActive={activeMenu === activeMenuCardItem.gaming}
                  onClick={() => changeActiveMenu(activeMenuCardItem.gaming)}
                >
                  <SiYoutubegaming
                    color={
                      activeMenu === activeMenuCardItem.gaming
                        ? iconActiveColor
                        : iconColor
                    }
                  />
                  <MenuCardListText>Gaming</MenuCardListText>
                </MenuCardListItem>
              </Link>
              <Link to="/saved-videos" style={linkStyle}>
                <MenuCardListItem
                  key="SAVED_VIDEOS"
                  isDark={darkMode}
                  isActive={activeMenu === activeMenuCardItem.savedVideos}
                  onClick={() =>
                    changeActiveMenu(activeMenuCardItem.savedVideos)
                  }
                >
                  <RiMenuAddFill
                    color={
                      activeMenu === activeMenuCardItem.savedVideos
                        ? iconActiveColor
                        : iconColor
                    }
                  />
                  <MenuCardListText>Saved videos</MenuCardListText>
                </MenuCardListItem>
              </Link>
            </MenuCardList>
            <MenuCardBottomContainer>
              <ContactUs>CONTACT US</ContactUs>
              <MenuCardLogoContainer>
                <MenuCardLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <MenuCardLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <MenuCardLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </MenuCardLogoContainer>
              <ContactUs>
                Enjoy! Now to see your channels and recommendations!
              </ContactUs>
            </MenuCardBottomContainer>
          </MenuCardContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default MenuCard
