import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../services/leave.service';

@Component({
  selector: 'app-loyee-leaves',
  templateUrl: './loyee-leaves.component.html',
  styleUrls: ['./loyee-leaves.component.css']
})
export class LoyeeLeavesComponent implements OnInit {


  type:any = 2;
  
  newLeave =

    {
      "id": 1,
      "startDate": new Date(),
      "days": this.type,
      "employee": 3,
      "type": 1
    }
  applyLeave() {

    let leave = this.leaveService.newLeave(this.newLeave);

  }

  constructor(private leaveService: LeaveService) {
  }

  ngOnInit(): void {
  }

}
