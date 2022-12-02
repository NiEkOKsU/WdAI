import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from 'src/assets/data/trips'
@Pipe({
  name: 'searchByPrice'
})
export class SearchByPricePipe implements PipeTransform {

  transform(trips: Trip[], min: number, max: number): Trip[] {
    if(!min && !max){
      return trips
    }
    if(!min){
      return trips.filter(trip => {
        return trip.Price <= max
      })
    }
    if(!max){
      return trips.filter(trip => {
        return trip.Price >= min
      })
    }
    return trips.filter(trip => {
      return trip.Price >= min && trip.Price <= max
    })
  }

}
