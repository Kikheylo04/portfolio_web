import { FooterModel } from '../../models/index'
import dataFooters from './data/footer.json'
export class FooterService {
  static getFooters(): FooterModel[] {
    const listFooters: FooterModel[] = dataFooters
    return listFooters
  }
}
