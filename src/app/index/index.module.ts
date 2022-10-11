import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { JobsComponent } from './jobs/jobs.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobMapComponent } from './job-map/job-map.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeMapComponent } from './employee-map/employee-map.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CandidateMapComponent } from './candidate-map/candidate-map.component';


@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    JobsComponent,
    JobDetailComponent,
    JobMapComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    EmployeeMapComponent,
    CandidatesComponent,
    CandidateDetailComponent,
    CandidateMapComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class IndexModule { }
