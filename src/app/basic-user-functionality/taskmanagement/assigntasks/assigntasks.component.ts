import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../main user functions/services/tasks.service';

@Component({
  selector: 'app-assigntasks',
  templateUrl: './assigntasks.component.html',
  styleUrls: ['./assigntasks.component.css']
})
export class AssigntasksComponent implements OnInit {

  newTask = {
    name: "",
    description: "",
    completedon: "2021-01-22T19:34:00Z",
    assigner: 2,
    assignee: 3
  }


  constructor(private task: TasksService) { }

  display = false

  displaytoggle() {
    this.display = !this.display
  }


  assignTask() {
    this.task.assignTask(this.newTask)
    console.log(this.newTask)
  }

  ngOnInit(): void {

  }

}
