import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.isDark ? '#272727' : '#ffffff')};
  font-family: Roboto;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const LoginFormContainer = styled.div`
  height: 50vh;
  width: 60%;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  @media (max-width: 600px) {
    height: 50vh;
    width: 70%;
  }
  @media (min-width: 1024px) {
    height: 57vh;
    width: 30%;
  }
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 18px;
  width: 70%;
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    width: 70%;
  }
`
export const LogoImg = styled.img`
  height: 50px;
`
export const LoginLabel = styled.label`
  margin-bottom: 9px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#616e7c')};
`
export const LoginInput = styled.input`
  border: none;
  outline: none;
  height: 30px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid ${props => (props.isDark ? '#b6c5ff' : '#e2e8f0')};
  margin-bottom: 12px;
  padding-left: 9px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  background-color: ${props => (props.isDark ? '#272727' : 'transparent')};
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CheckboxInput = styled.input`
  margin-right: 2px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const CheckboxLabel = styled.label`
  margin-left: 3px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const LoginButton = styled.button`
  background-color: #4f46e5;
  border: 1px solid #4f46e5;
  color: #ffffff;
  height: 30px;
  width: 100%;
  border-radius: 5px;
  margin-top: 9px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  margin-top: 5px;
  font-size: small;
`
