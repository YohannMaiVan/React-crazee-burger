import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function OrderPage() {
  const { username } = useParams();
  return (
    <OrderPageStyled>
      <div className="container">
        <div className="navbar">
          NAVBAR
          <h1>Bonjour {username}</h1>
          <Link to="/">
            <button>Deconnexion</button>
          </Link>
        </div>
        <div className="main">MAIN</div>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;

    .navbar {
      background: blue;
      height: 10vh;
    }
    .main {
      background: green;
      flex: 1;
    }
  }
`;
