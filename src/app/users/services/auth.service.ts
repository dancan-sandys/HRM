import { Injectable } from '@angular/core';
import { GeturlsService } from 'src/app/backend/geturls.service';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = new User('Dancan', '1,000,000', 'staff', 'Active', 'Top few');

  getUser() {

  }

  //token variable to hold the token being used
  token: any;

  //Boolean variable to hold information on whether or not a user is logged in
  loggedIn: any = false;


  //wrong credentials
  wrongCredentials:any = false;

  //login function to call the api to log in a user from the backend server
  loginUser(credentials: any) {
    let login = this.api.post('api/authentication/login/', credentials).subscribe(
      //successful log in
      (response) => {
        this.token = response
        this.loggedIn = true

        console.log(this.token)
      },
      //unsuccessful log in
      (error) => {
        this.wrongCredentials = true
        console.log('wrong credentials')
      } 
    
    )
  }


  //loging out
  logoutUser(token: any){
    
  }

  constructor(private api: GeturlsService) {
  }
}
