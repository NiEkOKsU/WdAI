import { Component, EventEmitter, Output } from '@angular/core';
import { Trip } from 'src/assets/data/trips'

@Component({
  selector: 'app-tripadd',
  templateUrl: './tripadd.component.html',
  styleUrls: ['./tripadd.component.css']
})

export class TripaddComponent {

  @Output() formSubmitEvent = new EventEmitter<Trip>();
  @Output() reset = new EventEmitter<number>();
  trip:Trip = {
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
    Photo: ''
  }
  
  constructor() { }

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

  resetTrip(){
    if(this.validator()){
      this.reset.emit(this.trip.Price)
    }
  }
  
  addTrip(){
    if(!this.validator()){
      return
    }
    this.formSubmitEvent.emit(this.trip)
    this.trip = {    
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
    Photo: ''}
  }
}
