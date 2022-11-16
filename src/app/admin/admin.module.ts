import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MheaderComponent } from './mheader/mheader.component';
import { MfooterComponent } from './mfooter/mfooter.component';
import { WrapperComponent } from './wrapper/wrapper.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarcComponent } from './sidebarc/sidebarc.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    SidebarcComponent,
    WrapperComponent,
    MheaderComponent,
    MfooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule
  ],
  exports:[
    MheaderComponent,
    MfooterComponent,
    SidebarComponent,
    WrapperComponent,
    SidebarcComponent
   ]
})
export class AdminModule { }
