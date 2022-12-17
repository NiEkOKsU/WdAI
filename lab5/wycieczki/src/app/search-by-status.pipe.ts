import { Pipe, PipeTransform } from '@angular/core';
import { BoughtTrips } from 'src/assets/data/IBoughTrip'
@Pipe({
  name: 'searchByStatus'
})
export class SearchByStatusPipe implements PipeTransform {

  transform(trips: BoughtTrips[], future:boolean, during:boolean, past:boolean) {
    let toRet
    if(!trips){
      return []
    }
    if(future && during && past){
      return trips
    }
    return trips.filter(trip =>{
      return trip.status == 'nieodbyta' && future || trip.status == 'w trakcie' && during || trip.status == 'odbyta' && past
    })
  }

}
