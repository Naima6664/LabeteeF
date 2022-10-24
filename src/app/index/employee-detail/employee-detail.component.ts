import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/model/candidate';
import { CAN } from 'src/app/model/mock';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  Can: Candidate[] = CAN;
  constructor() { }

  ngOnInit(): void {
  }

}
