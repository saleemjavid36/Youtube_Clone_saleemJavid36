import {Link} from 'react-router-dom'

import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'

import nxtWatchContext from '../../context/nxtWatchContext'

import {
  SidbarContainer,
  SidBarMenuItems,
  SideBarlist,
  OptionsText,
  SidBarContactUsContainer,
  ContactUsHeading,
  SocialLinksContainer,
  SidBarDescription,
  SidBarIcon,
} from './styledComponent'

const Sidbar = () => (
  <nxtWatchContext.Consumer>
    {value => {
      const {activeTabItem, activeTabName, isDarkTheme} = value

      const onClickHomeTabItem = () => {
        activeTabItem('HOME')
      }
      const onClickTrendingTabItem = () => {
        activeTabItem('TRENDING')
      }

      const onClickGamingTabItem = () => {
        activeTabItem('GAMING')
      }

      const onClickSavedVideosTabItem = () => {
        activeTabItem('SAVED VIDEOS')
      }
      const textColor = isDarkTheme ? ' #ffffff' : '#0f0f0f'
      const backGroundColor = isDarkTheme ? '#181818' : ' #f9f9f9'
      return (
        <SidbarContainer isDark={backGroundColor}>
          <SidBarMenuItems>
            <Link to="/" className="link-item">
              <SideBarlist
                onClick={onClickHomeTabItem}
                bgColor={activeTabName === 'HOME' ? '#f1f5' : 'transparent'}
              >
                <AiFillHome
                  color={activeTabName === 'HOME' ? '#FF0000' : {textColor}}
                />
                <OptionsText
                  fontcolor={activeTabName === 'HOME' ? '#FF0000' : {textColor}}
                >
                  Home
                </OptionsText>
              </SideBarlist>
            </Link>

            <Link to="/trending" className="link-item">
              <SideBarlist
                onClick={onClickTrendingTabItem}
                bgColor={activeTabName === 'TRENDING' ? '#f1f5' : 'transparent'}
              >
                <AiFillFire
                  color={activeTabName === 'TRENDING' ? '#FF0000' : {textColor}}
                />
                <OptionsText
                  fontcolor={
                    activeTabName === 'TRENDING' ? '#FF0000' : {textColor}
                  }
                >
                  Trending
                </OptionsText>
              </SideBarlist>
            </Link>

            <Link to="/gaming" className="link-item">
              <SideBarlist
                onClick={onClickGamingTabItem}
                bgColor={activeTabName === 'GAMING' ? '#f1f5' : 'transparent'}
              >
                <SiYoutubegaming
                  color={activeTabName === 'GAMING' ? '#FF0000' : {textColor}}
                />
                <OptionsText
                  fontcolor={
                    activeTabName === 'GAMING' ? '#FF0000' : {textColor}
                  }
                >
                  Gaming
                </OptionsText>
              </SideBarlist>
            </Link>

            <Link to="/saved-videos" className="link-item">
              <SideBarlist
                onClick={onClickSavedVideosTabItem}
                bgColor={
                  activeTabName === 'SAVED VIDEOS' ? '#f1f5' : 'transparent'
                }
              >
                <MdPlaylistAdd
                  size={22}
                  color={
                    activeTabName === 'SAVED VIDEOS' ? '#FF0000' : {textColor}
                  }
                />
                <OptionsText
                  fontcolor={
                    activeTabName === 'SAVED VIDEOS' ? '#FF0000' : {textColor}
                  }
                >
                  Saved videos
                </OptionsText>
              </SideBarlist>
            </Link>
          </SidBarMenuItems>
          <SidBarContactUsContainer>
            <ContactUsHeading isDark={textColor}>CONTACT US</ContactUsHeading>
            <SocialLinksContainer>
              <SidBarIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SidBarIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter  logo"
              />
              <SidBarIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked  logo"
              />
            </SocialLinksContainer>
            <SidBarDescription isDark={textColor}>
              Enjoy! Now to see your channels and recommendations!
            </SidBarDescription>
          </SidBarContactUsContainer>
        </SidbarContainer>
      )
    }}
  </nxtWatchContext.Consumer>
)
export default Sidbar
