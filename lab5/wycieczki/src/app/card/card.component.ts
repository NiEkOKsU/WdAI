import { Component } from '@angular/core';
import { Trip } from 'src/assets/data/trips'
import {  DataService } from 'src/app/data.service'
import { BoughtTripsService } from '../bought-trips.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  trips!: Trip[]
  tripsSub: Subscription | undefined
  constructor(private data: DataService, private bought: BoughtTripsService){
    this.trips = data.getTrips()
  }

  getSum(){
    let sum = 0
    for(let trip of this.trips){
      sum += trip.Reserved * trip.Price
    }
    return sum
  }

  buyTrip(trip: Trip){
    this.bought.buyTrip(trip)
  }
}
