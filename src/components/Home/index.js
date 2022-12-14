import {Component} from 'react'

import {IoMdClose} from 'react-icons/io'
import Header from '../Header'
import Sidbar from '../Sidbar'
import HomeAllVideos from '../HomeVideosRoute'

import {
  AppContainer,
  HomeSideBarContainer,
  HomeViewContainer,
  PremiumViewContainer,
  GetItNowButton,
  ModalContainer,
  CloseButton,
  BannerImage,
} from './styledComponent'

class Home extends Component {
  state = {
    display: 'flex',
  }

  onCloseBanner = () => {
    this.setState({display: 'none'}, this.renderHomeVideos)
  }

  render() {
    const {display} = this.state
    return (
      <div data-testid="home">
        <Header />
        <AppContainer>
          <HomeSideBarContainer>
            <Sidbar />
          </HomeSideBarContainer>

          <HomeViewContainer>
            <PremiumViewContainer display={display} data-testid="banner">
              <ModalContainer>
                <BannerImage
                  src=" https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                <GetItNowButton>GET IT NOW</GetItNowButton>
              </ModalContainer>
              <CloseButton
                type="button"
                onClick={this.onCloseBanner}
                data-testid="close"
              >
                <IoMdClose size={20} color="#231f20" />
              </CloseButton>
            </PremiumViewContainer>

            <HomeAllVideos />
          </HomeViewContainer>
        </AppContainer>
      </div>
    )
  }
}

export default Home
