import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-triprate',
  templateUrl: './triprate.component.html',
  styleUrls: ['./triprate.component.css']
})
export class TriprateComponent {
  constructor(){}

  @Input() tripLikes = 0
  @Input() tripDislikes = 0

  @Output() ratingChanged = new EventEmitter<Number>()

  voteStatus:number = 0

  addVote(status:number){
    if(status == 1){
      if(this.voteStatus == 0){
        this.ratingChanged.emit(1)
        this.voteStatus = 1
      }
      else if(this.voteStatus == 1){
        this.ratingChanged.emit(5)
        this.voteStatus = 0
      }
      else{
        this.ratingChanged.emit(3)
        this.voteStatus = 1
      }
      
    }
    else{
      if(this.voteStatus == 0){
        this.ratingChanged.emit(2)
        this.voteStatus = 2
      }
      else if(this.voteStatus == 2){
        this.ratingChanged.emit(6)
        this.voteStatus = 0
      }
      else{
        this.ratingChanged.emit(4)
        this.voteStatus = 2
      }
    }
  }
}
