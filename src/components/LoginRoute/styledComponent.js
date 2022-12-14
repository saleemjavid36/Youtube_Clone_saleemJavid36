import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginForm = styled.form`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding: 18px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0 5px 15px rgb(0 0 0 / 35%);
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const LoginLogo = styled.img`
  width: 150px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`
export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #999ca0;
`
export const Input = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  margin-top: 10px;
  justify-self: center;
`
export const CheckBoxInput = styled.input`
  border: 1px solid black;
`
export const CheckboxLabel = styled.label`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 16px;
  margin-left: 10px;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  align-self: start;
  margin-top: 8px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #ff0b37;
`
