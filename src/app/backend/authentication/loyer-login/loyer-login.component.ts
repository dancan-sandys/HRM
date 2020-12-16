import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/services/auth.service';



@Component({
  selector: 'app-loyer-login',
  templateUrl: './loyer-login.component.html',
  styleUrls: ['./loyer-login.component.css']
})
export class LoyerLoginComponent implements OnInit {

  //object to store user credentials to call API with
  loginUserDetails = {
    username: "",
    password: ""
  }

  condition:any = true;




  //wrong credentials entered
  wrongCredentials:any = this.auth.wrongCredentials


  //component function to call the login function from the authentication service
  loginUser() {
    let login = this.auth.loginManager(this.loginUserDetails)
  }



  constructor(private auth: AuthService) {

  }


  ngOnInit(): void {
  }

}
