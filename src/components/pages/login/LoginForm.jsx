import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      <h1>Bienvenue chez nous</h1>
      <br />
      <h2>Connectez-vous</h2>
      <label>
        <input
          value={nouveauNom}
          type="text"
          placeholder="Entrez votre prénom"
          onChange={handleChange}
          required
        />
      </label>
      <button label="Accédez à votre espace">Accéder à mon espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  background: green;
`;
