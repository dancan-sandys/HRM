import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/backend/authentication/users/services/auth.service';
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

  //list of the tasks to be displayed
  tasks: any;

  //list of leaves to be displayed
  leave:any;

  //the user obtained from the server
  user:any;

  // updating the leave status or task status
  status = {
    status: ""
  }
  

  //function to query one task
  getSingleTask(id:any){
    let task = this.tasksservice.singleTask(id)
    console.log(id)
  }
  
  //function for updating the leave status
  updateLeaveStatus( id: any, newStatus: any){
    this.status.status = newStatus
    let update = this.leaves.updateLeaveStatus(id, newStatus, this.status)
    console.log(status)
  }

  
  constructor(private tasksservice:TasksService, private leaves: LeaveService, private auth:AuthService) {
    this.tasks = this.tasksservice.tasks
    this.leave = this.leaves.leaves
    this.user  = this.auth.user
  }

  ngOnInit(): void {
  }

}
