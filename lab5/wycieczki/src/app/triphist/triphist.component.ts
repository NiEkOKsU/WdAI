import { Component } from '@angular/core';
import { BoughtTripsService } from '../bought-trips.service';
import { BoughtTrips } from 'src/assets/data/IBoughTrip';
@Component({
  selector: 'app-triphist',
  templateUrl: './triphist.component.html',
  styleUrls: ['./triphist.component.css']
})
export class TriphistComponent {
  boughtTrips!: BoughtTrips[]
  filterVis = false
  showFuture = true
  showDuring = true
  showPast = true
  constructor(private bought: BoughtTripsService){
    this.boughtTrips = bought.boughtTrips
  }
  addVisFilter(){
    this.filterVis = !this.filterVis
  }
  
}
