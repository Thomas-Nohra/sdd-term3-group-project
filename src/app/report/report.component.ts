import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private ps: PeopleService) {
  }

  // People Variable to hold all people
  people: any;

  ngOnInit(): void {
    // Call PeopleService Method "getPeople" and assign all data to 'people'
    this.people = this.ps.getPeople() 
    
  }

}