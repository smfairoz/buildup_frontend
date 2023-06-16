import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pe',
  templateUrl: './pe.component.html',
  styleUrls: ['./pe.component.css']
})
export class PeComponent {

constructor(private r:Router,private ds:DataService,private fb:FormBuilder){} 

eform=this.fb.group({
  eaddress:'',
  eplan:'',
  r_id:'',

  // r_id:['',[Validators.required,Validators.pattern("[0-9]+")]],
  // eaddress:['',[Validators.required,]],
  // eplan:['',[Validators.required,]],
  
})
eclick(){
  console.log(this.eform.value)
  let r_id=this.eform.value.r_id
  let eaddress=this.eform.value.eaddress
  let eplan=this.eform.value.eplan
  
  // console.log(eaddress,eplan)
  // if(this.eform.valid){
    let res=this.ds.enquirenow(r_id,eaddress,eplan)
    res.subscribe((res:any)=>{
      alert(res.message)
      this.r.navigateByUrl("/en")
    },
    (err)=>{
      alert(err.error.message)
    })
  }
}

