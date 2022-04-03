import React from 'react'
import logo from '../img/logo.svg'
import { Link } from 'react-router-dom'
import { LinkStyled, LogoNav, NavbarStyle, UlNav } from '../styles/styledComponents/navbar'

const NavBar = () => {
  return (
    <div>
      <NavbarStyle>
        <LogoNav src={logo} alt="Fylo Logo" />

        <UlNav>
          <li> <LinkStyled href="#"> Features </LinkStyled> </li>
          <li> <LinkStyled href="#"> Team </LinkStyled> </li>
          <li> <LinkStyled href="#"> Sign In </LinkStyled> </li>

          {/* <li> <LinkStyled as={Link} to="/features"> Features </LinkStyled> </li>
          <li> <LinkStyled as={Link} to="/team"> Team </LinkStyled> </li>
          <li> <LinkStyled as={Link} to="/signin"> Sign In </LinkStyled> </li> */}
        </UlNav>
      </NavbarStyle>
    </div>
  )
}

export default NavBar