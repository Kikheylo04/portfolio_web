import { InputCommon, TitleCommon } from '@/components/common'
import React from 'react'

export const ContactHome = () => {
  return (
    <div className="contactHome">
      <div className="contactHome__first">
        <div className="contactHome__first__title">
          <TitleCommon title="Contact" scssName="titleCommon" />
        </div>
        <div className="contactHome__first__subtitle">
          <p>Connect with me:</p>
        </div>
        <div className="contactHome__first__text">
          <p> Satisfied with me? Please contact me</p>
        </div>
      </div>
      <div className="contactHome__form">
        <p>Contact me, lets make magic together</p>
        <InputCommon type="text" title="Name:" scssName="shortText" />
        <InputCommon type="email" title="Email:" scssName="shortText" />
        <InputCommon type="text" title="Message:" scssName="message" />
      </div>
    </div>
  )
}
