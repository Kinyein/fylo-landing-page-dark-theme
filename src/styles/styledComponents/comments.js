import styled from "styled-components";


export const CommentsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px;
`
export const CommentCard = styled.div`
    max-width: 333px;
    margin: 20px;
    background-color: hsl(219, 30%, 18%);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 20px;
    color: #fff;
`
export const InfoUser = styled.div`
    display: flex;
    gap: 7px;
    align-items: center;
`
export const ImgUser = styled.img`
    width: 40px;
    border-radius: 100%;
`
