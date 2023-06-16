import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
 
})
export class HomeComponent {
  cuser:any=''
  
constructor(private r:Router){
  this.cuser=localStorage.getItem("currentuser")
}
logout(){
  this.r.navigateByUrl("")
  localStorage.removeItem("currentidno")
  localStorage.removeItem("currentuser")
  localStorage.removeItem("token")
}

}
