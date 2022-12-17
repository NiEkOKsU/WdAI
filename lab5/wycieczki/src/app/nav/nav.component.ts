import { Component } from '@angular/core';
import { Trip } from 'src/assets/data/trips'
import {  DataService } from 'src/app/data.service'
import { BoughtTripsService } from '../bought-trips.service';
import { BoughtTrips } from 'src/assets/data/IBoughTrip';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  trips!: Trip[]
  bought!: BoughtTrips[]
  view: boolean = false
  fTripsNum: number = 0
  constructor(private data: DataService, private boughts: BoughtTripsService){
    this.trips = data.getTrips()
    this.bought = boughts.boughtTrips
  }

  getSum(){
    let sum = 0
    for(let trip of this.trips){
      sum += trip.Reserved * trip.Price
    }
    return sum
  }
  getNumOfReserved(){
    let sum = 0
    for(let trip of this.trips){
      sum += trip.Reserved
    }
    return sum
  }
  switchView(){
    this.view = !this.view
    this.futureTrips()
  }
  futureTrips(){
    this.fTripsNum = 0
    this.bought.forEach(trip =>{
      if(trip.status == 'nieodbyta'){
        this.fTripsNum += 1
      }
    })
    return this.fTripsNum
  }
}
