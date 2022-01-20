import { Component, OnInit } from '@angular/core';
import { activityList } from 'src/app/models/activity.interface';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  activityList: activityList[] = [];

  constructor(public activity:ActivityService) {
  }

  completeActivities(ordenServicio:any){
    let completas : number = 0
    for(let val of ordenServicio){
      if(val.activityStatus == 'finalized'){
        completas = completas +1
      }
    }
  return completas}

  ngOnInit(): void {
    this.activity.getActivity().subscribe(data => {
      this.activityList = data;
      console.log('Activity List', this.activityList)
    })

  }



}
