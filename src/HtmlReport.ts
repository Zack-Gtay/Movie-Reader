import * as fs from "fs";
import { Report } from "./report";

export class HtmlReport extends Report{
  print(): void{
    const html = `
      <div>
        <h1>HTML Report</h1>
        <p>${this.report}</p>
      </div>
    `
    fs.writeFileSync('report.html', html)
    console.log('HTML report generated');
    
  }
}