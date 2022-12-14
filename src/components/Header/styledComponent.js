import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: ${props => props.isDark};
`
export const NavContent = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.isDark};
`
export const WebsiteLogo = styled.img`
  width: 130px;
  height: 40px;
`
export const MobileNavMenu = styled.ul`
  display: flex;
  padding: 0;
  flex-grow: 1;
  justify-content: flex-end;
  align-self: center;
  list-style-type: none;
  background-color: white;
  background-color: ${props => props.isDark};
`
export const MobileMenuItemPopup = styled.li`
  width: 60px;
  display: flex;
  justify-content: center;
  align-self: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MobileMenuItem = styled.li`
  width: 60px;
  display: flex;
  justify-content: center;
  align-self: center;
`
export const ProfileItem = styled(MobileMenuItem)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MenuBtn = styled.button`
  background-color: transparent;
  color: #7e858e;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0px;
`
export const DarkLightButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0px;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`
export const CloseButton = styled.button`
  background-color: transparent;
  color: #7e858e;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0px;
  align-self: flex-end;
`
export const MenuPopupContentUl = styled.ul`
  padding: 0;
  list-style-type: none;
`
export const NavMblPopupList = styled.li`
  display: flex;
  align-items: center;
`
export const OptionsText = styled.p`
  font-size: 19px;
  font-weight: 900;
  color: #00306e;
  font-family: 'roboto';
  background-color: transparent;
  margin-left: auto;
  margin-left: 30px;
`
export const NavProfile = styled.img`
  width: 40px;
`
export const MobileLaboutButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const DesktopLogoutButton = styled.button`
  outline: none;
  cursor: pointer;
  padding: 0px;
  background-color: transparent;
  color: #4f46e5;
  font-size: 20px;
  border: 1px solid #4f46e5;
  width: 100%;
  border-radius: 4px;
  height: 40px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ModalContainerLogout = styled.div`
  flex-grow: 1;
  //background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 458px;
  height: 140px;
  @media screen and (min-width: 768px) {
    max-width: 90%;
  }
`
export const LogoutPopupHeading = styled.p`
  font-size: 18px;
  font-weight: 400;
  //  color: ${props => props.textColor};
  margin-left: 15px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 600;
  }
`
export const LogoutPopupBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 25px;
  @media screen and (min-width: 768px) {
    margin-top: 10px;
  }
`
export const LogoutCancelBtn = styled.button`
  background-color: transparent;
  width: 90px;
  height: 30px;
  border: 1px solid #7e858e;
  color: #7e858e;
  outline: none;
  cursor: pointer;
  font-size: 16px;
`
export const LogoutConfirmBtn = styled.button`
  background-color: #3b82f6;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: 90px;
  border-radius: 5px;
  height: 30px;
`
