import { Component } from '@angular/core';
import Trips  from '../../assets/data/trips.json';
import { Trip } from 'src/assets/data/trips'

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})

export class TripsComponent {
  trips: Trip[] = Trips.Trips;
  formAddVisibility: boolean = false;
  allTripsInCard : number


  constructor(){
    this.allTripsInCard = 0
  }

  getMinPrice():number{
    let minPrice : number = 10**10
    for(let trip of this.trips){
      minPrice = minPrice >= trip.Price ? trip.Price : minPrice
    }
    return minPrice
  }

  getMaxPrice():number{
    let maxPrice : number = 0
    for(let trip of this.trips){
      maxPrice = maxPrice <= trip.Price ? trip.Price : maxPrice
    }
    return maxPrice
  }

  removeClick(trip: Trip){
    trip.Reserved -= 1
    this.allTripsInCard -= 1
  }

  addClick(trip: Trip){
    trip.Reserved += 1
    this.allTripsInCard += 1
  }

  removeTrip(trip: Trip){
    console.log("xd")
    for(let i = 0; i < this.trips.length; i++){
      if(this.trips[i] == trip){
        this.trips.splice(i, 1)
        return
      }
    }
  }

  visAddForm(){
    this.formAddVisibility = !this.formAddVisibility
  }

  formSubmitEventHandler(trip: Trip) {
    this.trips.push(trip)
    this.visAddForm()
  }

  ratingEventHandler(trip: Trip, event:any){
    switch(event){
      case 1:{
        trip.Likes += 1
        break
      }
      case 2: {
        trip.Dislikes += 1
        break
      }
      case 3:{
        trip.Likes += 1
        trip.Dislikes -= 1
        break
      }
      case 4:{
        trip.Likes -= 1
        trip.Dislikes += 1
        break
      }
      default:{
        break
      }
    }
  }
}
