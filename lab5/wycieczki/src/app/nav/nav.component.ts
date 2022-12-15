import { Component } from '@angular/core';
import { Trip } from 'src/assets/data/trips'
import {  DataService } from 'src/app/data.service'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  trips!: Trip[]
  view: boolean = false
  constructor(private data: DataService){
    this.trips = this.data.getTrips()
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
  }
}
