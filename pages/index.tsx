import { SpacingCommon } from '@/components/common'
import {
  AboutMeHome,
  ContactHome,
  FooterHome,
  HeaderHome,
  PresentationHome,
  ProjectsHome,
} from '@/containers/home'

export default function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <HeaderHome />
      </div>
      <div className="home__presentation">
        <PresentationHome />
      </div>
      <SpacingCommon />
      <div className="home__aboutMe">
        <AboutMeHome />
      </div>
      <SpacingCommon />
      <div className="home__projects">
        <ProjectsHome />
      </div>
      <SpacingCommon />
      <div className="home__contact">
        <ContactHome />
      </div>
      <SpacingCommon />
      <div className="home__footer">
        <FooterHome />
      </div>
    </div>
  )
}
