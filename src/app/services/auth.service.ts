import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username:any;
  password:any;
  token:any;

  userInstance(usname: any, pword: any){
    this.username = usname;
    this.password = pword;
    this.token = 'Yes'
    return(this.token)
  }



  constructor() { }
}
