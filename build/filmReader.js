"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filmReader = void 0;
const CsvReader_1 = require("./CsvReader");
const utils_1 = require("./utils");
class filmReader extends CsvReader_1.CsvReader {
    mapRow(col) {
        return [col[0], parseInt(col[1]), col[2], (0, utils_1.parseDate)(col[3]), col[4]];
    }
}
exports.filmReader = filmReader;
