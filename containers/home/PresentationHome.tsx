/* eslint-disable @next/next/no-img-element */
import { ButtonCommon } from '@/components/common'
import { UserService } from '@/services/local'
import React from 'react'

export const PresentationHome = () => {
  const user = UserService.getUser()
  return (
    <div className="presentationHome">
      <div className="presentationHome__first">
        <div className="presentationHome__first__text">
          <p>Hola, yo soy</p>
          <p>{user.fullName}</p>
          <p>{user.shortDescription}</p>
        </div>
        <div className="presentationHome__first__button">
          <div className="presentationHome__first__button__active">
            <ButtonCommon title="Download CV" scssName="buttonCommon" />
          </div>
          <div className="presentationHome__first__button__noActive">
            <ButtonCommon title="Contact me" scssName="buttonNoActiveCommon" />
          </div>
        </div>
      </div>
      <div className="presentationHome__image">
        <div></div>
        <img src={user.photo} alt="asdas" />
      </div>
    </div>
  )
}
