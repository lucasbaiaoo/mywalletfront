import styled from "styled-components";
import TopText from "../components/TopText";
import Input from "../components/Input";
import Button1 from "../components/Button1";

export default function IncomePage() {
  return (
    <IncomePageStyle>
      <Header>
        <TopText text={"Nova entrada"} />
      </Header>
      <Input type={"text"} placeholder={"Valor"} />
      <Input type={"text"} placeholder={"Descrição"} />
      <Button1 text={"Salvar entrada"} />
      <SpacingBox/>
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
