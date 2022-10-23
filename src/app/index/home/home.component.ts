import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/model/candidate';
import { CAN } from 'src/app/model/mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  Can: Candidate[] = CAN;

  constructor() {}

  ngOnInit(): void {}
}
