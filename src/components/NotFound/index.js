import Header from '../Header'
import Sidbar from '../Sidbar'
import nxtWatchContext from '../../context/nxtWatchContext'

import {
  NotFoundContainer,
  NotFoundSideBarContainer,
  NotFoundContent,
  NotFoundImg,
  NfHeading,
  NfDescription,
} from './styledComponent'

const NotFound = () => (
  <nxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      const notFoundImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const isDarkHeading = isDarkTheme ? 'white' : 'black'

      const isDarkDesc = isDarkTheme ? 'white' : 'black'

      const isDarkContainer = isDarkTheme ? 'black' : 'white'

      return (
        <>
          <Header />
          <NotFoundContainer>
            <NotFoundSideBarContainer>
              <Sidbar />
            </NotFoundSideBarContainer>

            <NotFoundContent nfbgColor={isDarkContainer}>
              <NotFoundImg src={notFoundImage} alt="not found" />
              <NfHeading isDark={isDarkHeading}>Page Not Found</NfHeading>
              <NfDescription isDark={isDarkDesc}>
                we are sorry, the page you requested could not be found.
              </NfDescription>
            </NotFoundContent>
          </NotFoundContainer>
        </>
      )
    }}
  </nxtWatchContext.Consumer>
)

export default NotFound

// <FailureContainer>
//               <FailureImg src={logoSrc} alt="not found" />
//               <Heading textColor={textColor}>Page Not Found</Heading>
//               <Description textColor={textColor}>
//                 we are sorry, the page you requested could not be found
//               </Description>
//             </FailureContainer>
