import { WeatherModel } from './../models/weather.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(cityname:string): Observable<WeatherModel> {
    return this.http.get<WeatherModel>(environment.weatherApiBaseURL,{
      headers: new HttpHeaders().set(environment.XRapidAPIHostName, environment.XRapidAPIHostValue).set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue),
      params: new HttpParams().set('q',cityname).set('units','metric').set('mode','json')
    })
  }
}
