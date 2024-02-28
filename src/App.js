import {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Login from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/HomeRoute'
import Gaming from './components/GamingRoute'
import Trending from './components/TrendingRoute'
import SavedVideos from './components/SavedVideosRoute'
import VideoItemDetails from './components/VideoItemDetailsRoute'
import NotFound from './components/NotFoundRoute'
import NxtWatchContext from './context/NxtWatchContext'
import './App.css'

const activeMenuCardItem = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

class App extends Component {
  state = {
    darkMode: false,
    // eslint-disable-next-line
    activeMenu: activeMenuCardItem.home,
    isSaved: false,
    savedVideosList: [],
  }

  changeMode = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  changeActiveMenu = cardItem => {
    // eslint-disable-next-line
    this.setState({activeMenu: cardItem})
  }

  //   addToSavedVideos = () => videoDetails => {
  //     this.setState(prevState => ({
  //       savedVideosList: [...prevState.savedVideosList, videoDetails],
  //     }))
  //   }

  //   removeSavedVideos = () => videoDetails => {
  //     const {savedVideosList} = this.state
  //     const updatedList = savedVideosList.filter(
  //       each => each.id !== videoDetails.id,
  //     )
  //     this.setState({savedVideosList: updatedList})
  //   }

  updateSaveVideosList = videoDetails => {
    const {isSaved} = this.state
    if (isSaved) {
      const {savedVideosList} = this.state
      const updatedList = savedVideosList.filter(
        each => each.id !== videoDetails.id,
      )
      this.setState({savedVideosList: updatedList})
    } else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoDetails],
      }))
    }
  }

  updateSavedVideos = videoDetails => {
    this.setState(
      prevState => ({isSaved: !prevState.isSaved}),
      this.updateSaveVideosList(videoDetails),
    )
  }

  render() {
    const {darkMode, activeMenu, isSaved, savedVideosList} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          darkMode,
          activeMenu,
          isSaved,
          savedVideosList,
          changeMode: this.changeMode,
          changeActiveMenu: this.changeActiveMenu,
          updateSavedVideos: this.updateSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
