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


function parseDate(dateString: string): Date{
  let date = dateString.split('/').map((d) => parseInt(d))
  return new Date(date[2], date[1]-1, date[0])
}
console.log(`${actor} appeared in ${count} films`);