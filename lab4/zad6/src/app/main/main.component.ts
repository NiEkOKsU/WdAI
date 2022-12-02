import { Component } from '@angular/core';
import topics from "../../assets/data/topics.json"
import { ITopic } from '../itopic';
import { ITopics } from '../itopics';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  myTopics : ITopic[]= topics.topics
  name: string = ""
  longDesc : string = ""

  readSignal(event: number){
    this.name = this.myTopics[event].name
    this.longDesc = this.myTopics[event].long
  }
}
