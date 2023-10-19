import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Allianz';
  // constructor(private http:HttpClient){}

  // ngOnInit(){
  //   this.fetchVehicleTypes();
  // }

  // onVehiclesTypeFetch(){
  //   this.fetchVehicleTypes();
  // }

  // private fetchVehicleTypes(){
  //   this.http.get("https://localhost:7148/api/Premium/GetPremiums")
  //   .subscribe((res)=>{
  //     console.log(res)
  //   })
  
}
