import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, RouterLinkWithHref, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { ApiService } from '../../servicios/api/api.service';
import { RestaurantsI } from '../../modelos/restaurants.interface';
import { ListRestaurantsI } from '../../modelos/listRestaurants.interface';
import { RestI } from '../../modelos/rest.interface';
import { RestaurantesxIdI } from '../../modelos/restaurantesxId.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  numRestaurant:any; 
  restaurantes!:RestaurantsI[];
  listRest!:RestI[];
  instances!:RestaurantsI;
  restId!:RestaurantesxIdI;
  
  constructor(private api: ApiService, private router: Router) { }

  peticionForm1 = new FormGroup({
    barrio: new FormControl(''),
  })

  peticionForm2 = new FormGroup({
    barrio: new FormControl(''),
    cocina: new FormControl(''),
  })

  peticionForm3 = new FormGroup({
    barrio: new FormControl(''),
  })

  peticionForm4 = new FormGroup({
    restaurant_id: new FormControl(''),
  })


  ngOnInit(): void {
  }

  numRestaurantesxBarrio(form: any) {
    console.log(form);
    this.api.getNumRestxBarrio(form).subscribe(data => {
      this.numRestaurant = data;

    })
  }

  listaRestaurantes(form: any) {
    console.log(form);
    this.api.getRestaurants(form).subscribe(data => {
      this.restaurantes = data;
      console.log(this.restaurantes);
    })
  }

  listaRest(form: any) {
    console.log(form);
    this.api.getRestaurants2(form).subscribe(data => {
      this.listRest = data;
      console.log(this.listRest);
    })
  }

  listaRestxID(form: any) {
    console.log(form);
    this.api.getRestaurants3(form).subscribe(data => {
      this.restId = data;
      console.log(data);
    })
  }
  

  Limpiar() {

    this.peticionForm1.reset();
    this.peticionForm2.reset();
    this.peticionForm3.reset();
    this.peticionForm4.reset();
    
    this.listRest = [];

    this.restId.borough = "";
    this.restId.address.building = "";
    this.restId.address.coord = "";
    this.restId.address.street = "";
    this.restId.address.zipcode = "";
    this.restId.name = "";
    this.restId.borough = "";
    this.restId.cuisine = "";  
    this.restId.restaurant_id = "";
    
    this.numRestaurant = "";

    this.restaurantes= [];


  }


}
