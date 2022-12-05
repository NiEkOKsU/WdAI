import { Component, OnChanges } from '@angular/core';
import Trips  from '../../assets/data/trips.json';
import { Trip } from 'src/assets/data/trips'
//import { FilterPipe } from './pipes/filter.pipe';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})

export class TripsComponent {
  trips: Trip[] = Trips.Trips;
  formAddVisibility: boolean = false;
  filterVis: boolean = false
  cardVis: boolean = false
  allTripsInCard : number
  dest: string = ""
  minPrice: number = this.getMinPrice()
  maxPrice: number = this.getMaxPrice()
  likes: number = this.findMinLikes()
  dislikes: number = this.findMaxDislikes()
  startDate:string = ""
  endDate:string = ""
  constructor(){
    this.allTripsInCard = 0
  }

  getTrips(){
    return this.trips
  }

  getMinPrice():number{
    let minPrice : number = 10**10
    for(let trip of this.trips){
      if(trip.MaxPeople != trip.Reserved){
        minPrice = minPrice >= trip.Price ? trip.Price : minPrice
      }
    }
    return minPrice
  }

  getMaxPrice():number{
    let maxPrice : number = 0
    for(let trip of this.trips){
      if(trip.MaxPeople != trip.Reserved){
        maxPrice = maxPrice <= trip.Price ? trip.Price : maxPrice
      }
    }
    return maxPrice
  }

  addVisFilter(){
    this.filterVis = !this.filterVis
  }
  showCard(){
    this.cardVis = !this.cardVis
  }
  removeClick(trip: Trip){
    trip.Reserved -= 1
    this.allTripsInCard -= 1
    this.dislikes = this.findMaxDislikes()
  }

  addClick(trip: Trip){
    trip.Reserved += 1
    this.allTripsInCard += 1
    this.likes = this.findMinLikes()
  }

  reset(trip: Trip){
    this.minPrice = trip.Price
    this.maxPrice = trip.Price
    this.likes = trip.Likes
    this.dislikes = trip.Dislikes
  }

  removeTrip(trip: Trip){
    for(let i = 0; i < this.trips.length; i++){
      if(this.trips[i] == trip){
        this.allTripsInCard -= this.trips[i].Reserved
        this.trips.splice(i, 1)
        this.dest = ""
        this.minPrice = this.getMinPrice()
        this.maxPrice = this.getMaxPrice()
        this.likes = this.findMinLikes()
        this.dislikes = this.findMaxDislikes()
        this.startDate = ""
        this.endDate = ""
        return
      }
    }
  }

  visAddForm(){
    this.formAddVisibility = !this.formAddVisibility
  }

  findMinLikes(){
    let minLikes: number = 10**10
    for(let trip of this.trips){
      minLikes = minLikes >= trip.Likes ? trip.Likes : minLikes
    }
    return minLikes
  }

  findMaxDislikes(){
    let maxDislikes: number = 0
    for(let trip of this.trips){
      maxDislikes = maxDislikes <= trip.Dislikes ? trip.Dislikes : maxDislikes
    }
    return maxDislikes
  }

  formResetEvent(newP: number){
    this.maxPrice = newP
  }

  formSubmitEventHandler(trip: Trip) {
    this.trips.push(trip)
    this.visAddForm()
    this.dest = ""
    this.startDate = ""
    this.endDate = ""
    this.minPrice = this.getMinPrice()
    this.maxPrice = this.getMaxPrice()
    this.likes = this.findMinLikes()
    this.dislikes = this.findMaxDislikes()
  }

  ratingEventHandler(trip: Trip, event:any){
    switch(event){
      case 1:{
        trip.Likes += 1
        this.likes = this.findMinLikes()
        break
      }
      case 2: {
        trip.Dislikes += 1
        this.dislikes = this.findMaxDislikes()
        break
      }
      case 3:{
        trip.Likes += 1
        trip.Dislikes -= 1
        this.likes = this.findMinLikes()
        this.dislikes = this.findMaxDislikes()
        break
      }
      case 4:{
        trip.Likes -= 1
        trip.Dislikes += 1
        this.likes = this.findMinLikes()
        this.dislikes = this.findMaxDislikes()
        break
      }
      case 5:{
        trip.Likes -= 1
        this.likes = this.findMinLikes()
        break
      }
      case 6:{
        trip.Dislikes -= 1
        this.dislikes = this.findMaxDislikes()
        break
      }
      default:{
        break
      }
    }
  }

}
