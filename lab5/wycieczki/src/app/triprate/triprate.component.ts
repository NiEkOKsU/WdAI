import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Trip } from 'src/assets/data/trips';

@Component({
  selector: 'app-triprate',
  templateUrl: './triprate.component.html',
  styleUrls: ['./triprate.component.css']
})
export class TriprateComponent {
  constructor(){}

  @Input() trip!: Trip
  @Output() ratingChanged = new EventEmitter<Number>()


  addVote(status:number){
    if(status == 1){
      if(this.trip.Liked == false && this.trip.Disliked == true){
        this.ratingChanged.emit(3)
      }
      else if(this.trip.Liked == false){
        this.ratingChanged.emit(1)
      }
      else{
        this.ratingChanged.emit(5)
      }
    }
    else{
      if(this.trip.Liked == true && this.trip.Disliked == false){
        this.ratingChanged.emit(4)
      }
      else if(this.trip.Disliked == false){
        this.ratingChanged.emit(2)
      }
      else{
        this.ratingChanged.emit(6)
      }
    }
  }
}
