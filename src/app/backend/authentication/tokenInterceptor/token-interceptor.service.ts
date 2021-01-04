import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthService } from 'src/app/backend/authentication/users/services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private _authService: AuthService) {

  }

  // Check if a user is logged in.




  intercept(req: any, next: any) {
    if (this._authService.loggedIn()) {
      console.log('Jesus')
      let authService = this.injector.get(AuthService)
      let tokenizedReq = req.clone({
        setHeaders: {

          Authorization: `token ${authService.getToken()}`
        }
      })
      return next.handle(tokenizedReq)

    } 
    
    else {
      console.log('No')
      let authService = this.injector.get(AuthService)
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `bearer xx.yy.zz`
        }
      })
      return next.handle(tokenizedReq)
    }

  }
  
}
