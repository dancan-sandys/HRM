import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoyeeDashboardComponent } from './loyee-dashboard/loyee-dashboard.component';
import { LoyeeLeavesComponent } from './loyee-leaves/loyee-leaves.component';
import { LoyeeTasksComponent } from './loyee-tasks/loyee-tasks.component';
import { LoyeeLoginComponent } from './loyee-login/loyee-login.component';
import { LoyeeNavbarComponent } from './loyee-navbar/loyee-navbar.component';
import { LoyeeSlidebarComponent } from './loyee-slidebar/loyee-slidebar.component';
import { LoyerDashboardComponent } from './loyer-dashboard/loyer-dashboard.component';
import { LoyerSidebarComponent } from './loyer-sidebar/loyer-sidebar.component';
import { LoyerTasksComponent } from './loyer-tasks/loyer-tasks.component';
import { LoyerLoginComponent } from './loyer-login/loyer-login.component';
import { LoyerSignupComponent } from './loyer-signup/loyer-signup.component';
import { FormsModule } from '@angular/forms';
import { TasksService } from './services/tasks.service';
import { LeaveService } from './services/leave.service';
import { AuthService } from './services/auth.service';
import {HttpClientModule} from '@angular/common/http'

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
    LoyerSignupComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
