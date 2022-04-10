import {Report } from './report';

export class ConsoleReport extends Report{
  print(){
    console.log(this.report)
  }
}