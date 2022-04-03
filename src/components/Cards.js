import React from 'react'
import logoPc from '../img/icon-access-anywhere.svg'
import logoSecuryty from '../img/icon-security.svg'
import logoColaboration from '../img/icon-collaboration.svg'
import logoAnyfile from '../img/icon-any-file.svg'
import { Card, CardsContainer, RowCardContainer, TextCard, TextContainer, TitleCard } from '../styles/styledComponents/cards'
import { StartContainer } from '../styles/styledComponents/start'

const Cards = () => {
  return (
    <CardsContainer>

      <RowCardContainer>
        <Card>
          <img src={logoPc} alt="pc" />

          <TextContainer>
            <TitleCard>Access your files, anywhere</TitleCard>
            <TextCard>The ability to use a smartphone, tablet, or computer to access your account means your
              files follow you everywhere.</TextCard>
          </TextContainer>

        </Card>

        <Card>
          <img src={logoSecuryty} alt="security" />

          <TextContainer>
            <TitleCard>Security you can trust</TitleCard>
            <TextCard>2-factor authentication and user-controlled encryption are just a couple of the security
              features we allow to help secure your files.</TextCard>
          </TextContainer>

        </Card>
      </RowCardContainer>

      <RowCardContainer>
        <Card>
          <img src={logoColaboration} alt="colaboration" />

          <TextContainer>
            <TitleCard>Real-time collaboration</TitleCard>
            <TextCard>Securely share files and folders with friends, family and colleagues for live collaboration.
              No email attachments required.</TextCard>
          </TextContainer>

        </Card>

        <Card>
          <img src={logoAnyfile} alt="file" />

          <TextContainer>
            <TitleCard>Store any type of file</TitleCard>
            <TextCard>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
              file types to be securely stored and shared.</TextCard>
          </TextContainer>

        </Card>
      </RowCardContainer>

    </CardsContainer>
  )
}

export default Cards