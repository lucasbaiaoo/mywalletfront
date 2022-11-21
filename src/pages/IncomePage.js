import styled from "styled-components";
import TopText from "../components/TopText";
import Input from "../components/Input";
import Button1 from "../components/Button1";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../contexts/userContext";

export default function IncomePage() {
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const promise1 = axios.post("http://localhost:5000/statement", {
      price: price,
      description: description,
      name: userInfo.name,
      type: "income"  
    });

    promise1.then(() => navigate("/extrato", {}));

    promise1.catch((error) => {
      alert(error.response.data.message);
      setIsLoading(false);
    });
  }

  return (
    <IncomePageStyle>
      <Header>
        <TopText text={"Nova entrada"} />
      </Header>
      <form onSubmit={handleSubmit}>
        <Input
          type={"number"}
          placeholder={"Valor"}
          onChange={(e) => setPrice(e.target.value)}
          disabled={isLoading}
          step="0.01"
        />
        <Input
          type={"text"}
          placeholder={"Descrição"}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isLoading}
        />
        <Button1
          text={"Salvar entrada"}
          disabled={isLoading}
          isFilled={price.length === 0 || description.length === 0}
        />
      </form>
      <SpacingBox />
    </IncomePageStyle>
  );
}

const IncomePageStyle = styled.div`
  height: 100vh;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  width: 326px;
  display: flex;
  margin-bottom: 40px;
`;

const SpacingBox = styled.div`
  width: 326px;
  height: 335px;
`;
