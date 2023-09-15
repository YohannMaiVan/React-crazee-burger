import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

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
      <div className="input-with-icon">
        <BsPersonCircle className="icon" />
        <input
          value={nouveauNom}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom"
          required
        />
      </div>
      <button label="Accédez à votre espace">Accéder à mon espace</button>
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
    border: 1.5px solid #ffa51b;
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

  .input-with-icon {
    /* border: 3px solid red; */
    background-color: #ffffff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      color: #a7a8ad;
      font-size: 15px;
      margin-right: 12px;
    }

    input {
      border: none;
      color: "#17161a";
      font-size: 15px;
    }

    &::placeholder {
      background-color: #ffffff;
      color: lightgrey;
    }
  }
`;
