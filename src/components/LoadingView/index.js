import Loader from 'react-loader-spinner'
import {LoaderContainer} from './styledComponents'

const Loading = () => (
  <LoaderContainer data-testid="loader">
    <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
  </LoaderContainer>
)

export default Loading
