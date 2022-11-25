import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lastname',
  templateUrl: './lastname.component.html',
  styleUrls: ['./lastname.component.css']
})
export class LastnameComponent {
  @Input() nazwisko = 'xd'
}
