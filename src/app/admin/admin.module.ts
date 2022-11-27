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
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    TableModule,
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
