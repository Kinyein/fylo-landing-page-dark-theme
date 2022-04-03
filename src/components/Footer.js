import React from 'react'
import logo from '../img/logo.svg'
import { RiFacebookCircleLine, RiInstagramLine } from 'react-icons/ri'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { BiPhoneCall } from 'react-icons/bi'
import { MdLocationPin, MdMail } from 'react-icons/md'
import { FooterLogo, FooterStyled, FormEarlyAccess, IconsContainer, ListContainer, ParagraphFooter } from '../styles/styledComponents/footer'
import Swal from 'sweetalert2'

const Footer = () => {

  const handleSubmit = e => {
    e.preventDefault()
    validateInput(e)
  }

  const validateInput = e => {
    const valueInput = e.target[0].value



    if (valueInput === '') {
      Swal.fire({
        title: "Por favor llene el campo",
        icon: "warning",
        timer: 1500,
        showConfirmButton: false
      })
    } else if (valueInput.includes('@gmail.com')) {
      Swal.fire({
        title: "Correo enviado correctamente",
        icon: "success",
        timer: 1000,
        showConfirmButton: false
      })
    } else{
      Swal.fire({
        title: "Verifique que el correo exista o sea correcto",
        icon: "error",
        timer: 1500,
        showConfirmButton: false
      })
    }
  }

  return (
    <div>
      <FooterStyled>

        <FormEarlyAccess action="https://www.freecodecamp.com/email-submit">

          <div>
            <h1>Get early access today</h1>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
              questions, our support team would be happy to help you.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="email@gmail.com" />
            <button>Get Started For Free</button>
          </form>
        </FormEarlyAccess>

        <FooterLogo src={logo} alt="Logo" />

        <ListContainer>
          <div>
            <MdLocationPin />
            <ParagraphFooter>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua</ParagraphFooter>
          </div>

          <ul>

            <li><BiPhoneCall /> +1-543-123-4567 </li>
            <li><MdMail /> example@fylo.com</li>
          </ul>

          <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>

          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>

          <IconsContainer>
            <RiFacebookCircleLine />
            <TiSocialTwitterCircular />
            <RiInstagramLine />
          </IconsContainer>
        </ListContainer>

        {/* <div>
          <p class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="#">Kevin</a>.
          </p>
        </div> */}

      </FooterStyled>
    </div>
  )
}

export default Footer