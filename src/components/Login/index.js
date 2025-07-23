import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {
  LoginContainer,
  LoginForm,
  Logo,
  Heading,
  Label,
  Input,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    userId: '',
    pin: '',
    showError: false,
    errorMsg: '',
  }

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    if (userId === '' && pin === '') {
      this.setState({
        showError: true,
        errorMsg: 'Invalid User ID',
      })
      return
    }
    if (userId === '') {
      this.setState({showError: true, errorMsg: 'Invalid User ID'})
      return
    }
    if (pin === '') {
      this.setState({showError: true, errorMsg: 'Invalid PIN'})
      return
    }

    const userDetails = {user_id: userId, pin}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/ebank/login', options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({showError: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {userId, pin, showError, errorMsg} = this.state

    return (
      <LoginContainer>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
          alt="website login"
        />
        <LoginForm onSubmit={this.onSubmitForm}>
          <Heading>Welcome Back!</Heading>
          <Label htmlFor="userId">User ID</Label>
          <Input
            id="userId"
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={this.onChangeUserId}
          />
          <Label htmlFor="pin">PIN</Label>
          <Input
            id="pin"
            type="password"
            placeholder="Enter PIN"
            value={pin}
            onChange={this.onChangePin}
          />
          <LoginButton type="submit">Login</LoginButton>
          {showError && <ErrorMsg>{errorMsg}</ErrorMsg>}
        </LoginForm>
      </LoginContainer>
    )
  }
}

export default withRouter(Login)
