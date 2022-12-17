import { Injectable } from '@angular/core';
import { BoughtTrips } from 'src/assets/data/IBoughTrip'
import { Trip } from 'src/assets/data/trips';
@Injectable({
  providedIn: 'root'
})
export class BoughtTripsService {
  boughtTrips!: BoughtTrips[]


  constructor() {
    this.boughtTrips = []
  }


  buyTrip(trip: Trip){
    let boughtTrip:BoughtTrips = {
      boughtData: new Date().toLocaleDateString('pl-PL'),
      price: trip.Price,
      startDate: trip.StartDate,
      endDate: trip.EndDate,
      tickets: trip.Reserved,
      status: ''
    }
    this.setStatus(boughtTrip)
    this.boughtTrips.push(boughtTrip)
    trip.MaxPeople -= trip.Reserved
    trip.Reserved = 0
  }


  setStatus(boughtTrip:BoughtTrips){
    let currentDate = new Date
    let startDateSpl = boughtTrip.startDate.split("-")
    let endDateSpl = boughtTrip.endDate.split("-")
    if(currentDate.getFullYear() < parseInt(startDateSpl[0]) || 
    (currentDate.getFullYear() == parseInt(startDateSpl[0]) && currentDate.getMonth()+1 < parseInt(startDateSpl[1])) || 
    (currentDate.getFullYear() == parseInt(startDateSpl[0]) && currentDate.getMonth()+1 == parseInt(startDateSpl[1]) && currentDate.getDate() < parseInt(startDateSpl[2]))){
      boughtTrip.status = 'nieodbyta'
    }
    else if(currentDate.getFullYear() < parseInt(endDateSpl[0]) || 
    (currentDate.getFullYear() == parseInt(endDateSpl[0]) && currentDate.getMonth()+1 < parseInt(endDateSpl[1])) || 
    (currentDate.getFullYear() == parseInt(endDateSpl[0]) && currentDate.getMonth()+1 == parseInt(endDateSpl[1]) && currentDate.getDate() < parseInt(endDateSpl[2]))){
      boughtTrip.status = 'w trakcie'
    }
    else{
      boughtTrip.status =  'odbyta'
    }
    
  }
}

