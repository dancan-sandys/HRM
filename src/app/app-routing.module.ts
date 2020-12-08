import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoyeeDashboardComponent } from './loyee-dashboard/loyee-dashboard.component';
import { LoyeeLeavesComponent } from './loyee-leaves/loyee-leaves.component';
import { LoyeeLoginComponent } from './loyee-login/loyee-login.component';
import { LoyeeTasksComponent } from './loyee-tasks/loyee-tasks.component';
import { LoyerDashboardComponent } from './loyer-dashboard/loyer-dashboard.component';
import { LoyerLoginComponent } from './loyer-login/loyer-login.component';
import { LoyerSignupComponent } from './loyer-signup/loyer-signup.component';
import { LoyerTasksComponent } from './loyer-tasks/loyer-tasks.component';


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
