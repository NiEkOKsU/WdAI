import { Component } from '@angular/core';
import { Trip } from 'src/assets/data/trips'
import {  DataService } from 'src/app/data.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-tripadd',
  templateUrl: './tripadd.component.html',
  styleUrls: ['./tripadd.component.css']
})

export class TripaddComponent {
  trips!: any[]
  tripsSub: Subscription | undefined

  trip!:Trip
  
  constructor(private data: DataService) { 
    this.trips = data.getTrips()
    this.trip =  {
      ID: this.data.addID(),
      Name: '',
      Destination: '',
      StartDate: '',
      EndDate: '',
      Price: 0,
      MaxPeople: 0,
      Reserved: 0,
      Likes: 0,
      Dislikes: 0,
      Description: '',
      Photo: [],
      Liked: false,
      Disliked: false,
    }
  }

  validatorEndDate(){
    let dateOfStart : string[] = this.trip.StartDate.split("-")
    let dateOfEnd : string[] = this.trip.EndDate.split("-")
    if(parseInt(dateOfEnd[0]) < parseInt(dateOfStart[0])){
      return false
    }
    if(parseInt(dateOfEnd[0]) == parseInt(dateOfStart[0]) && parseInt(dateOfEnd[1]) < parseInt(dateOfStart[1])){
      return false
    }
    if(parseInt(dateOfEnd[0]) == parseInt(dateOfStart[0]) && parseInt(dateOfEnd[1]) == parseInt(dateOfStart[1]) && parseInt(dateOfEnd[2]) < parseInt(dateOfStart[2])){
      return false
    }
    return true
  }

  validatorTodaysDate(){
    let dateOfStart : string[] = this.trip.StartDate.split("-")
    const todaysDate = new Date()
    if(parseInt(dateOfStart[0]) < todaysDate.getFullYear()){
      return false
    }
    if(parseInt(dateOfStart[0]) == todaysDate.getFullYear() && parseInt(dateOfStart[1]) < todaysDate.getMonth() + 1){
      return false
    }
    if(parseInt(dateOfStart[0]) == todaysDate.getFullYear() && parseInt(dateOfStart[1]) == todaysDate.getMonth() + 1 && parseInt(dateOfStart[2]) < todaysDate.getDate()){
      return false
    }
    return true
  }

  validator(){
    return this.validatorTodaysDate() && this.validatorEndDate()
  }
  
  addTrip(){
    if(!this.validator()){
      return
    }
    let photoSrc: string = ''
    for(let i = 0; i < this.trip.Photo.length; i++){
      photoSrc += this.trip.Photo[i]
    }
    this.trip.Photo = [photoSrc, photoSrc]
    console.log(this.trip.Photo)
    this.data.addTrip(this.trip)
    this.trip = {  
    ID: this.data.addID(),  
    Name: '',
    Destination: '',
    StartDate: '',
    EndDate: '',
    Price: 0,
    MaxPeople: 0,
    Reserved: 0,
    Likes: 0,
    Dislikes: 0,
    Description: '',
    Photo: [],
    Liked: false,
    Disliked: false,}
  }
}
