import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoyeeDashboardComponent } from './loyee-dashboard/loyee-dashboard.component';
import { LoyeeLeavesComponent } from './loyee-leaves/loyee-leaves.component';
import { LoyeeTasksComponent } from './loyee-tasks/loyee-tasks.component';
import { LoyeeLoginComponent } from './loyee-login/loyee-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoyeeDashboardComponent,
    LoyeeLeavesComponent,
    LoyeeTasksComponent,
    LoyeeLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
