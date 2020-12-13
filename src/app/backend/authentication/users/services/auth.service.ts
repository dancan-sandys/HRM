import { Injectable } from '@angular/core';
import { GeturlsService } from 'src/app/backend/geturls.service';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  //the current user
  currentUser: any;

  //token variable to hold the token being used
  token: any

  //wrong credentials
  wrongCredentials: any = false;

  getUser() {
    this.api.get('api/authentication/home/').subscribe((response) => {
      this.currentUser = response
      console.log(this.currentUser)
      this.user = new User(this.currentUser.username, this.currentUser.first_name, this.currentUser.last_name, this.currentUser.email, this.currentUser.last_login, '1000000', this.currentUser.role, this.currentUser.activeStatus, this.currentUser.ratings);
    })

  }



  //login function to call the api to log in a user from the backend server
  loginUser(credentials: any) {
    let login = this.api.post('api/authentication/login/', credentials).subscribe(
      //successful log in
      (response) => {
        this.token = response
        localStorage.setItem('token', this.token.token)
        this.getUser()
        console.log(this.token)
      },
      //unsuccessful log in
      (error) => {
        this.wrongCredentials = true
        console.log('wrong credentials')
      }

    )
  }


  //function to get the token from the locak storage
  getToken() {
    let token = localStorage.getItem('token')
    return token
  }


  //function to check if a person  is logged in or on== not
  loggedIn() {
    return !!localStorage.getItem('token')
  }


  //loging out
  logoutUser(token: any) {

  }

  constructor(private api: GeturlsService) {
    
    this.getUser()

  }
}
