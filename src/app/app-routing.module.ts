import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './backend/authentication/auth.guard';
import { LoyeeDashboardComponent } from './basic-user-functionality/main user functions/loyee-dashboard/loyee-dashboard.component';
import { LoyeeLeavesComponent } from './basic-user-functionality/main user functions/loyee-leaves/loyee-leaves.component';
import { LoyeeLoginComponent } from './backend/authentication/loyee-login/loyee-login.component';
import { LoyeeTasksComponent } from './basic-user-functionality/main user functions/loyee-tasks/loyee-tasks.component';
import { LoyerDashboardComponent } from './basic-user-functionality/main user functions/loyer-dashboard/loyer-dashboard.component';
import { LoyerSignupComponent } from './basic-user-functionality/main user functions/loyer-signup/loyer-signup.component';
import { LoyerTasksComponent } from './basic-user-functionality/main user functions/loyer-tasks/loyer-tasks.component';
import { LoyerLoginComponent } from './backend/authentication/loyer-login/loyer-login.component';
import { LeaveactionsComponent } from './basic-user-functionality/leavemanagement/leaveactions/leaveactions.component';
import { AssigntasksComponent } from './basic-user-functionality/taskmanagement/assigntasks/assigntasks.component';



const routes: Routes = [
  { path: '', component: LoyeeLoginComponent },
  { path: 'admin/login', component: LoyerLoginComponent },
  { path: 'admin/dashboard', component: LoyerDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin/signup', component: LoyerSignupComponent, },
  { path: 'admin/taskview', component: LoyerTasksComponent, canActivate: [AuthGuard] },
  { path: 'staff/dashboard', component: LoyeeDashboardComponent, canActivate: [AuthGuard] },
  { path: 'staff/leaves', component: LoyeeLeavesComponent, canActivate: [AuthGuard] },
  { path: 'staff/tasks', component: LoyeeTasksComponent, canActivate: [AuthGuard] },
  { path: 'admin/leaveboard', component: LeaveactionsComponent, canActivate: [AuthGuard] },
  { path: 'admin/taskassignment', component: AssigntasksComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
