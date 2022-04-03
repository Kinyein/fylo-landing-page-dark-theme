import styled from "styled-components";

export const FooterStyled = styled.footer`
    width: 100%;
    background-color: hsl(216, 53%, 9%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 300px;
`
export const FormEarlyAccess = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
    flex-wrap: wrap;
    gap: 20px;
    background-color: hsl(217, 28%, 15%);
    box-shadow: 5px 5px 10px 2px #12161E;
    padding: 35px 5%;
    margin: -115px 50px 100px 50px;
    width: 50%;
    border-radius: 8px;
    color: #fff;

    @media screen and (max-width: 550px){
        margin: -200px 50px 100px 50px;
    }

    form{
        width: 100%;
        /* height: 50px; */
        /* background-color: red; */
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
        word-wrap: break-word;
    }

    input{
        padding: 10px 30px;
        width: 400px;
        margin: 10px;
        border-radius: 20px;
        border: none;
        outline: none;
    }

    button{
        color: #fff;
        padding: 10px 35px;
        margin: 10px;
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
    }
    
`
export const FooterLogo = styled.img`
    margin: 0 50px;
    align-self: flex-start;
    width: 120px;
`
export const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 50px;
    width: 100%;
    color: #fff;

    div{
        display: flex;
    }

    ul{
        list-style: none;

        li{
            margin: 10px;
        }
    }

`
export const ParagraphFooter = styled.p`
    width: 350px;
    color: #ffff;
`
export const IconsContainer = styled.div`
    display: flex;
    font-size: 30px;
    gap: 10px;
`