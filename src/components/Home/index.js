import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  HomeContainer,
  WebsiteLogo,
  HomeHeading,
  CardImage,
  LogoutButton,
  NavContainer,
} from './styledComponents'

const Home = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }

  return (
    <HomeContainer>
      <NavContainer>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <LogoutButton type="button" onClick={onClickLogout}>
          Logout
        </LogoutButton>
      </NavContainer>
      <HomeHeading>Your Flexibility, Our Excellence</HomeHeading>
      <CardImage
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        alt="digital card"
      />
    </HomeContainer>
  )
}

export default withRouter(Home)
