import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../services/leave.service';

@Component({
  selector: 'app-loyee-leaves',
  templateUrl: './loyee-leaves.component.html',
  styleUrls: ['./loyee-leaves.component.css']
})
export class LoyeeLeavesComponent implements OnInit {


  type: any = 2;
  employee: any = 2;
  days: any = 3;
  startDate: any = new Date()

  _newLeave = {
    startDate: new Date(this.startDate),
    days: 23,
    employee: 3,
    type: 1
  }

  applyLeave() {
    let leave = this.leaveService.newLeave(this._newLeave);

    console.log(typeof (this._newLeave.startDate))
    console.log(typeof (this.employee))
    console.log(typeof (this.days))
    console.log(typeof (this.startDate))
  }

  constructor(private leaveService: LeaveService) {
  }

  ngOnInit(): void {
  }

}
