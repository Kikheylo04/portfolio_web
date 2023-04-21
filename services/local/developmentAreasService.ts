import { DevelopmentAreasModel } from '@/models/developmentAreasModel'
import developmentAreaData from './data/development_areas.json'

export class DeveleopmentAreaService {
  static getDevelopmentArea(): DevelopmentAreasModel[] {
    const developmentArea: DevelopmentAreasModel[] = developmentAreaData
    return developmentArea
  }
}
