import React from 'react'
import stayProductive from '../img/illustration-stay-productive.png'
import iconArrow from '../img/icon-arrow.svg'
import { CenterContainer, ContainerHowFyloWorks, ImgStayProductive, LinkSee, TextContent, TitleStayProductive } from '../styles/styledComponents/howFyloWorks'
import { StartContainer } from '../styles/styledComponents/start'

const HowFyloWorks = () => {
  return (
    <CenterContainer>
      <ContainerHowFyloWorks>
        
        <ImgStayProductive src={stayProductive} alt="Img" />

        <TextContent>
          <TitleStayProductive>Stay productive, wherever you are</TitleStayProductive>
          <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file
            storage needs.</p>
          <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email
            attachments required.</p>

          <LinkSee href="#">
            See how Fylo works
            <img src={iconArrow} alt="arrow" />
          </LinkSee>
        </TextContent>

      </ContainerHowFyloWorks >
    </CenterContainer>

  )
}

export default HowFyloWorks