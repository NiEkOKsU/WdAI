import { Injectable } from '@angular/core';
import { Trip } from 'src/assets/data/trips'
import Trips  from '../assets/data/trips.json';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  trips!: any[]; 
  private nextId!: number
  constructor() {
    this.trips = Trips.Trips
  }
  getTrips(){
    return this.trips
  }
  addTrip(trip: Trip){
    this.trips.push(trip)
  }
  addID(){
    this.nextId = this.trips[this.trips.length - 1].ID
    return this.nextId
  }
}
