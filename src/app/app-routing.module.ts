import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './home/member/member.component';
import { WhlabeteComponent } from './home/whlabete/whlabete.component';
import { TalentComponent } from './talent/talent.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'talent', component: TalentComponent },
  { path: 'member', component: MemberComponent },
  { path: 'whlabete', component: WhlabeteComponent },
  { path: '', component: HomeComponent },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
