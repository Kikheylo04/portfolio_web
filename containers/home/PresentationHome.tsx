/* eslint-disable @next/next/no-img-element */
import { ButtonCommon } from '@/components/common'
import { UserService } from '@/services/local'

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
            <ButtonCommon
              title="Download CV"
              link="/kikheylo_chavez.pdf"
              scssName="buttonCommon"
              download="kikheylo_chavez.pdf"
            />
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
