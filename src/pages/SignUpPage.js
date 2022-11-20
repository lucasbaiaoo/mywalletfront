import styled from "styled-components";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button1 from "../components/Button1";
import BottomText from "../components/BottomText";
import { Link } from "react-router-dom";

export default function SignUpPage(){
    return (
        <SignUpPageStyle>
          <Logo />
          <form onSubmit="">
            <Input
              type={"text"}
              placeholder={"Nome"}
            />
           <Input
              type={"text"}
              placeholder={"E-mail"}
            />
            <Input
              type={"password"}
              placeholder={"Senha"}
            />
            <Input
              type={"password"}
              placeholder={"Confirme a senha"}
            />
            <Button1 text={"Cadastrar"}/>
          </form>
          <Link to="/">
            <BottomText text={"Já tem uma conta? Entre agora!"}/>
          </Link>
        </SignUpPageStyle>
      );
}



const SignUpPageStyle = styled.div`
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