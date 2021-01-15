import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/backend/authentication/users/classes/user';
import { AuthService } from 'src/app/backend/authentication/users/services/auth.service';
import { RecentActivitiesService } from 'src/app/recent-activities.service';
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
  user:any;

  getSingleTask(id: any) {
    this.requestedTask = this.tasksservice.singleTask(id)
    console.log(id)
  }

  constructor(private tasksservice: TasksService, private auth :AuthService, private activities: RecentActivitiesService) {

  }
  
  recent_activities = this.activities.activities_list
  
  ngOnInit(): void {

    this.tasks = this.tasksservice.tasks
    this.user = this.auth.user;
  }

}
