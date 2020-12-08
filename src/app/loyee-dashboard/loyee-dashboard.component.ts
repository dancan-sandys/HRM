import { Component, OnInit } from '@angular/core';
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


  getSingleTask(id:any){
    this.requestedTask = this.tasksservice.singleTask(id)
    console.log(id)
  }
  constructor(private tasksservice: TasksService,) {
    this.tasks = this.tasksservice.tasks
  }

  
  ngOnInit(): void {
  }

}
