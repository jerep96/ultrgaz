import { Component, OnInit } from '@angular/core';
import { activityList } from 'src/app/models/activity.interface';
import { ActivityService } from 'src/app/services/activity.service';
import { OrdenServicio } from 'src/app/models/servicio.interface'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public activityList!: activityList;

  constructor(public _activity:ActivityService) {
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
    this._activity.getActivity().subscribe(
      data => {
      this.activityList = data;
      let bloques = this.activityList['ul_os_json'].replace(/'/g, '"')
      bloques = JSON.parse(bloques)
      //let ordenServicio = bloques.ordenServicio
      console.log('bloques', bloques[0])
      console.log('ACtivity list', this.activityList)

    })

  }



}
