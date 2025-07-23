import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #152850;
  height: 100vh;
  font-family: Roboto;
`

export const WebsiteLogo = styled.img`
  width: 150px;
  margin-bottom: 20px;
  padding-top: 20px;
`

export const HomeHeading = styled.h1`
  font-size: 24px;
  color: #ffffff;
`

export const CardImage = styled.img`
  width: 500px;
  height: 300px;
  margin: 20px 0;
`

export const LogoutButton = styled.button`
  padding: 10px;
  border-color: #ffffff;
  border-width: 1px;
  color: #ffffff;
  cursor: pointer;
  background-color: transparent;
`
export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
`
