import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from 'src/assets/data/trips'

@Pipe({
  name: 'searchByDate'
})
export class SearchByDatePipe implements PipeTransform {

  transform(trips: Trip[], startDate: string, endDate: string): Trip[]  {
    if(!trips){
      return []
    }
    if(!startDate && !endDate){
      return trips
    }
    let startDateSpl = startDate.split("-")
    let endDateSpl = endDate.split("-")
    if(!endDate){
      let splitted1
      return trips.filter(trip =>{
        splitted1 = trip.StartDate.split("-")
        return ((parseInt(splitted1[2]) > parseInt(startDateSpl[2])) || 
        (parseInt(splitted1[2]) == parseInt(startDateSpl[2]) && parseInt(splitted1[0]) > parseInt(startDateSpl[0])) || 
        (parseInt(splitted1[2]) == parseInt(startDateSpl[2]) && parseInt(splitted1[0]) == parseInt(startDateSpl[0]) && parseInt(splitted1[1]) >= parseInt(startDateSpl[1])))
      })
    }
    if(!startDate){
      let splitted2
      return trips.filter(trip =>{
        splitted2 = trip.EndDate.split("-")
        return ((parseInt(splitted2[2]) < parseInt(endDateSpl[2])) || 
        (parseInt(splitted2[2]) == parseInt(endDateSpl[2]) && parseInt(splitted2[0]) < parseInt(endDateSpl[0])) || 
        (parseInt(splitted2[2]) == parseInt(endDateSpl[2]) && parseInt(splitted2[0]) == parseInt(endDateSpl[0]) && parseInt(splitted2[1]) <= parseInt(endDateSpl[1])))
      })
    }
    let splitted1
    let splitted2
    return trips.filter(trip =>{
      splitted1 = trip.StartDate.split("-")
      splitted2 = trip.EndDate.split("-")
      return ((parseInt(splitted1[2]) > parseInt(startDateSpl[2])) || 
      (parseInt(splitted1[2]) == parseInt(startDateSpl[2]) && parseInt(splitted1[0]) > parseInt(startDateSpl[0])) || 
      (parseInt(splitted1[2]) == parseInt(startDateSpl[2]) && parseInt(splitted1[0]) == parseInt(startDateSpl[0]) && parseInt(splitted1[1]) >= parseInt(startDateSpl[1]))) &&
      ((parseInt(splitted2[2]) < parseInt(endDateSpl[2])) || 
      (parseInt(splitted2[2]) == parseInt(endDateSpl[2]) && parseInt(splitted2[0]) < parseInt(endDateSpl[0])) || 
      (parseInt(splitted2[2]) == parseInt(endDateSpl[2]) && parseInt(splitted2[0]) == parseInt(endDateSpl[0]) && parseInt(splitted2[1]) <= parseInt(endDateSpl[1])))
    })
  }

}
