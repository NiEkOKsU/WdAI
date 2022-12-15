import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  photos!:any[]
  constructor(private photoService: DataService){
    this.photoService.getPhotos().subscribe(res => this.photos=res)
  }
}
