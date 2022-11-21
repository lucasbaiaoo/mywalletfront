import styled from "styled-components";
import TopText from "../components/TopText";
import Button2 from "../components/Button2";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/userContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function StatementPage() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const [userTransactions, setUserTransactions] = useState({});

  function signOut() {
    localStorage.clear();

    setUserInfo({});

    navigate("/", {});
  }

  useEffect(() => {
    const promise1 = axios.get("http://localhost:5000/statement", {
      headers: { Authorization: "Bearer " + userInfo.token },
    });

    promise1.then((answer) => {
      setUserTransactions(answer.data);
    });

    promise1.catch((error) => {
      alert(error.response.data.message);
    });
  }, []);

  return (
    <StatementPageStyle>
      <Header>
        <TopText text={`Olá, ${userInfo.name}`} />
        <ion-icon name="exit-outline" onClick={signOut}></ion-icon>
      </Header>
      <Statement justifycontent={ userTransactions?.userTransactions?.length === 0 ? "center" : "flex-start"}>
      {userTransactions?.userTransactions?.length === 0 ? <p>Não há registros de entrada ou saída.</p> :
      <>
        {userTransactions?.userTransactions?.map((userTransaction) => (
          <Transaction key={userTransaction._id}>
            <InfoBox> 
              <Info fontweight="400" fontsize="16px" lineheight="18.78px" color="#C6C6C6">{userTransaction.createdAt}</Info>
              <Info fontweight="400" fontsize="16px" lineheight="18.78px" color="#000000" marginleft="10px">
                {userTransaction.description}
              </Info>
              </InfoBox>
              <>
            <Info fontweight="400" fontsize="16px" lineheight="18.78px" justiyself="end" color= {userTransaction.type === "income" ? "#03AC00" : "#C70000"}>{userTransaction.price.toFixed(2).replace("." , ",")}</Info>
            </>
          </Transaction>
          ))}
          </>}
      </Statement>
      <Balance display={userTransactions?.userTransactions?.length === 0 ? "none" : "flex"}>
          <Info fontweight="700" fontsize="17px" lineheight="19.96px" color="#000000">SALDO</Info> 
          <Info fontweight="400" fontsize="17px" lineheight="19.96px" color={ userTransactions?.balance < 0 ? "#C70000": "#03AC00" }>{userTransactions?.balance?.toFixed(2).replace("." , ",")}</Info>
          </Balance>
      <ButtonsBox>
        <Link to="/entrada">
          <Button2
            icon={<ion-icon name="add-circle-outline"></ion-icon>}
            text={"Nova Entrada"}
          />
        </Link>
        <Link to="/saida">
          <Button2
            icon={<ion-icon name="remove-circle-outline"></ion-icon>}
            text={"Nova Saída"}
          />
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
  a{
    text-decoration: none;
  }
`;

const Statement = styled.div`
  width: 326px;
  height: 411px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  flex-direction: column;
  padding-top: 23px;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
  align-items: center;
  justify-content: ${(props) => props.justifycontent};
  background-color: #ffffff;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 13px;
`;
const Header = styled.div`
  width: 326px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  ion-icon {
    font-size: 30px;
    color: white;
    cursor: pointer;
  }
`;

const Transaction = styled.div`
  width: 305px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;
const Info = styled.p`
  font-family: "Raleway";
  font-weight: ${(props) => props.fontweight} !important;
  font-size: ${(props) => props.fontsize} !important;
  line-height: ${(props) => props.lineheight} !important;
  color: ${(props) => props.color} !important;
  margin-left: ${(props) => props.marginleft};
  margin-right: ${(props) => props.marginright}; 
  justify-self: ${(props) => props.justiyself};
`;

const InfoBox = styled.div`
display: flex;
justify-content: flex-start;
`

const Balance = styled.div`
width: 326px;
height: 58px;
display: ${(props) => props.display};
justify-content: space-between;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
background-color: #ffffff;
padding-top: 23px;
padding-left: 12px;
padding-right: 12px;
padding-bottom: 12px;
box-sizing: border-box;
`
