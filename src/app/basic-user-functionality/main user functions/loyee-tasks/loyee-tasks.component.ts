import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-loyee-tasks',
  templateUrl: './loyee-tasks.component.html',
  styleUrls: ['./loyee-tasks.component.css']
})
export class LoyeeTasksComponent implements OnInit {

  constructor(private task:TasksService) { }

  requestedTask:any = this.task.requestedtask;

  // updating the leave status or task status
  status = {
    status: ""
  }


  
  display = false

  displaytoggle(){
    this.display = !this.display
  }
  actOnTask(id:any,status:any){
    this.status.status = status
    this.task.markTask(id,this.status)
   
  }

  date:any = Date().toString() 

  ngOnInit(): void {
  }

}
