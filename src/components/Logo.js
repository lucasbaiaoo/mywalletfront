import styled from "styled-components";

export default function Logo(){
    return(
        <LogoStyle>
            MyWallet
        </LogoStyle>
    )
}

const LogoStyle = styled.h1`
font-family: "Saira Stencil One";
font-weight: 400;
font-size: 32px;
line-height: 50.37px;
color: #FFFFFF;
margin-bottom: 24px;
`