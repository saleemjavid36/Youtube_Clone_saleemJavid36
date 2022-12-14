import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'

import {
  LoginContainer,
  LoginForm,
  LoginLogo,
  InputContainer,
  InputLabel,
  Input,
  CheckboxContainer,
  CheckBoxInput,
  CheckboxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponent'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    isChekboxChecked: false,
    submitError: false,
    errorMsg: '',
  }

  onSubmitSucces = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({submitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSucces(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  renderUserNameField = () => {
    const {username} = this.state
    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <Input
          type="text"
          id="username"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowHidePassword = () => {
    this.setState(prevState => ({
      isChekboxChecked: !prevState.isChekboxChecked,
    }))
  }

  renderPasswordField = () => {
    const {password, isChekboxChecked} = this.state
    return (
      <>
        <InputLabel htmlFor="username">PASSWORD</InputLabel>
        <Input
          type={isChekboxChecked ? 'text' : 'password'}
          id="username"
          value={password}
          placeholder="Password"
          onChange={this.onChangePassword}
        />
        <CheckboxContainer>
          <CheckBoxInput
            type="checkbox"
            id="checkbox"
            checked={isChekboxChecked}
            onChange={this.onShowHidePassword}
          />
          <CheckboxLabel htmlFor="checkbox">Show Password</CheckboxLabel>
        </CheckboxContainer>
      </>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {submitError, errorMsg} = this.state
    return (
      <LoginContainer>
        <LoginForm onSubmit={this.onSubmitForm}>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUserNameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {submitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
          <p>username:praneetha</p>
          <p>password:praneetha@2021</p>
        </LoginForm>
      </LoginContainer>
    )
  }
}

export default LoginRoute
// type={isCheckedPassword ? 'text' : 'password'}
