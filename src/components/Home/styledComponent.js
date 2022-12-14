import styled from 'styled-components'

export const AppContainer = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  @media screen (max-width: 768) {
    flex-direction: column;
  }
`
export const HomeSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HomeViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
export const PremiumViewContainer = styled.div`
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center center;
  justify-content: space-between;
  align-items: center;
  display: ${props => props.display};
  height: 40vh;
`
export const BannerImage = styled.img`
  object-fit: fill;
  width: 150px;
`
export const ModalContainer = styled.div`
  padding: 10px;
`

export const GetItNowButton = styled.button`
  color: #181818;
  background-color: transparent;
  height: 30px;
  width: 150px;
  cursor: pointer;
  border-color: #181818;
  border-style: solid;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;

  outline: none;
  cursor: pointer;
  border-radius: 10px;
  margin-top: -100px;
  margin-right: 20px;
`
export const Bannerage = styled.div``
