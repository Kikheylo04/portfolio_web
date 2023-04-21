import { CurrentsProjectsModel } from '@/models/currentsProjectsModel'
import currentsProjectsData from './data/currents_projects.json'

export class CurrentProjectService {
  static getCurrentProject(): CurrentsProjectsModel[] {
    const currentsProjects: CurrentsProjectsModel[] = currentsProjectsData
    return currentsProjects
  }
}
