import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

  getUser(role:any) {
    this.api.get('api/authentication/home/').subscribe((response) => {
      this.currentUser = response
      console.log(this.currentUser)
      this.user = new User(this.currentUser.username, this.currentUser.first_name, this.currentUser.last_name, this.currentUser.email, this.currentUser.last_login, '1000000', this.currentUser.role, this.currentUser.activeStatus, this.currentUser.ratings);
      console.log(this.user)
      this._router.navigate([`/${role}/dashboard`])      
    })

  }



  //login function to call the api to log in a user from the backend server
  loginManager(credentials: any) {
    let login = this.api.post('api/authentication/login/', credentials).subscribe(
      //successful log in
      (response) => {
        this.token = response
        localStorage.setItem('token', this.token.token)
        this.getUser('admin')
        console.log(this.token)
      },
      //unsuccessful log in
      (error) => {
        this.wrongCredentials = true
        console.log('wrong credentials')
      }

    )
  }

  loginStaff(credentials: any) {
    let login = this.api.post('api/authentication/login/', credentials).subscribe(
      //successful log in
      (response) => {
        this.token = response
        sessionStorage.setItem('token', this.token.token)
        this.getUser('staff')
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
    let token = sessionStorage.getItem('token')
    this.token = sessionStorage.getItem('token')
    return token
  }


  //function to check if a person  is logged in or on== not
  loggedIn() {
    console.log(!!sessionStorage.getItem('token'))
    return !!sessionStorage.getItem('token')
  }


  //loging out
  logoutUser(token: any) {

  }

  constructor(private api: GeturlsService, private _router : Router) {
    
  }
}
