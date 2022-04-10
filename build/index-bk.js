"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let films = fs_1.default
    .readFileSync('films.csv', { encoding: 'utf8' })
    .split('\n')
    .map((row) => {
    return row.split(',');
})
    .map((col) => {
    return [col[0], parseInt(col[1]), col[2], parseDate(col[3]), col[4]];
});
let count = 0;
let actor = 'Bruce Willis';
for (let film of films) {
    console.log(film);
    if (film[4] == 'Nicolas Cage') {
        count++;
    }
}
function parseDate(dateString) {
    let date = dateString.split('/').map((d) => parseInt(d));
    return new Date(date[2], date[1] - 1, date[0]);
}
console.log(`${actor} appeared in ${count} films`);
