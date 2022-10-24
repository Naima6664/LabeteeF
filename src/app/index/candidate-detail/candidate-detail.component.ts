import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/model/candidate';
import { CAN } from 'src/app/model/mock';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.scss']
})
export class CandidateDetailComponent implements OnInit {
  Can:Candidate[]=CAN;

  constructor() { }

  ngOnInit(): void {
  }

}
