import { IconCommon } from '@/components/common'
import { ItemFooterHome } from '@/components/home'
import { Facebook, GitHub, Instagram, Linkedin } from '@/public/assets/icons'
import { FooterService, UserService } from '@/services/local'

export const FooterHome = () => {
  const listFooters = FooterService.getFooters()
  const user = UserService.getUser()

  return (
    <div className="footerHome">
      <div className="footerHome__bar">
        {listFooters.map((item) => {
          return (
            <ItemFooterHome
              key={item.id}
              title={item.title}
              scssName="itemFooterHome"
            />
          )
        })}
      </div>
      <div className="footerHome__icon">
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
  )
}
