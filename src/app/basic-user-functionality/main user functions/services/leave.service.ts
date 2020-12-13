import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeturlsService } from 'src/app/backend/geturls.service';
import { Leave } from '../classes/leave';


@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  [x: string]: any;

  leave: Leave | undefined;
  leaves: any = [];

  //new leave variables
  leaveType: any;
  startDate: any;
  numberOfDays: any;

  //response variable to hold responses from apis
  response: any;




  newLeave(content: any) {

    let leave = this.api.post('api/leaves/apply-leave/', content).subscribe((response) => console.log(response))

  }


  leavelist() {
    let list = this.api.get('api/leaves/all-leaves/').subscribe((response) => {
      this.response = response

      this.response.forEach((leaveResponse: any) => {
        this.leave = new Leave(leaveResponse.id, leaveResponse.employee, leaveResponse.type, leaveResponse.type, leaveResponse.startDate, leaveResponse.status)
        this.leaves.push(this.leave)


      });

    })
  }


  constructor(private api: GeturlsService) {
    this.leavelist()
  }

  updateLeaveStatus(id: any, newstatus: any, content: any) {
    let status = this.api.put(`api/leaves/update-status/${id}/`, content).subscribe((response) => console.log(response))
    this.leaves.forEach((currentleave: any) => {
     
      if (currentleave.id == id) {
        console.log(currentleave)
        currentleave.status = newstatus
      }

    });
    return (newstatus)
  }

}
