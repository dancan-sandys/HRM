import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../users/services/auth.service';



@Component({
  selector: 'app-loyee-login',
  templateUrl: './loyee-login.component.html',
  styleUrls: ['./loyee-login.component.css']
})
export class LoyeeLoginComponent implements OnInit {


  loginUserDetails = {
    username: "",
    password: ""
  }

  //wrong credentials entered
  wrongCredentials: any = this.auth.wrongCredentials

  //component function to call the login function from the authentication service
  loginUser() {
    let login = this.auth.loginUser(this.loginUserDetails)
  }

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

}
