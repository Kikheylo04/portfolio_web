import { TitleCommon } from '@/components/common'
import React from 'react'
import {
  ItemCurrentsProjectsHome,
  ItemFutureProjectsHome,
} from '@/components/home'
import { FutureProjectService, CurrentProjectService } from '@/services/local'

export const ProjectsHome = () => {
  const currentProject = CurrentProjectService.getCurrentProject()
  const futureProject = FutureProjectService.getFutureProject()

  return (
    <div className="projectsHome">
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
