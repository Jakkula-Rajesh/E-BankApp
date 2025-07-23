import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #152850;
  height: 100vh;
  font-family: Roboto;
`

export const Logo = styled.img`
  width: 400px;
  height: 400px;
  background-color: #e0eefe;
  padding-top: 30px;
  padding-bottom: 30px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #ffffff;
  height: 420px;
  padding: 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const Heading = styled.h1`
  color: #152850;
  margin-top: 70px;
`

export const Label = styled.label`
  margin-top: 10px;
  color: #152850;
`

export const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
`

export const LoginButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #0b69ff;
  color: #ffffff;
  border: none;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  color: red;
`
