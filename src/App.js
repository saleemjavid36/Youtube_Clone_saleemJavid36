import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import nxtWatchContext from './context/nxtWatchContext'
import LoginRoute from './components/LoginRoute/index'
import Home from './components/Home/index'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'

import VideoDetails from './components/VideoItemDetailsRoute'
import SavedVideosRoute from './components/SavedVideosRoute'

import NotFound from './components/NotFound/index'
import ProtectedRoute from './components/ProtectedRoute/index'
import './App.css'

class App extends Component {
  state = {
    activeTabName: '',
    isDarkTheme: false,
    savedVideos: [],
  }

  addToSaveVideos = videoDetails => {
    const {savedVideos} = this.state
    const videoObject = savedVideos.find(each => each.id === videoDetails.id)

    if (videoObject) {
      this.setState(prev => ({
        savedVideos: [...prev.savedVideos],
      }))
    } else {
      this.setState({savedVideos: [...savedVideos, videoDetails]})
    }
  }

  removeSaveVideos = id => {
    const {savedVideos} = this.state
    const updatedVideos = savedVideos.filter(each => each.id !== id)
    this.setState({savedVideos: updatedVideos})
  }

  activeTabItem = tabName => {
    this.setState({activeTabName: tabName})
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {activeTabName, isDarkTheme, savedVideos} = this.state

    return (
      <nxtWatchContext.Provider
        value={{
          savedVideos,
          activeTabName,
          isDarkTheme,
          activeTabItem: this.activeTabItem,
          onChangeTheme: this.onChangeTheme,

          addToSaveVideos: this.addToSaveVideos,
          removeSaveVideos: this.removeSaveVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </nxtWatchContext.Provider>
    )
  }
}

export default App
