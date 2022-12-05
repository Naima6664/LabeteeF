import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { CandidatesComponent } from "./candidates/candidates.component";
import { CategoriesComponent } from "./categories/categories.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmployerComponent } from "./employer/employer.component";

const routes: Routes = [
    {
      path: '',
      component: AdminComponent,
      children: [
        {
          path: '',
          component: DashboardComponent,
        },
        {
          path: 'emp',
          component: EmployerComponent,
        },
        {
          path: 'cat',
          component: CategoriesComponent,
        },
        {
          path: 'can',
          component: CandidatesComponent,
        },
    ],
},
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class AdminRoutingModule {}

       