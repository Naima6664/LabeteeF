import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CandidateMapComponent } from './candidate-map/candidate-map.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeMapComponent } from './employee-map/employee-map.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobMapComponent } from './job-map/job-map.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'jobs',
        component: JobsComponent,
      },
      {
        path: 'job/detail',
        component: JobDetailComponent,
      },
      {
        path: 'jobs-map',
        component: JobMapComponent,
      },
      {
        path:'employees',
        component:EmployeesComponent
      },
      {
        path:'employee/detail',
        component:EmployeeDetailComponent
      },
      {
        path:'employee-maps',
        component:EmployeeMapComponent
      },
      {
        path:'candidates',
        component:CandidatesComponent
      },
      {
        path:'candidate/detail',
        component:CandidateDetailComponent
      },
      {
        path:'candidate-map',
        component:CandidateMapComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
