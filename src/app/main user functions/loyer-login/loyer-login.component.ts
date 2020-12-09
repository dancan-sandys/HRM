import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../users/services/auth.service';

@Component({
  selector: 'app-loyer-login',
  templateUrl: './loyer-login.component.html',
  styleUrls: ['./loyer-login.component.css']
})
export class LoyerLoginComponent implements OnInit {

  username: any = "username";
  password: any = "password";
  credentials:any;

  login(){
    this.credentials = this.user.userInstance(this.username, this.password)
  }


  constructor(private user: AuthService) {

  }
  

  ngOnInit(): void {
  }

}
