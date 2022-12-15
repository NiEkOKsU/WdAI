import { Injectable } from '@angular/core';
import Trips  from '../assets/data/trips.json';
import { Trip } from 'src/assets/data/trips'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  trips!: Trip[]
  nextID!: number
  constructor() {
    this.trips = Trips.Trips;
    this.nextID = this.addID()
  }
  getTrips(){
    return this.trips
  }
  addTrip(trip: Trip){
    this.trips.push(trip)
  }
  addID(){
    let id = this.trips[this.trips.length-1].ID + 1
    return id
  }
}
