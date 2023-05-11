import { TitleCommon } from '@/components/common'
import { ItemDevelopmentAreasHome } from '@/components/home'
import { DeveleopmentAreaService, UserService } from '@/services/local'

export const AboutMeHome = () => {
  const user = UserService.getUser()
  const developmentArea = DeveleopmentAreaService.getDevelopmentArea()

  return (
    <div className="aboutMeHome" id="AboutMe">
      <div className="aboutMeHome__first">
        <div className="aboutMeHome__first__title">
          <TitleCommon title="About Me" scssName="titleCommon" />
        </div>
        <div className="aboutMeHome__first__text">
          <div className="aboutMeHome__first__text__one">
            <p>{user.longDescription}</p>
          </div>
          <div className="aboutMeHome__first__text__two">
            <p>{user.yearsExperience}</p>
            <p>{user.descriptionExperience}</p>
          </div>
        </div>
      </div>
      <div className="aboutMeHome__developmentArea">
        {developmentArea.map((item) => {
          return (
            <ItemDevelopmentAreasHome
              key={item.id}
              title={item.title}
              icon={item.icon}
              scssName="developmentAreas"
            />
          )
        })}
      </div>
    </div>
  )
}
