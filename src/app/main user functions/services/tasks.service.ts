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
    this.task = new Task('001', new Date(), 'Dancan',new Date(),'Do It Now','pending');
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
