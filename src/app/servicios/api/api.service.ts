import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantsI } from '../../modelos/restaurants.interface';
import { ListRestaurantsI } from '../../modelos/listRestaurants.interface';
import { RestI } from '../../modelos/rest.interface';
import { RestaurantesxIdI } from '../../modelos/restaurantesxId.interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url:string = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  getNumRestxBarrio(form:any):Observable<number>{
    let direccion = this.url + "numrest";
    return this.http.post<number>(direccion, form);
  }

  getRestaurants(form:any):Observable<RestaurantsI[]>{
    let direccion = this.url + "caso4?page=2";
    return this.http.post<RestaurantsI[]>(direccion, form);
  }

  getRestaurants2(form:any):Observable<RestI[]>{
    let direccion = this.url + "caso1";
    return this.http.post<RestI[]>(direccion, form);
  }
  
  getRestaurants3(form:any):Observable<RestaurantesxIdI>{
    let direccion = this.url + "caso2";
    return this.http.post<RestaurantesxIdI>(direccion, form);
  }

}
