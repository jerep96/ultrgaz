import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { activityList } from '../models/activity.interface'

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  
  info : any = {}

  constructor(private http:HttpClient) { 
    console.log('Service running!')
   }

   getActivity():Observable<activityList[]>{
     let endpoint = '../../assets/activity_2.json'

    return this.http.get<activityList[]>(endpoint);
  }    
}
