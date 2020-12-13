import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { LoyeeDashboardComponent } from './main user functions/loyee-dashboard/loyee-dashboard.component';
import { LoyeeLeavesComponent } from './main user functions/loyee-leaves/loyee-leaves.component';
import { LoyeeTasksComponent } from './main user functions/loyee-tasks/loyee-tasks.component';
import { LoyeeNavbarComponent } from './main user functions/loyee-navbar/loyee-navbar.component';
import { LoyeeSlidebarComponent } from './main user functions/loyee-slidebar/loyee-slidebar.component';
import { LoyerDashboardComponent } from './main user functions/loyer-dashboard/loyer-dashboard.component';
import { LoyerSidebarComponent } from './main user functions/loyer-sidebar/loyer-sidebar.component';
import { LoyerTasksComponent } from './main user functions/loyer-tasks/loyer-tasks.component';
import { LoyerSignupComponent } from './main user functions/loyer-signup/loyer-signup.component';
import { AppRoutingModule } from '../app-routing.module';
import { TasksService } from './main user functions/services/tasks.service';
import { LeaveService } from './main user functions/services/leave.service';
import { TokenInterceptorService } from '../backend/authentication/tokenInterceptor/token-interceptor.service';
import { AuthGuard } from '../backend/authentication/auth.guard';
import { AuthService } from '../backend/authentication/users/services/auth.service';
import { UserComponent } from '../backend/authentication/users/user/user.component';




@NgModule({
  declarations: [

    LoyeeDashboardComponent,
    LoyeeLeavesComponent,
    LoyeeTasksComponent,
    LoyeeNavbarComponent,
    LoyeeSlidebarComponent,
    LoyerDashboardComponent,
    LoyerSidebarComponent,
    LoyerTasksComponent,
    LoyerSignupComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    TasksService,
    LeaveService,
    AuthService,  
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    
  ],
  exports: [
    LoyeeDashboardComponent,
    LoyeeLeavesComponent,
    LoyeeTasksComponent,
    LoyeeNavbarComponent,
    LoyeeSlidebarComponent,
    LoyerDashboardComponent,
    LoyerSidebarComponent,
    LoyerTasksComponent,
    LoyerSignupComponent,
    UserComponent,
  ]
})

export class BasicUserFunctionalityModule { }
