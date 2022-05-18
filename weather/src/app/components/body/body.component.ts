import { WeatherModel } from './../../models/weather.model';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  cityname:string = "Kurnool";
  weatherDataa?:WeatherModel;
  temp:number=15;
  constructor(private _weatherService:WeatherService) { }

  ngOnInit(): void {
    this.getWeatherDataNow(this.cityname);
    this.cityname='';
  }

  onSubmit(){
    this.getWeatherDataNow(this.cityname);
    this.cityname='';
  }
  private getWeatherDataNow(cityname:string){
    this._weatherService.getWeatherData(cityname).subscribe({
      next:(response) =>{
        this.weatherDataa = response;
      }
    });
  }
}
