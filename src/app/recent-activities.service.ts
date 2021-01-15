import { Injectable } from '@angular/core';
import { GeturlsService } from './backend/geturls.service';

@Injectable({
  providedIn: 'root'
})
export class RecentActivitiesService {

  constructor(private api : GeturlsService) { 
    this.add_activities()
  }
  
  activities_list: any = []

  add_activities(){
    let activities = this.api.get(`api/recent_activities/all_activities`).subscribe((response) => {
      console.log(response),
      this.activities_list = response
      console.log(this.activities_list)
    })
  }


}
