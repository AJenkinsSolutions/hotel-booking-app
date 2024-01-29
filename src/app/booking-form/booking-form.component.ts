import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../booking/booking.service';
import { Booking } from '../models/booking';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit{

  bookingForm: FormGroup = new FormGroup({});
  
  constructor(

    private formBuilder: FormBuilder,
    private bookingServiceImpl: BookingService
    ){}



  ngOnInit(): void {
    
    //Form control validation 
    this.bookingForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]]

    })
    
  }

  
  onSubmit(){
    console.log("Entered onSubmit()");

    if(this.bookingForm.valid){
      
      console.log("Form is Valid")

      const currentBooking: Booking = this.bookingForm.value; 
      this.bookingServiceImpl.addbooking(currentBooking);

    }else{
      console.log("Form is invalid")
    }


  };


}
