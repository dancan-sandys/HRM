import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { GeturlsService } from 'src/app/backend/geturls.service';
import { RecentActivitiesService } from 'src/app/recent-activities.service';
import { Task } from '../classes/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  task: Task | undefined;
  tasks: any = [];
  requestedtask: any;


  constructor(private api: GeturlsService, private activities: RecentActivitiesService) {
    this.tasklist()
  }

  response: any;

  tasklist() {
    let results = this.api.get('api/tasks/view-all/').subscribe((response) => {
      this.response = response

      this.response.forEach((tsk: any) => {
        this.task = new Task(tsk.id, tsk.assignedon, tsk.assigner, tsk.completedon, tsk.status, tsk.description)
        this.tasks.push(this.task)
      });

    })

  }

  markTask(id: any, status: any) {
    console.log(id)
    
    const activity = {
      type: 'Task Status Update',
      activity: `Task ${id} marked as ${status.status}`
    }

    this.activities.activities_list.push(activity)

    let recent_activity = this.api.post(`api/recent_activities/new_activity/`, activity).subscribe((response) => {
      console.log(response)
    })

    this.tasks.forEach((singleOne: any) => {
      if (singleOne.id == id) {
        let newStatus = this.api.put(`api/tasks/update-status/${id}/`, status).subscribe((response) => {
          console.log(response)
        })
        singleOne.status = status.status
      }
    });

    return status
  }
  singleTask(id: any) {
    this.tasks.forEach((singleOne: any) => {
      if (singleOne.id == id) {
        this.requestedtask = singleOne
        console.log(singleOne)
      }
    });
  }


  assignTask(newTask:any) {
    let results = this.api.post(`api/tasks/assign-task/`, newTask).subscribe((response) => {
      console.log(response)
    })

  };

}
