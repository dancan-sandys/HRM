import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username:any;
  password:any;
  token:any;

  user: User = new User('Dancan', '1,000,000', 'staff', 'Active', 'Top few');

  userInstance(usname: any, pword: any){
    this.username = usname;
    this.password = pword;
    this.token = 'Yes'
    return(this.token)
  }



  constructor() { 
  }
}
