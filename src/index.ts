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

import fs from 'fs'

let films = fs
.readFileSync('films.csv', {encoding: 'utf8'})
.split('\n')
.map((row:string): string[] =>{
  return row.split(',')
})
.map((col) =>{
  return [col[0], parseInt(col[1]), col[2], parseDate(col[3]), col[4]]
})

let count: number = 0;
let actor: string = 'Bruce Willis';
for(let film of films){
  console.log(film);
  
  if(film[4] == 'Nicolas Cage'){
    count++
  }
  
}
console.log(`${actor} appeared in ${count} films`);

function parseDate(dateString: string): Date{
  let date = dateString.split('/').map((d) => parseInt(d))
  return new Date(date[2], date[1]-1, date[0])
}