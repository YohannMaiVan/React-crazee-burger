import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../theme/index";

export default function LoginForm() {
  //state
  const [nouveauNom, setNouveauNom] = useState("");
  const navigate = useNavigate();

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault;
    setNouveauNom("");
    navigate(`order/${nouveauNom}`);
  };

  const handleChange = (event) => {
    setNouveauNom(event.target.value);
  };

  //affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <div>
        <TextInput
          value={nouveauNom}
          onChange={handleChange}
          Icon={<BsPersonCircle className="icon-input" />}
          placeholder={"Entrez votre prénom..."}
          required
        />
        <div className="button-with-icon">
          <button>Accéder à mon espace</button>
          <IoChevronForward className="icon-button" />
        </div>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  /* background: green; */
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1 {
    color: #ffffff;
    font-size: 48px;
  }

  h2 {
    color: #ffffff;
    font-size: 36px;
  }

  .button-with-icon {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary_burger};
    border: none;
    text-decoration: none;
    color: ${theme.colors.white};
    border-radius: 5px;
    font-size: 15px;
    height: 53px;
    cursor: pointer;

    &:active {
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary_burger};
    }
  }

  .button-with-icon button {
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    text-decoration: none;
    margin-right: 9px;
  }

  .icon-button {
    margin-top: 3px;
  }
`;
