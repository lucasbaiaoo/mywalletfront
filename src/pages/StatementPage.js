import styled from "styled-components";
import TopText from "../components/TopText";
import Button2 from "../components/Button2";
//import { Link } from "react-router-dom";

export default function StatementPage() {
  return (
    <StatementPageStyle>
        <Header>
      <TopText text={"Olá, Fulano"} />
      <ion-icon name="exit-outline"></ion-icon>
      </Header>
      <Statements>
        <p>Não há registros de entrada ou saída</p>
      </Statements>
      <ButtonsBox>
      <Button2 icon={<ion-icon name="add-circle-outline"></ion-icon>} text={"Nova Entrada"}/>
      <Button2 icon={<ion-icon name="remove-circle-outline"></ion-icon>} text={"Nova Saída"}/>
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