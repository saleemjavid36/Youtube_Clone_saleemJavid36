import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const NotFoundSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  padding: 5px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.nfbgColor};
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
export const NotFoundImg = styled.img`
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const NfHeading = styled.h1`
  color: ${props => props.isDark};
  text-align: center;
  font-size: 30px;
`
export const NfDescription = styled.p`
  color: ${props => props.isDark};
  text-align: center;
  font-size: 20px;
`
