import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { LoyeeLeavesComponent } from './main user functions/loyee-leaves/loyee-leaves.component';
import { LoyeeDashboardComponent } from './main user functions/loyee-dashboard/loyee-dashboard.component';
import { LoyeeTasksComponent } from './main user functions/loyee-tasks/loyee-tasks.component';
import { LoyeeLoginComponent } from './main user functions/loyee-login/loyee-login.component';
import { LoyeeNavbarComponent } from './main user functions/loyee-navbar/loyee-navbar.component';
import { LoyeeSlidebarComponent } from './main user functions/loyee-slidebar/loyee-slidebar.component';
import { LoyerDashboardComponent } from './main user functions/loyer-dashboard/loyer-dashboard.component';
import { LoyerSidebarComponent } from './main user functions/loyer-sidebar/loyer-sidebar.component';
import { LoyerLoginComponent } from './main user functions/loyer-login/loyer-login.component';
import { LoyerSignupComponent } from './main user functions/loyer-signup/loyer-signup.component';
import { FormsModule } from '@angular/forms';
import { LeaveService } from './main user functions/services/leave.service';
import { TasksService } from './main user functions/services/tasks.service';
import { AuthService } from './users/services/auth.service';
import { UserComponent } from './users/user/user.component';
import { LoyerTasksComponent } from './main user functions/loyer-tasks/loyer-tasks.component';
import { TokenInterceptorService } from './backend/token-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    LoyeeDashboardComponent,
    LoyeeLeavesComponent,
    LoyeeTasksComponent,
    LoyeeLoginComponent,
    LoyeeNavbarComponent,
    LoyeeSlidebarComponent,
    LoyerDashboardComponent,
    LoyerSidebarComponent,
    LoyerTasksComponent,
    LoyerLoginComponent,
    LoyerSignupComponent,
    UserComponent
  ],
  imports: [
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
      provide :HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
