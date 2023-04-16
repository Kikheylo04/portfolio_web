import { SpacingCommon } from '@/components/common'
import { HeaderHome, PresentationHome } from '@/containers/home'

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
    </div>
  )
}
