import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import nxtWatchContext from '../../context/nxtWatchContext'
import {
  NavContainer,
  NavContent,
  WebsiteLogo,
  MobileNavMenu,
  MobileMenuItemPopup,
  MenuBtn,
  ModalContainer,
  CloseButton,
  MenuPopupContentUl,
  NavMblPopupList,
  OptionsText,
  MobileMenuItem,
  NavProfile,
  ProfileItem,
  MobileLaboutButton,
  DesktopLogoutButton,
  ModalContainerLogout,
  LogoutPopupHeading,
  LogoutPopupBtnContainer,
  LogoutCancelBtn,
  LogoutConfirmBtn,
  DarkLightButton,
} from './styledComponent'
import './index.css'

const Header = props => (
  <nxtWatchContext.Consumer>
    {value => {
      const {onChangeTheme, isDarkTheme} = value
      const NavLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const navBacgroundColor = isDarkTheme ? '#181818' : ' #f9f9f9'
      const onClickthemButton = () => {
        onChangeTheme()
      }

      const onClickLogoutConfirm = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <NavContainer isDark={navBacgroundColor}>
          <NavContent isDark={navBacgroundColor}>
            <Link to="/">
              <WebsiteLogo src={NavLogoUrl} alt="website logo" />
            </Link>
            <MobileNavMenu isDark={navBacgroundColor}>
              <MobileMenuItem>
                <DarkLightButton
                  onClick={onClickthemButton}
                  data-testid="theme"
                >
                  {isDarkTheme ? (
                    <FiSun size="30" color="white" />
                  ) : (
                    <FaMoon size="30" />
                  )}
                </DarkLightButton>
              </MobileMenuItem>

              <MobileMenuItemPopup>
                <Popup
                  trigger={
                    <MenuBtn type="button">
                      <GiHamburgerMenu size="30" />
                    </MenuBtn>
                  }
                  className="popup-content"
                  position="bottom center"
                  contentStyle={{width: '270px'}}
                  arrow={false}
                  mouseLeaveDelay={300}
                  mouseEnterDelay={0}
                  offsetX={-20}
                >
                  {close => (
                    <ModalContainer>
                      <CloseButton
                        type="button"
                        onClick={() => close()}
                        data-testid="closeButton"
                      >
                        <IoMdClose size="30" />
                      </CloseButton>
                      <MenuPopupContentUl>
                        <Link to="/" className="link-item">
                          <NavMblPopupList>
                            <AiFillHome size={22} />
                            <OptionsText>Home</OptionsText>
                          </NavMblPopupList>
                        </Link>

                        <Link to="/trending" className="link-item">
                          <NavMblPopupList>
                            <AiFillFire size={22} />
                            <OptionsText>Trending</OptionsText>
                          </NavMblPopupList>
                        </Link>

                        <Link to="/gaming" className="link-item">
                          <NavMblPopupList>
                            <SiYoutubegaming size={22} />
                            <OptionsText>Gaming</OptionsText>
                          </NavMblPopupList>
                        </Link>

                        <Link to="/saved-videos" className="link-item">
                          <NavMblPopupList>
                            <MdPlaylistAdd size={22} />
                            <OptionsText>Saved videos</OptionsText>
                          </NavMblPopupList>
                        </Link>
                      </MenuPopupContentUl>
                    </ModalContainer>
                  )}
                </Popup>
              </MobileMenuItemPopup>

              <ProfileItem>
                <NavProfile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ProfileItem>

              <MobileMenuItem>
                <Popup
                  modal
                  trigger={
                    <MobileLaboutButton data-testid="iconButton">
                      <FiLogOut size="30" />
                    </MobileLaboutButton>
                  }
                  className="popup-content-logout"
                >
                  {close => (
                    <ModalContainerLogout>
                      <LogoutPopupHeading>
                        Are you sure, you want to logout
                      </LogoutPopupHeading>
                      <LogoutPopupBtnContainer>
                        <LogoutCancelBtn onClick={() => close()}>
                          Cancel
                        </LogoutCancelBtn>
                        <LogoutConfirmBtn onClick={onClickLogoutConfirm}>
                          Confirm
                        </LogoutConfirmBtn>
                      </LogoutPopupBtnContainer>
                    </ModalContainerLogout>
                  )}
                </Popup>

                <Popup
                  modal
                  trigger={
                    <DesktopLogoutButton type="button" data-testid="iconButton">
                      Logout
                    </DesktopLogoutButton>
                  }
                  className="popup-content-logout"
                >
                  {close => (
                    // bgColor={bgColor}
                    <ModalContainerLogout>
                      <LogoutPopupHeading>
                        Are you sure, you want to logout
                      </LogoutPopupHeading>
                      <LogoutPopupBtnContainer>
                        <LogoutCancelBtn onClick={() => close()}>
                          Cancel
                        </LogoutCancelBtn>

                        <LogoutConfirmBtn onClick={onClickLogoutConfirm}>
                          Confirm
                        </LogoutConfirmBtn>
                      </LogoutPopupBtnContainer>
                    </ModalContainerLogout>
                  )}
                </Popup>
              </MobileMenuItem>
            </MobileNavMenu>
          </NavContent>
        </NavContainer>
      )
    }}
  </nxtWatchContext.Consumer>
)
export default withRouter(Header)
