import { Component } from '@angular/core';
import { Trip } from 'src/assets/data/trips'
import {  DataService } from 'src/app/data.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  trips!: Trip[]
  tripsSub: Subscription | undefined
  view: boolean = false
  constructor(private fb: DataService){
    this.tripsSub = this.fb.getTrips().subscribe(change => {
      this.trips = []
      for (let trip of change){
        this.trips.push({
          ID: trip.ID,
          Name: trip.Name,
          Destination: trip.Destination,
          StartDate: trip.StartDate,
          EndDate: trip.EndDate,
          Price: trip.Price,
          MaxPeople: trip.MaxPeople,
          Reserved: trip.Reserved,
          Likes: trip.Likes,
          Dislikes: trip.Dislikes,
          Description: trip.Description,
          Photo: trip.Photo,
          Liked: trip.Liked,
          Disliked: trip.Disliked
        } as Trip)
      }
    })
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
