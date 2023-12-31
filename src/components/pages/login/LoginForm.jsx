import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { IoChevronForward } from "react-icons/io5"
import TextInput from "../../reusable-ui/TextInput"
import { BsPersonCircle } from "react-icons/bs"
import { theme } from "../../../theme"
import Button from "../../reusable-ui/Button"

export default function LoginForm() {
  //state
  const [username, setUsername] = useState("Lina")
  const navigate = useNavigate()

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault()
    setUsername("")
    navigate(`order/${username}`)
  }

  const handleChange = (event) => {
    setUsername(event.target.value)
  }

  //affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <div>
        <TextInput
          value={username}
          onChange={handleChange}
          placeholder={"Entrez votre prénom..."}
          required
          Icon={<BsPersonCircle />}
          className="input-login"
          version="normal"
        />
        <Button label={"Accéder à mon espace"} Icon={<IoChevronForward />} />
      </div>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 464px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
    margin: 20px 10px 10px;
  }

  .input-login {
    margin: ${theme.fonts.size.P1} 0; //handled in Parent
  }
`
