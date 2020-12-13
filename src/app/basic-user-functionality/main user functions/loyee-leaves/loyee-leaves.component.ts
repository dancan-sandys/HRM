import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../services/leave.service';

@Component({
  selector: 'app-loyee-leaves',
  templateUrl: './loyee-leaves.component.html',
  styleUrls: ['./loyee-leaves.component.css']
})
export class LoyeeLeavesComponent implements OnInit {


  two:any;
  newLeave =
    {
      startDate: "2020-12-24T14:51:00Z",
      days: 2,
      "employee": 2,
      "type": "3"
    }

  applyLeave() {

    let leave = this.leaveService.newLeave(this.newLeave);

  }

  constructor(private leaveService: LeaveService) {
  }

  ngOnInit(): void {
  }

}
