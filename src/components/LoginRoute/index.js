import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LoginContainer,
  LoginFormContainer,
  LogoImg,
  LoginForm,
  LoginLabel,
  LoginInput,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isChecked: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onCheck = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
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
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showSubmitError,
      errorMsg,
      isChecked,
    } = this.state

    const inputType = isChecked ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <LoginContainer isDark={darkMode}>
              <LoginFormContainer isDark={darkMode}>
                <LogoImg
                  src={
                    darkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <LoginForm onSubmit={this.submitForm} isDark={darkMode}>
                  <LoginLabel htmlFor="userName" isDark={darkMode}>
                    USERNAME
                  </LoginLabel>
                  <LoginInput
                    type="text"
                    id="userName"
                    placeholder="Username"
                    isDark={darkMode}
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                  <LoginLabel htmlFor="password" isDark={darkMode}>
                    PASSWORD
                  </LoginLabel>
                  <LoginInput
                    type={inputType}
                    id="password"
                    placeholder="Password"
                    isDark={darkMode}
                    value={password}
                    onChange={this.onChangePassword}
                  />
                  <CheckboxContainer isDark={darkMode}>
                    <CheckboxInput
                      type="checkbox"
                      value={isChecked}
                      onChange={this.onCheck}
                      isDark={darkMode}
                      id="checkBox"
                    />
                    <CheckboxLabel htmlFor="checkBox" isDark={darkMode}>
                      Show passwords
                    </CheckboxLabel>
                  </CheckboxContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </LoginForm>
              </LoginFormContainer>
            </LoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
