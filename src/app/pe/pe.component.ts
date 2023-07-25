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

  cuser:any=''

constructor(private r:Router,private ds:DataService,private fb:FormBuilder){
  this.cuser=localStorage.getItem("currentuser")
} 

eform=this.fb.group({
  // r_id:'',
  phone:'',
  plan:'',
  address:'',
  // r_id:'',

  // r_id:['',[Validators.required,Validators.pattern("[0-9]+")]],
  // eaddress:['',[Validators.required,]],
  // eplan:['',[Validators.required,]],
  
})
eclick(){
  console.log(this.eform.value)
  let id_no=localStorage.getItem("currentidno")
  let phone=this.eform.value.phone
  let plan=this.eform.value.plan
  let address=this.eform.value.address
  
  // console.log(eaddress,eplan)
  // if(this.eform.valid){
    let res=this.ds.enquirenow(id_no,phone,plan,address)

    if(res){

      res.subscribe((res:any)=>{
        alert(res.message)
        this.r.navigateByUrl("/en")
      },
      (err)=>{
        alert(err.error.message)
      })
    }



    }

}

