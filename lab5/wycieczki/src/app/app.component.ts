import { Component } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wycieczki';
  @Output() trips: any;
}
