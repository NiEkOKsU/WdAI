import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-singlephoto',
  templateUrl: './singlephoto.component.html',
  styleUrls: ['./singlephoto.component.css']
})
export class SinglephotoComponent {
  constructor(private route: ActivatedRoute, private singlePhotoService: DataService) { }
  private subscription: Subscription | undefined

  id: number = -1
  photoUrl: string = ""
  ngOnInit(): void {
     this.subscription = this.route.params.subscribe(params => {
          this.id = params['id']
        })
      this.singlePhotoService.getPhotoUrlById(this.id).subscribe(res => this.photoUrl=res.url)
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe()
  }
}
