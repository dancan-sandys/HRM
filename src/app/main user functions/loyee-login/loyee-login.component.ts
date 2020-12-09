import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../users/services/auth.service';

@Component({
  selector: 'app-loyee-login',
  templateUrl: './loyee-login.component.html',
  styleUrls: ['./loyee-login.component.css']
})
export class LoyeeLoginComponent implements OnInit {

  
  
  username:any = "username";
  password:any = "password";
  credentials: any;

  login() {
    this.credentials = this.user.userInstance(this.username, this.password)
  }
  constructor(private user: AuthService) { 
  }
  



  ngOnInit(): void {
    this.user = this.username
  
  }

}
