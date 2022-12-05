import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { MheaderComponent } from './mheader/mheader.component';
import { MfooterComponent } from './mfooter/mfooter.component';
import { WrapperComponent } from './wrapper/wrapper.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarcComponent } from './sidebarc/sidebarc.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TalentComponent } from './talent/talent.component';
import { UserComponent } from './user/user.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { CandidatesFormComponent } from './candidates-form/candidates-form.component';
import { EmployerComponent } from './employer/employer.component';
import { EmployerFormComponent } from './employer-form/employer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    SidebarcComponent,
    WrapperComponent,
    MheaderComponent,
    TalentComponent,
    UserComponent,
    MfooterComponent,
    DashboardComponent,
    CategoriesComponent,
    CategoriesFormComponent,
    CandidatesComponent,
    CandidatesFormComponent,
    EmployerComponent,
    EmployerFormComponent,
  ],
  
  imports: [
    NgxDatatableModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    TableModule,
    FormsModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    MheaderComponent,
    MfooterComponent,
    SidebarComponent,
    WrapperComponent,
    SidebarcComponent,
  ],
})
export class AdminModule {}
