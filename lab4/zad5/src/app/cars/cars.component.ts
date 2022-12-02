import { Component, ElementRef, ViewChild } from '@angular/core';
import cars from '../../assets/data/cars.json'


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  data:any = cars
  selectedCompany!:string
  selectedModel!:string
  selectedColor!:string
  colorChoose!:string[]

  showModels = false
  showColors = false
  showCar = false

  constructor(){
  }

  chosenCompany(){
    this.showModels = true
    this.showColors = false
    this.showCar = false
  }

  chosenModel(){
    this.showColors = true
    this.colorChoose = this.data[this.selectedCompany][this.selectedModel].colors
    this.showCar = false
  }

  chosenColor(color: string){
    this.selectedColor = color
    this.showCar=true
  }
}
