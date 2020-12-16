import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './users/services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private _router: Router) {

  }

  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      console.log('yes, logged in')
      return true
    }
    else {
      this._router.navigate(['/'])
      return false
    }

  }


}
