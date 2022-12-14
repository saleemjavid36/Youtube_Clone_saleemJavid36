import styled from 'styled-components'

export const SidbarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: ${props => props.isDark};
`

export const SidBarMenuItems = styled.ul`
  padding: 0;
  list-style-type: none;
`
export const SideBarlist = styled.li`
  display: flex;
  padding: 15px;
  align-items: center;
  height: 42px;
  background-color: ${props => props.bgColor};
  :hover {
    background: #f1f1f1;
  }
`
export const OptionsText = styled.p`
  font-size: 20px;
  font-weight: 900;
  font-family: 'roboto';
  margin-left: 30px;
  color: ${props => props.fontcolor};
`
export const SidBarContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ContactUsHeading = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.isDark};
`
export const SocialLinksContainer = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
  width: 80%;
`
export const SidBarDescription = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  color: ${props => props.isDark};
`
export const SidBarIcon = styled.img`
  width: 40px;
`
