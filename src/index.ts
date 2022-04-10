// let project = 5
// let drive: string = 'Fast'

// let now = new Date()

// let colors = ['Red', 'Blue', 'Yellow']

// let employee: object

// let employee: {
//     firstName: string,
//     lastName: string,
//     age: number,
//     jobTitle: string,
// }
// employee = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 21,
//     jobTitle: 'Web developer'
// }

// console.log(employee.);

// const add = (a: number, b: number):number =>{
//     return a + b
// }

// console.log(add(15,2))

// const logger = (message: string): void =>{
//     console.log(message);
    
// }
// console.log(logger('Zack'));


// Arrays

// let skills: (number | string)[] = []
// skills[0] = 'Problem Solving'
// skills[1] = 'Programming'
// skills.push('Software Architecture')
// skills.push(20)

// console.table(skills)

// Tuple

// const denise = {
//     eyes: 'brown',
//     experienced: true,
//     level: 3,
//     visited: Date()

// }

// type Student = [string, boolean, number, Date]
// let frank: Student = ['brown', true, 3, new Date()] 


// console.log(frank[0]);



// Type Alias
// type Point = {
//     x: number,
//     y: number,
// }

// let P: Point = {x: 10, y:90}


// Interface Type
// interface Person{
//     id: number,
//     firstName: string,
//     lastName: string
// }
// function getFullName(person: Person){
//     return `${person.firstName} ${person.lastName}`;
// }

// let david = {
//     id: 123,
//     firstName: 'David',
//     lastName: 'Olu'
// }
// const fullName = getFullName(david)
// console.log(fullName);


// Class

// class Person{
  

//   constructor(public id:number, public firstName:string, public lastName:string){
//     this.id = id
//     this.firstName = firstName
//     this.lastName = lastName
//   }

//   getFullName(): string {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// let person = new Person(23, 'Zack', 'Gtay')
// console.log(person.getFullName());


// Type Assertion
// interface Employee{
//   name: string;
//   code: string;
// }
// // let employee = <Employee> {} OR 
// let employee = {} as Employee
// employee.name = 'Paul';


import { ConsoleReport } from './ConsoleReport';
import { FilmCountAnalysis } from './filmCountAnalysis';
import {filmReader} from './filmReader';
import { HtmlReport } from './HtmlReport';

const reader = new filmReader('films.csv')
const analyzer = new FilmCountAnalysis(reader.data)
const consoleReport = new ConsoleReport(analyzer.run('Geena Davis'))
const htmlReport = new HtmlReport(analyzer.run('Geena Davis')) 


consoleReport.print()
htmlReport.print()


