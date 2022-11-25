import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-firstname',
  templateUrl: './firstname.component.html',
  styleUrls: ['./firstname.component.css']
})
export class FirstnameComponent {
  @Input() imie = 'Ok';
}
