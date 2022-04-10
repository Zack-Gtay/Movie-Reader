"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmCountAnalysis = void 0;
const Analyzer_1 = require("./Analyzer");
class FilmCountAnalysis extends Analyzer_1.Analyzer {
    run(actor) {
        let count = 0;
        for (let film of this.data) {
            if (film[4] == actor) {
                count++;
            }
        }
        return `${actor} appeared in ${count} films`;
    }
}
exports.FilmCountAnalysis = FilmCountAnalysis;
