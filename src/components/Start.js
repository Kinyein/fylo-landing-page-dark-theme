import React from 'react'
import introIllustration from '../img/illustration-intro.png'
import { CenterStart, CenterText, GetStartedButton, ImgStart, Paragraph, StartContainer } from '../styles/styledComponents/start'

const Start = () => {
  return (
    <StartContainer>
      <CenterStart>
        <ImgStart src={introIllustration} alt="" />

        <CenterText>
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <Paragraph>Fylo stores all your most important files in one secure location. Access them wherever
            you need, share and collaborate with friends family, and co-workers.</Paragraph>
        </CenterText>

        <GetStartedButton>Get started</GetStartedButton>
      </CenterStart>
    </StartContainer>
  )
}

export default Start