import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameSidContainer = styled.div`
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
export const GamingRightContainer = styled.div`
  width: 100%;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.bgColor};

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const GamingRouteContainer = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
  @media screen (max-width: 768) {
    flex-direction: column;
  }
`

export const SearchVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  overflow-y: scroll;
`

export const SearchInput = styled.input`
  width: 250px;
  border: 1px solid #64748b;
  border-radius: 2px;
  margin-left: 60px;
  padding: 3px;
  padding-right: 10px;
  padding-left: 10px;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  flex-wrap: wrap;
  background-color: ${props => props.bgColor};
`

export const ProductsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: #fff;
`

export const Image = styled.img`
  width: 300px;
  margin: 20px;
`

export const Heading = styled.h1`
  color: black;
  text-align: center;
  font-size: 30px;
`

export const Desc = styled.p`
  color: black;
  text-align: center;
  font-size: 20px;
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 32px;
`

export const Retry = styled.button`
  padding: 15px;
  color: blue;
  cursor: pointer;
`
