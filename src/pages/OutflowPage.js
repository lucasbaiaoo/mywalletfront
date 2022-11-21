import styled from "styled-components";
import TopText from "../components/TopText";
import Input from "../components/Input";
import Button1 from "../components/Button1";

export default function OutflowPage() {
  return (
    <OutflowPageStyle>
      <Header>
        <TopText text={"Nova saída"} />
      </Header>
      <Input type={"text"} placeholder={"Valor"} />
      <Input type={"text"} placeholder={"Descrição"} />
      <Button1 text={"Salvar saída"} />
      <SpacingBox/>
    </OutflowPageStyle>
  );
}

const OutflowPageStyle = styled.div`
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
