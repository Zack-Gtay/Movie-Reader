import { CsvReader } from './CsvReader'
import { FilmData } from './filmData'
import {parseDate} from './utils'

export class filmReader extends CsvReader<FilmData>{

  mapRow(col: string[]): (string | number | Date)[]{
    return [col[0], parseInt(col[1]), col[2], parseDate(col[3]), col[4]]
  }
}