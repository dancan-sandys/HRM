import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';


@Component({
  selector: 'app-loyer-tasks',
  templateUrl: './loyer-tasks.component.html',
  styleUrls: ['./loyer-tasks.component.css']
})
export class LoyerTasksComponent implements OnInit {

  constructor(private taskservice: TasksService) { }

  requestedTask = this.taskservice.requestedtask

  markTask(id:any, status:any){
    this.taskservice.markTask(id,status)
    console.log(status)
  }

  date:any = Date().toString()

  ngOnInit(): void {
  }

}
