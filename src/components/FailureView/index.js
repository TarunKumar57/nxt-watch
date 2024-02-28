import NxtWatchContext from '../../context/NxtWatchContext'

import {
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureParagraph,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <FailureContainer isDark={darkMode}>
            <FailureImg
              src={
                darkMode
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureHeading>Oops! Something Went Wrong</FailureHeading>
            <FailureParagraph isDark={darkMode}>
              We are having some trouble to complete your request. <br />
              Please try again.
            </FailureParagraph>
            <RetryButton type="button" onClick={onRetry}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default FailureView
