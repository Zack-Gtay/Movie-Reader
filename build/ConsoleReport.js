"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleReport = void 0;
const report_1 = require("./report");
class ConsoleReport extends report_1.Report {
    print() {
        console.log(this.report);
    }
}
exports.ConsoleReport = ConsoleReport;
