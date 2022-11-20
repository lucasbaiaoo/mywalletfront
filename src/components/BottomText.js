import styled from "styled-components"

export default function BottomText({text}){
    return <BottomTextStyle>{`${text}`}</BottomTextStyle>
}

const BottomTextStyle = styled.p`
font-family: "Raleway";
font-weight: 700;
font-size: 15px;
line-height: 17.61px;
color: #FFFFFF;
`