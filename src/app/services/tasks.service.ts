import { Injectable } from '@angular/core';
import { Task } from '../classes/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  task: Task;
  tasks:any = [];
  requestedtask: any;

  
  constructor() { 
    this.task = new Task;
    this.task.assigner = 'Dancan';
    this.task.deadline = new Date();
    this.task.number = '001';
    this.task.start = new Date();
    this.task.description = 'Do It Now';
    this.task.status = 'pending';
    
    this.tasks.push(this.task)
  }

  markTask(id:any, status:any){
    this.tasks[id].status = status
    return status
  }
  singleTask(id: any) {
    this.requestedtask = this.tasks[id]
    console.log(this.tasks[id])
  }
}
