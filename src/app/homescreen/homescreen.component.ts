import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeadercomponentComponent } from '../headercomponent/headercomponent.component';
import { FormControl, FormGroup, ReactiveFormsModule,FormsModule,NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaystackOptions } from 'angular4-paystack';

interface Response{
  message:string;
  success:boolean;
  data: DataItem[];
}
interface ResponseTwo{
  message:string;
  success:boolean;
  data: CarItem[];
}
interface DataItem {
  id: number;
  bodyType: string;
  premiumPrice:number;
  updatedAt:string;
  createdAt:string;
  // Add more properties as per your actual data structure
}

interface CarItem {
  id: number;
  carMake: string;
  model:string;
  updatedAt:string;
  createdAt:string;
  // Add more properties as per your actual data structure
}


@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css'],
})
export class HomescreenComponent implements OnInit{
  @ViewChild('myForm') form: NgForm;
  constructor(private http:HttpClient){}
  title = "AngularForms";
  reference = ""
  
  amount:number = 0
  vehicleType:string|undefined = ""
  vehicleMake:string|undefined = ""
  vehicleModel:string|undefined = ""
  dataList: DataItem[] = [];
  cars: CarItem[] = [];
  payload:any = {}

  options: PaystackOptions = {
    amount: 50,
    email: 'user@gmail.com',
    ref: `${Math.ceil(Math.random() * 10e10)}`
  }
  
 


  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    console.log(this.title, ref);
    this.http.post('https://localhost:7148/api/PurchasePremium/AddOrder', this.payload)
    .subscribe(
      (response) => {
        console.log('POST request successful:', response);
        alert('POST request successful:')
        // Handle the response as needed
      },
      (error) => {
        console.error('POST request error:', error);
        alert('POST request error:')
        // Handle the error as needed
      }
    );
  }

  paymentCancel() {
    console.log('payment failed');
  }

  ngOnInit(){
    this.fetchVehicleTypes();
    this.fetchCarTypes();
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
  }

  onOptionSelected(event:any) {
    // Perform actions when an option is selected
    console.log('Selected option:', event.target.value);
    console.log(this.dataList)
    const item = this.dataList.find(v => v.id.toString() === event.target.value)
    if(item !== undefined){
      this.amount = item?.premiumPrice
    }
    
    
    
    this.vehicleType = item?.bodyType
    console.log(item)
    // ... other logic or function calls
  }
  
  onOptionSelectedMake(event:any) {
    // Perform actions when an option is selected
    console.log('Selected option:', event.target.value);
    const item = this.cars.find(v => v.id.toString() === event.target.value)
    this.vehicleMake = item?.carMake
    
    // ... other logic or function calls
  }

  onOptionSelectedModel(event:any) {
    // Perform actions when an option is selected
    console.log('Selected option:', event.target.value);
    const item = this.cars.find(v => v.id.toString() === event.target.value)
    this.vehicleModel = item?.model
    
    // ... other logic or function calls
  }

  private fetchVehicleTypes(){
    this.http.get<Response>("https://localhost:7148/api/Premium/GetPremiums")
    .subscribe((res)=>{
      console.log(res)
      this.dataList = res.data
      this.amount = this.dataList[0].premiumPrice
      console.log("data", this.dataList)
    })
  }

  private fetchCarTypes(){
    this.http.get<ResponseTwo>("https://localhost:7148/api/Car/GetCars")
    .subscribe((res)=>{
      console.log("response",res)
      this.cars = res.data
    })
  }

  onSubmit(form: NgForm){
    const payload = {
      firstName:this.form.value.firstName,
      lastName: this.form.value.lastName,
      dob: this.form.value.date,
      email: this.form.value.Email,
      phoneNumber: this.form.value.phoneNumber,
      vehicleMake: this.vehicleMake,
      vehicleModel: this.vehicleModel,
      bodyType: this.vehicleType,
      registerationNumber: this.form.value.regNumber,
      amountPaid: this.amount,
      isSuccessful: true
    }
    this.payload = payload
    console.log(this.payload)
    
  }
}
