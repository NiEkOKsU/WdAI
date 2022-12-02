import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITopic } from '../itopic';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.css']
})
export class PiecesComponent {
  @Input() topics : any = 0
  @Output() emiter = new EventEmitter<number>()

  readMore(i:number){
    this.emiter.emit(i)
  }
}
