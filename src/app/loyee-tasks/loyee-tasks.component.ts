import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loyee-tasks',
  templateUrl: './loyee-tasks.component.html',
  styleUrls: ['./loyee-tasks.component.css']
})
export class LoyeeTasksComponent implements OnInit {

  constructor() { }

  date:any = Date().toString() 

  ngOnInit(): void {
  }

}
