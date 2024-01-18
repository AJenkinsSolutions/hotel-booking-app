import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit{

  bookingForm: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    
    this.bookingForm = this.fb.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]]

    })
    
  }

  

  

  


  onSubmit(){
    console.log("Entered onSubmit()");

    if(this.bookingForm.valid){

      console.log("Form is Valid")
    }else{
      console.log("Form is invalid")
    }


  };


}
