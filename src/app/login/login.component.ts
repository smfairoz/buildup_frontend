import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  idno:string=''
  pass:string=''

constructor(private r:Router,private ds:DataService,private fb:FormBuilder ){}

logform=this.fb.group({
// idno:'',
// pswd:''



  idno:['',[Validators.required,Validators.pattern("[0-9]{4}")]],
  pswd:['',[Validators.required,Validators.pattern("[0-9a-zA-Z*&@!]{8,}")]]

})
// btnclick(){

//   let idno:any=this.logform.value.idno
//   let pass=this.logform.value.pswd
//   let result=this.ds.login(idno,pass)
//   result.subscribe((resp:any)=>{
//     if(resp){
//       localStorage.setItem("currentuser",resp.currentuser)
//       localStorage.setItem("currentidno",resp.currentidno)
//       localStorage.setItem("token",JSON.stringify(resp.token))
//       alert(resp.message)
//       this.r.navigateByUrl("hom")
      

//     }
//   },
//   (err)=>{
//     alert(err.error.message)
//   }
//   )
 
// }
// }
btnclick(){
  let idno=this.logform.value.idno

  let pass=this.logform.value.pswd

  if (this.logform.valid){
    let res=this.ds.login(idno,pass)
    res.subscribe((resp:any)=>{
      if(resp){
        alert(resp.message)
        this.r.navigateByUrl("hom")
      }
    },
    (err:any)=>{
      alert(err.error.message)
    })
  }
  else{
    alert("id_no or password does not match")
  }
}
}