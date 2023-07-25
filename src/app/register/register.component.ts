import { Component } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private r:Router,private ds:DataService,private fb:FormBuilder){}
regform=this.fb.group({

  // idno:['',[Validators.required,Validators.pattern("[@]+")]],
  // idno:['',[Validators.required,Validators.pattern("[0-9a-zA-Z@]{}")]],

  idno:['',[Validators.required,Validators.pattern("")]],
  username:['',[Validators.required,Validators.pattern("[a-zA-Z 0-9]+")]],
  phone:['',[Validators.required,Validators.pattern("")]],
  password:['',[Validators.required,Validators.pattern("")]],
})


clicked(){
  let idd=this.regform.value.idno
  let us=this.regform.value.username
  let ph=this.regform.value.phone
  let pswd=this.regform.value.password

  if (this.regform.valid){
    let res=this.ds.register(idd,us,ph,pswd)
    res.subscribe((resp:any)=>{
      if(resp){
        alert(resp.message)
        this.r.navigateByUrl("")
      }
    },
    (err:any)=>{
      alert(err.error.message)
    })
  }
  else{
    alert("invalid data")
  }
}
}