import { DevelopmentAreasModel } from '@/models'
import developmentAreaData from './data/development_areas.json'

export class DeveleopmentAreaService {
  static getDevelopmentArea(): DevelopmentAreasModel[] {
    const developmentArea: DevelopmentAreasModel[] = developmentAreaData
    return developmentArea
  }
}

export class TechnologyService {
  static getTechnology() {
    const technology = developmentAreaData
    return technology
  }
}
