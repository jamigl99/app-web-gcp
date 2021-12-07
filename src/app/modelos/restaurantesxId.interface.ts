import { DireccionI } from "./direccion.interface";

export interface RestaurantesxIdI{
    address:DireccionI;
    name:string;
    borough:string;
    cuisine:string;    
    restaurant_id:string;
}
