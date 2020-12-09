import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../services/leave.service';

@Component({
  selector: 'app-loyee-leaves',
  templateUrl: './loyee-leaves.component.html',
  styleUrls: ['./loyee-leaves.component.css']
})
export class LoyeeLeavesComponent implements OnInit {

  leavetype: any;
  date: any;
  days: any;
  leave: any;
  applyLeave() {
    console.log('Yes')
    this.leave = this.leaveService.newLeave(this.leavetype, this.date, this.days);
    
   
  
  }
  
  constructor(private leaveService: LeaveService) {
  }

  ngOnInit(): void {
  }

}
