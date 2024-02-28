import React from 'react'

const NxtWatchContext = React.createContext({
  darkMode: false,
  changeMode: () => {},
  activeMenu: 'INITIAL',
  changeActiveMenu: () => {},
  savedVideosList: [],
  isSaved: false,
  updateSavedVideos: () => {},
})

export default NxtWatchContext
