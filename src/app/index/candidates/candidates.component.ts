import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/model/candidate';
import { CAN } from 'src/app/model/mock';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
  Can: Candidate[] = CAN;


  constructor() { }

  ngOnInit(): void {
  }

}
