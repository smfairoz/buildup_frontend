import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
enquire:any

constructor(private ds:DataService){
  ds.getenquire().subscribe((res:any)=>{
    // console.log(res.data[0] +"from cart-client")
    console.log(res)
    this.enquire=res.data
  })
}


}
