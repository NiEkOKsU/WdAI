import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from 'src/assets/data/trips'
@Pipe({
  name: 'searchTrips'
})
export class SearchTripsPipe implements PipeTransform {
  transform(trips: Trip[], searchText: string): Trip[] {
    if(!trips){
      return []
    }
    if(!searchText){
      return trips
    }
    searchText = searchText.toLowerCase()
    return trips.filter(trip =>{
      return trip.Destination.toLowerCase().includes(searchText)
    })
  }

}
