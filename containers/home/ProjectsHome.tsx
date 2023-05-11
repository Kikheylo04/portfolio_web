import { TitleCommon } from '@/components/common'
import {
  ItemCurrentsProjectsHome,
  ItemFutureProjectsHome,
} from '@/components/home'
import { CurrentProjectService, FutureProjectService } from '@/services/local'

export const ProjectsHome = () => {
  const currentProject = CurrentProjectService.getCurrentProject()
  const futureProject = FutureProjectService.getFutureProject()

  return (
    <div className="projectsHome" id="Projects">
      <div className="projectsHome__first">
        <div className="projectsHome__first__title">
          <TitleCommon title="Projects" scssName="titleCommon" />
        </div>
        <div className="projectsHome__first__subtitle">
          <p>Current projects:</p>
          <div className="projectsHome__first__subtitle__currentProjects">
            {currentProject.map((item) => {
              return (
                <ItemCurrentsProjectsHome
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  text={item.text}
                  viewLive={item.viewLive}
                  gitHub={item.gitHub}
                  scssName="currentProject"
                />
              )
            })}
          </div>
          <p>Future projects:</p>
          <div className="projectsHome__first__subtitle__futureProjects">
            {futureProject.map((item) => {
              return (
                <ItemFutureProjectsHome
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  text={item.text}
                  viewLive={item.viewLive}
                  gitHub={item.gitHub}
                  scssName="futureProject"
                />
              )
            })}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
