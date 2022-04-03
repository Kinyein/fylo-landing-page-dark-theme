import styled from "styled-components";

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 60px;
`
export const RowCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 60px;
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    width: 300px;
    
    &:hover{
        transform: scale(1.1);
        border-radius: 8px;
        padding: 10px;
        background: hsl(219, 30%, 18%);
        transition: all .3s;
    }
`
export const TextContainer = styled.div`
    color: #fff;
    text-align: center;
`
export const TitleCard = styled.p`
    font-weight: bold;
`
export const TextCard = styled.p`
    font-size: 12px;
`