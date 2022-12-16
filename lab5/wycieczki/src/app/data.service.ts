import { Injectable } from '@angular/core';
import { Trip } from 'src/assets/data/trips'
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { initializeApp } from "firebase/app"
import {collection, getDoc, getDocs, getFirestore} from 'firebase/firestore'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  trips!: Observable<any[]>; 
  private nextId!: number
  constructor(private db: AngularFireDatabase) {
    this.trips = this.db.list('trips').valueChanges();
    this.db.list('trips', ref=> ref.orderByChild('id')).valueChanges().subscribe((res: any[]) => {this.nextId = res[0]?.id+1})
  }
  getTrips(): Observable<any[]>{
    return this.trips
  }
  addTrip(trip: Trip){
    this.db.list('trips').push({
      id: trip.ID,
      Name: trip.Name,
      Destination: trip.Destination,
      StartDate: trip.StartDate,
      EndDate: trip.EndDate,
      Price: trip.Price,
      MaxPeople: trip.MaxPeople,
      Reserved: trip.Reserved,
      Likes: trip.Likes,
      Dislikes: trip.Dislikes,
      Description: trip.Description,
      Photo: trip.Photo,
      Liked: trip.Liked,
      Disliked: trip.Disliked
    })
  }
  addID(){
    return this.nextId
  }
}
