import { Component, Input, Output } from '@angular/core';
import { Trip } from 'src/assets/data/trips'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() trips: any = 0

  getSum(){
    let sum = 0
    for(let trip of this.trips){
      sum += trip.Reserved * trip.Price
    }
    return sum
  }
}
