import { TechnologyModel } from './technologyModels'

export interface DevelopmentAreasModel {
  id: number
  icon: string
  title: string
  link: string
  technologies: TechnologyModel[]
}
