"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate = void 0;
function parseDate(dateString) {
    let date = dateString.split('/').map((d) => parseInt(d));
    return new Date(date[2], date[1] - 1, date[0]);
}
exports.parseDate = parseDate;
