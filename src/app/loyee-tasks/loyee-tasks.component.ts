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
  

  date:any = Date().toString() 

  ngOnInit(): void {
  }

}
