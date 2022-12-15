import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private postsService: DataService) { }

  posts: any[] = []


  newPostForm = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
    name: new FormControl('')
  })


  ngOnInit(): void {
    this.postsService.getPosts().subscribe(res => this.posts=res)
  }

  sendData(){
    let dataToSend = {
      "userId": 0,
      "id": 0,
      "title": this.newPostForm.get('title')!.value,
      "body": this.newPostForm.get('text')!.value
    }
    this.postsService.sendPost(JSON.stringify(dataToSend)).subscribe(res => this.posts.splice(0, 0, dataToSend))
  }
}
