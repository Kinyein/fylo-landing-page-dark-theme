import styled from "styled-components";

export const StartContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px 50px;
`
export const CenterStart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    color: #fff;
    max-width: 500px;
`
export const ImgStart = styled.img`
    width: 100%;
`
export const CenterText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 30px;
    align-items: center;
`
export const Paragraph = styled.p`
    width: 80%;
`
export const GetStartedButton = styled.button`
    color: #fff;
    padding: 14px 60px;
    border-radius: 30px;
    background: linear-gradient(90deg, hsl(176, 68%, 64%), hsl(198, 60%, 50%));
    border: none;
    cursor: pointer;

    &:hover{
        background: hsl(176, 68%, 64%);
        transform: scale(1.1);
        transition: .3s;
    }
    &:active{
        background: hsl(198, 60%, 50%);
        transform: scale(.95);
        transition: .3s;
    }
`