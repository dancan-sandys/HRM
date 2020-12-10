import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoyeeDashboardComponent } from './main user functions/loyee-dashboard/loyee-dashboard.component';
import { LoyeeLeavesComponent } from './main user functions/loyee-leaves/loyee-leaves.component';
import { LoyeeLoginComponent } from './main user functions/loyee-login/loyee-login.component';
import { LoyeeTasksComponent } from './main user functions/loyee-tasks/loyee-tasks.component';
import { LoyerDashboardComponent } from './main user functions/loyer-dashboard/loyer-dashboard.component';
import { LoyerLoginComponent } from './main user functions/loyer-login/loyer-login.component';
import { LoyerSignupComponent } from './main user functions/loyer-signup/loyer-signup.component';
import { LoyerTasksComponent } from './main user functions/loyer-tasks/loyer-tasks.component';



const routes: Routes = [
  { path: '', component: LoyeeLoginComponent},
  { path: 'admin/login', component: LoyerLoginComponent},
  { path: 'admin/dashboard', component: LoyerDashboardComponent},
  { path: 'admin/signup', component: LoyerSignupComponent},
  { path: 'admin/taskview', component: LoyerTasksComponent},
  { path: 'staff/dashboard', component: LoyeeDashboardComponent},
  { path: 'staff/leaves', component: LoyeeLeavesComponent },
  { path: 'staff/tasks', component: LoyeeTasksComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
