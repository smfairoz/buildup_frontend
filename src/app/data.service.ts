
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
// import { HttpClientModule,HttpHeaders } from '@angular/common/http';



const options={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser:any=''
  currentidno=''


  constructor(private hc:HttpClient) { }

//   saveDetails(){
//     if(this.currentuser){
//       localStorage.setItem("currentuser",JSON.stringify(this.currentuser))
//     }
   
// if(this.currentidno){
//   localStorage.setItem('idno',JSON.stringify(this.currentidno))
// }
//   }
  login(idno:any,pswd:any){
    let data={
      idno,
      pswd
    }
return this.hc.post("http://localhost:3000/login",data)
    }
  

register(idno:any,uname:any,phone:any,pswd:any){

  let data={
    idno,
    uname,
    phone,
    pswd,
  }
  return this.hc.post("http://localhost:3000/register",data)
}
getOption(){
  const token = localStorage.getItem('token')
  console.log(token,+"from client-service")
  let header=new HttpHeaders()
  if(token){
console.log(token)
header=header.append("x-access-token",token)
options.headers=header
}
console.log(options)
return options
}
enquirenow(r_id:any,eaddress:any,eplan:any){
  let data={
    r_id,
    eaddress,
    eplan
  }
  return this.hc.post ("http://localhost:3000/enquirenow",data,this.getOption())
}

}