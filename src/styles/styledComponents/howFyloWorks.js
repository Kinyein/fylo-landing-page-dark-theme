import styled from "styled-components";

export const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 100px 0;
`
export const ContainerHowFyloWorks = styled.div`
    display: flex;
    gap: 40px;
    flex-direction: row;
    justify-content: center; 
    margin: 0 50px;
    width: 90%;
    
    @media (max-width: 550px){
        flex-wrap: wrap;
    }
`
export const ImgStayProductive = styled.img`
    width: 70%;

    @media (max-width: 550px){
        width: 100%;
    }
`
export const TextContent = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    margin: 20px;
    /* width: 50%; */

    
`
export const TitleStayProductive = styled.h1`
    width: 60%;
    
`
export const LinkSee = styled.a`
    color: hsl(176, 68%, 64%);
    display: flex;
    align-items: center;

    &:hover{
        color: #fff;
        transition: .3s;
        transform: scale(1.1);
    }
`