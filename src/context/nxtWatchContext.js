import React from 'react'

const nxtWatchContext = React.createContext({
  activeTabName: '',
  activeTabItem: () => {},
  onChangeTheme: () => {},
  isDarkTheme: false,

  savedVideos: [],
  addToSaveVideos: () => {},
  removeSaveVideos: () => {},
})

export default nxtWatchContext
