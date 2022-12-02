import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from 'src/assets/data/trips'
@Pipe({
  name: 'searchByOpinions'
})
export class SearchByOpinionsPipe implements PipeTransform {

  transform(trips: Trip[], likes: number, dislikes: number): Trip[] {
    if(!likes && !dislikes){
      return trips
    }
    if(!likes){
      return trips.filter(trip => {
        return trip.Dislikes <= dislikes
      })
    }
    if(!dislikes){
      return trips.filter(trip => {
        return trip.Likes >= likes
      })
    }
    return trips.filter(trip => {
      return trip.Likes >= likes && trip.Dislikes <= dislikes
    })
  }

}
