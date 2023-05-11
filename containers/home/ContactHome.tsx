import {
  ButtonCommon,
  IconCommon,
  InputCommon,
  TitleCommon,
} from '@/components/common'
import { Facebook, GitHub, Instagram, Linkedin } from '@/public/assets/icons'
import { UserService } from '@/services/local'

export const ContactHome = () => {
  const user = UserService.getUser()
  return (
    <div className="contactHome" id="ContactMe">
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
        <div className="contactHome__first__icon">
          <IconCommon
            link={user.linkFacebook}
            icon={Facebook}
            text="No existe icon"
            scssName="iconContactHome"
          />
          <IconCommon
            link={user.linkGithub}
            icon={GitHub}
            text="No existe icon"
            scssName="iconContactHome"
          />
          <IconCommon
            link={user.linkInstagram}
            icon={Instagram}
            text="No existe icon"
            scssName="iconContactHome"
          />
          <IconCommon
            link={user.linkLinkedin}
            icon={Linkedin}
            text="No existe icon"
            scssName="iconContactHome"
          />
        </div>
      </div>
      <div className="contactHome__form">
        <form action="https://formsubmit.co/kikheylo@gmail.com" method="POST">
          <p>Contact me, let’s make magic together</p>
          <InputCommon
            type="text"
            title="Name:"
            name="Name"
            scssName="shortText"
          />
          <InputCommon
            type="email"
            title="Email:"
            name="Email"
            scssName="shortText"
          />
          <InputCommon
            type="text"
            title="Message:"
            name="Message"
            scssName="message"
          />
          <InputCommon
            type="hidden"
            name="_next"
            value="http://localhost:3000"
          />
          <InputCommon type="hidden" name="_captcha" value="false" />
          <ButtonCommon title="Send" scssName="buttonCommon" />
        </form>
      </div>
    </div>
  )
}
