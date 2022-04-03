import React from 'react'
import quotes from '../img/bg-quotes.png'
import profile1 from '../img/profile-1.jpg'
import profile2 from '../img/profile-2.jpg'
import profile3 from '../img/profile-3.jpg'
import { CommentCard, CommentsContainer, ImgUser, InfoUser } from '../styles/styledComponents/comments'

const Comments = () => {
  return (
    <CommentsContainer id="team">

      {/* <img src={quotes} alt="quotes"/> */}

      <CommentCard>
        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
          become a well-oiled collaboration machine.</p>

        <InfoUser>
          <ImgUser src={profile1} alt="user image" />

          <div>
            <p><strong>Satish Patel</strong></p>
            <p>Founder & CEO, Huddle</p>
          </div>
        </InfoUser>

      </CommentCard>

      <CommentCard>
        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
          become a well-oiled collaboration machine.</p>

        <InfoUser>
          <ImgUser src={profile2} alt="user image" />

          <div>
            <p><strong>Bruce McKenzie</strong></p>
            <p>Founder & CEO, Huddle</p>
          </div>
        </InfoUser>

      </CommentCard>

      <CommentCard>
        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
          become a well-oiled collaboration machine.</p>

        <InfoUser>
          <ImgUser src={profile3} alt="user image" />

          <div>
            <p><strong>Iva Boyd</strong></p>
            <p>Founder & CEO, Huddle</p>
          </div>
        </InfoUser>

      </CommentCard>

    </CommentsContainer>
  )
}

export default Comments