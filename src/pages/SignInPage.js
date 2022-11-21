import styled from "styled-components";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button1 from "../components/Button1";
import BottomText from "../components/BottomText";
import { Link } from "react-router-dom";

export default function SignInPage(){
    return (
        <SignInPageStyle>
          <Logo />
          <form onSubmit={handleSubmit}>
            <Input
              type={"email"}
              placeholder={"E-mail"}
            />
            <Input
              type={"password"}
              placeholder={"Senha"}
            />
            <Button1 text={"Entrar"}/>
          </form>
          <Link to="/cadastro">
            <BottomText text={"Primeira vez? Cadastre-se!"}/>
          </Link>
        </SignInPageStyle>
      );
}


const SignInPageStyle = styled.div`
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