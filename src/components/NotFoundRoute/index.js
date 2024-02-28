import Header from '../Header'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundParagraph,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkMode} = value
      return (
        <>
          <Header />
          <NotFoundContainer darkMode={darkMode}>
            <NotFoundImg
              src={
                darkMode
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
              alt="not found"
            />
            <NotFoundHeading darkMode={darkMode}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundParagraph darkMode={darkMode}>
              we are sorry, the page you requested could not be found.
            </NotFoundParagraph>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
