import { Component, ElementRef, QueryList, ViewChildren  } from '@angular/core';
import { Trip } from 'src/assets/data/trips'
import {  DataService } from 'src/app/data.service'
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
//import { FilterPipe } from './pipes/filter.pipe';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})

export class TripsComponent {
  trips!: Trip[]
  filterVis: boolean = false
  allTripsInCard : number
  dest: string = ""
  minPrice!: number
  maxPrice!: number
  likes!: number
  dislikes!: number
  startDate:string = ""
  endDate:string = ""
  constructor(private data: DataService){
    this.allTripsInCard = 0
    this.trips = data.getTrips()
    this.minPrice = this.getMinPrice()
    this.maxPrice = this.getMaxPrice()
    this.likes = this.findMinLikes()
    this.dislikes = this.findMaxDislikes()
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

}
