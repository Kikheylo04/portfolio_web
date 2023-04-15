import { HearderModel } from '../../models/index'
import dataHeaders from './data/header.json'
export class HeaderService {
  static getHeaders(): HearderModel[] {
    const listHeaders: HearderModel[] = dataHeaders
    return listHeaders
  }
}
