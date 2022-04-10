import * as fs from "fs";
import {parseDate} from './utils'


export abstract class CsvReader<TYPE>{
  data: TYPE[] = [];

  constructor(public fileName: string){
    this.data = this.read(fileName)
  }

  abstract mapRow(row: string[]): any;

  read(fileName: string): TYPE[] {
    return fs
  .readFileSync(this.fileName, {encoding: 'utf8'})
  .split('\n')
  .map((row:string): string[] =>{
    return row.split(',')
  })
  .map(this.mapRow)

  }
  
 
}