import { Injectable } from '@angular/core';
import { GeturlsService } from 'src/app/backend/geturls.service';
import { Task } from '../classes/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  task: Task | undefined;
  tasks:any = [];
  requestedtask: any;

  
  constructor(private api:GeturlsService) { 
   this.tasklist()
  }

  response:any;

  tasklist(){
    let results = this.api.get('api/tasks/view-all/').subscribe((response) => {
      this.response = response

      this.response.forEach((tsk: any) => {
        this.task = new Task(tsk.id, tsk.assignedon, tsk.assigner, tsk.completedon, tsk.status, tsk.description)
        this.tasks.push(this.task)
      });

    })

  }

  markTask(id:any, status:any){
    this.tasks[id].status = status
    console.log(this.tasks[id].status )
     
     return status
  }
  singleTask(id: any) {
    this.requestedtask = this.tasks[id]
    console.log(this.tasks[id])
  }
}
