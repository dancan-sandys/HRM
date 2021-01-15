import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';


@Component({
  selector: 'app-loyer-tasks',
  templateUrl: './loyer-tasks.component.html',
  styleUrls: ['./loyer-tasks.component.css']
})
export class LoyerTasksComponent implements OnInit {

  constructor(private taskservice: TasksService) { }

  //object to hold the new task status to be sent to the backend api
  status = {
    status : ""
  }
  requestedTask = this.taskservice.requestedtask


  display = false

  displaytoggle() {
    this.display = !this.display
  }
  
  markTask(id:any, status:any){
    this.status.status = status
    console.log(this.status)
    this.taskservice.markTask(id, this.status)
  }

  date:any = Date().toString()

  ngOnInit(): void {
  }

}
