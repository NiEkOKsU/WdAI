import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { review } from 'src/assets/data/IReview';

@Component({
  selector: 'app-tripopinionform',
  templateUrl: './tripopinionform.component.html',
  styleUrls: ['./tripopinionform.component.css']
})
export class TripopinionformComponent {
  constructor() {}


  @Output() newReviewEvent = new EventEmitter<review>();


  reviews: review[] = [];
  errorArray: any[] = [];

  addReview = new FormGroup({
    nickname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    tripName: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    date: new FormControl(''),
    review: new FormControl('', [
      Validators.required,
      Validators.minLength(50),
      Validators.maxLength(300),
    ]),
  });

  submitForm() {
    if(!this.addReview.get('nickname')?.valid){
      this.errorArray.push("Błędny nickname")
      return
    }
    if(!this.addReview.get('tripName')?.valid){
      this.errorArray.push("Błędna nazwa wycieczki")
      return
    }
    if(!this.addReview.get('review')?.valid){
      this.errorArray.push("Opinia nie miści się w przedziale długości")
      return
    }
    this.errorArray = []
    let newReview = ({
      nick: this.addReview.get('nickname')!.value,
      tripName: this.addReview.get('tripName')!.value,
      date: this.addReview.get('date')!.value,
      review: this.addReview.get('review')!.value,
    } as review);
    this.newReviewEvent.emit(newReview)
    this.addReview.reset();
  }
}