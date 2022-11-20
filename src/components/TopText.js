import styled from "styled-components"

export default function TopText({text}){
    return <TopTextStyle>{`${text}`}</TopTextStyle>
}

const TopTextStyle = styled.h1`
font-family: "Raleway";
font-weight: 700;
font-size: 26px;
line-height: 30.52px;
color: #FFFFFF;
`