import styled from "styled-components";
import TopText from "../components/TopText";
import Button2 from "../components/Button2";
import { useContext } from "react";
import UserContext from "../contexts/userContext";
import { Link, useNavigate} from "react-router-dom";

export default function StatementPage() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  function signOut(){
    localStorage.clear();
    
    setUserInfo({});

    navigate("/", {
    });
  }

  return (
    <StatementPageStyle>
        <Header>
      <TopText text= {`Olá, ${userInfo.name}`} />
      <ion-icon name="exit-outline" onClick={signOut}></ion-icon>
      </Header>
      <Statements>
        <p>Não há registros de entrada ou saída</p>
      </Statements>
      <ButtonsBox>
      <Link to="/entrada">
      <Button2 icon={<ion-icon name="add-circle-outline"></ion-icon>} text={"Nova Entrada"}/>
      </Link>
      <Link to="/saida">
      <Button2 icon={<ion-icon name="remove-circle-outline"></ion-icon>} text={"Nova Saída"}/>
      </Link>
      </ButtonsBox>
    </StatementPageStyle>
  );
}

const StatementPageStyle = styled.div`
  height: 100vh;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Statements = styled.div`
  width: 326px;
  height: 446px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  p {
    font-family: "Raleway";
    font-weight: 400;
    font-size: 20px;
    line-height: 23.48px;
    color: #868686;
    text-align: center;
  }
`;

const ButtonsBox = styled.div`
width: 326px;
display:flex;
flex-direction: row;
justify-content: space-between;
margin-top: 13px;
`
const Header = styled.div`
width: 326px;
display:flex;
justify-content: space-between;
margin-bottom: 22px;
ion-icon{
    font-size: 30px;
    color:white;
    cursor: pointer;
}
`