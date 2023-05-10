import { FutureProjectsModel } from '@/models/futureProjectsModel'
import futureProjectsData from './data/future_projects.json'

export class FutureProjectService {
  static getFutureProject(): FutureProjectsModel[] {
    const futureProjects: FutureProjectsModel[] = futureProjectsData
    return futureProjects
  }
}
