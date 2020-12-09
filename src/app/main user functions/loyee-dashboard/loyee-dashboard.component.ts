import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/users/classes/user';
import { AuthService } from 'src/app/users/services/auth.service';
import { Task } from '../classes/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-loyee-dashboard',
  templateUrl: './loyee-dashboard.component.html',
  styleUrls: ['./loyee-dashboard.component.css']
})
export class LoyeeDashboardComponent implements OnInit {


  tasks: any;
  requestedTask:any;
  user:any;


  getSingleTask(id:any){
    this.requestedTask = this.tasksservice.singleTask(id)
    console.log(id)
  }
  constructor(private tasksservice: TasksService, private auth :AuthService) {
    this.tasks = this.tasksservice.tasks
    this.user = this.auth.user;
  }

  
  ngOnInit(): void {
  }

}
