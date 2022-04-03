import styled from "styled-components"

export const NavbarStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px;
    flex-wrap: wrap;
`
export const UlNav = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
    margin: 20px 0;

    li:hover{
        transform: scale(1.1);
        transition: .3s;
    }

    a:hover{
        text-decoration: underline;
    }
`
export const LogoNav = styled.img`
    width: 120px;
`
export const LinkStyled = styled.a`
    color: #fff;
    text-decoration: none;
`