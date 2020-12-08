import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leave } from '../classes/leave';


@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  leave: Leave;
  leaves:any = [];

  //new leave variables
  leaveType:any;
  startDate:any;
  numberOfDays:any;

  url: any = 'http://localhost:8000/api/leaves/all-leaves/';



  newLeave(type:any, start: any, days:any){
    
    this.leaveType = type;
    this.startDate = start;
    this.numberOfDays = days;

    console.log(this.leaveType)

  }


  

  constructor( private http: HttpClient) {



    this.leave = new Leave;
    this.leave.employeeNumber = '001';
    this.leave.type = 'Annual';
    this.leave.start = new Date();
    this.leave.status = 'pending';
    this.leave.days = '10'
    this.leaves.push(this.leave)

    this.leave = new Leave;
    this.leave.employeeNumber = '001';
    this.leave.type = 'Annual';
    this.leave.start = new Date();
    this.leave.status = 'pending';
    this.leave.days = '10'
    this.leaves.push(this.leave)
  }
  
  updateLeaveStatus(id: any, newstatus: any){
    this.leaves[id].status =  newstatus
    return(newstatus)
  }

}
