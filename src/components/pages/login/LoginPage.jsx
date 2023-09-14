import LoginForm from "./LoginForm";
import burgerBackground from "../../../../public/images/burger-background.jpg";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <div className="container">
        <Logo />
        <LoginForm />
      </div>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  border: 1px solid blue;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .container {
    background: red;
    // background-image: url(${burgerBackground});
  }
`;
