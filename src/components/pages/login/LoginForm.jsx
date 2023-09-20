import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../theme/index";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

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
        <PrimaryButton
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward className="icon-button" />}
        />
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c; //color from figma but not present in design system
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
  }

  h2 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};
    margin: 20px 10px 10px;
  }

  .icon-button {
    font-size: ${theme.fonts.P0};
    margin-top: 0.156rem;
    margin-left: 0.6rem;
  }
`;
