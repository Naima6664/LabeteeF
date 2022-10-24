import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/model/candidate';
import { CAN } from 'src/app/model/mock';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  Can: Candidate[] = CAN;
  constructor() { }

  ngOnInit(): void {
  }

}
