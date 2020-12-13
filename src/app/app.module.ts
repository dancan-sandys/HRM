import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicUserFunctionalityModule } from './basic-user-functionality/basic-user-functionality.module';
import { LoyerLoginComponent } from './backend/authentication/loyer-login/loyer-login.component';
import { LoyeeLoginComponent } from './backend/authentication/loyee-login/loyee-login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoyerLoginComponent,
    LoyeeLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicUserFunctionalityModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
