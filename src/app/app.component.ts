import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mousehover-employeemanagement';

  emplist: any [] = [
    { 'employeeID': '001', 'firstName': 'Alpha', 'lastName': 'A', 'salary':50000, 'dob': '05/17-2015', 'email': 'a@gmail.com' },
    { 'employeeID': '002', 'firstName': 'Bravo', 'lastName': 'B', 'salary':70000, 'dob': '03-25-2016', 'email': 'b@gmail.com' },
    { 'employeeID': '003', 'firstName': 'Charlie', 'lastName': 'C', 'salary':90000, 'dob': '09-11/2015', 'email': 'c@gmail.com' },
    { 'employeeID': '004', 'firstName': 'Delta', 'lastName': 'D', 'salary':40000, 'dob': '01/07/2016', 'email': 'd@gmail.com' },
    { 'employeeID': '005', 'firstName': 'Echo', 'lastName': 'E', 'salary':90000, 'dob': '03/09/2014', 'email': 'e@gmail.com' },
  ];

  public selectedName:any;
  
  public highlightRow(emp: { firstName: any; }) {
    this.selectedName = emp.firstName;
  }
  

}
