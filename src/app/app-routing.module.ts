import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MheaderComponent } from './admin/mheader/mheader.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { SidebarcComponent } from './admin/sidebarc/sidebarc.component';
import { UserComponent } from './admin/user/user.component';
import { WrapperComponent } from './admin/wrapper/wrapper.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./index/index.module').then((m) => m.IndexModule),
  },

  {
    path: 'loginn',
    component: SigninComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'header', component: MheaderComponent },
      { path: 'sidebar', component: SidebarComponent },
      { path: 'wrapper', component: WrapperComponent },
      { path: 'sidebc', component: SidebarcComponent },
      { path: 'user', component: UserComponent },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
