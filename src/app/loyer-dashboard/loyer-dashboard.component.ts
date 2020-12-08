import { Component, OnInit } from '@angular/core';
import { Leave } from '../classes/leave';
import { Task } from '../classes/task';
import { LeaveService } from '../services/leave.service';
import { TasksService } from '../services/tasks.service';


@Component({
  selector: 'app-loyer-dashboard',
  templateUrl: './loyer-dashboard.component.html',
  styleUrls: ['./loyer-dashboard.component.css']
})
export class LoyerDashboardComponent implements OnInit {

  tasks: any;
  leave:any;
  //function to query one task
  getSingleTask(id:any){
    let task = this.tasksservice.singleTask(id)
    console.log(id)
  }
  
  //function for updating the leave status
  updateLeaveStatus( id: any, newStatus: any){
    status = this.leaves.updateLeaveStatus(id, newStatus)
    console.log(status)
  }

  constructor(private tasksservice:TasksService, private leaves: LeaveService) {
    this.tasks = this.tasksservice.tasks
    this.leave = this.leaves.leaves


  }

  ngOnInit(): void {
  }

}
