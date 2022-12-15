import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Trip } from 'src/assets/data/trips'
import { ActivatedRoute } from '@angular/router';
import { review } from 'src/assets/data/IReview';
@Component({
  selector: 'app-singletrip',
  templateUrl: './singletrip.component.html',
  styleUrls: ['./singletrip.component.css']
})
export class SingletripComponent {
  trips!: Trip[]
  trip!:Trip[]
  id!:number
  idx:number = 0
  reviews: review[] = []
  constructor(private data: DataService, private route: ActivatedRoute){
    this.trips = this.data.getTrips()
    this.route.params.subscribe(param => this.id = param['id'])
    this.trip = this.trips.filter(trip => trip.ID == this.id)
  }

  removeClick(){
    this.trip[0].Reserved -= 1
  }

  addClick(){
    this.trip[0].Reserved += 1
  }

  nextPhoto(){
    this.idx += 1
    this.idx %= this.trip[0].Photo.length
  }

  prevPhoto(){
    if(this.idx > 0){
      this.idx -= 1
    }
    else{
      this.idx = this.trip[0].Photo.length - 1
    }
    this.idx %= this.trip[0].Photo.length
  }

  ratingEventHandler(trip: Trip, event:any){
    switch(event){
      case 1:{
        trip.Likes += 1
        trip.Liked = true;
        break
      }
      case 2: {
        trip.Dislikes += 1
        trip.Disliked = true;
        break
      }
      case 3:{
        trip.Likes += 1
        trip.Dislikes -= 1
        trip.Liked = true;
        trip.Disliked = false;
        break
      }
      case 4:{
        trip.Likes -= 1
        trip.Dislikes += 1
        trip.Disliked = true;
        trip.Liked = false;
        break
      }
      case 5:{
        trip.Likes -= 1
        trip.Liked = false;
        break
      }
      case 6:{
        trip.Dislikes -= 1
        trip.Disliked = false;
        break
      }
      default:{
        break
      }
    }
  }
  addReview(newReview: review){
    this.reviews.push(newReview);
  }
}
