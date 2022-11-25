import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Trip } from 'src/assets/data/trips'

@Component({
  selector: 'app-tripadd',
  templateUrl: './tripadd.component.html',
  styleUrls: ['./tripadd.component.css']
})

export class TripaddComponent {

  @Output() formSubmitEvent = new EventEmitter<Trip>();

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

  addTrip(){
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
