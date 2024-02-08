import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../booking/booking.service';
import { Booking } from '../models/booking';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit{

  bookingForm: FormGroup = new FormGroup({});
  
  constructor(

    private formBuilder: FormBuilder,
    private bookingServiceImpl: BookingService,
    private router: Router,
    private activeRoute: ActivatedRoute
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
    
    this.prefillForm(this.activeRoute, this.bookingServiceImpl, this.bookingForm);
    

    

    
  }

  prefillForm(activeRoute: ActivatedRoute, bookingServiceImpl: BookingService, bookingForm: FormGroup){

    //Pre filling form
  //Check if id is in the url params
  const id = activeRoute.snapshot.paramMap.get('id');

  if(id != undefined){
  
    let booking: any = null;

    //let booking = bookingServiceImpl.getBookingById(Number(id));
    bookingServiceImpl.getBookingById(Number(id))?.subscribe(returnData => {

      booking = returnData;
      console.log(booking);
      bookingForm.patchValue(booking);

    })


    
    
  }

  }

  
  onSubmit(){
    console.log("Entered onSubmit()");

    if(this.bookingForm.valid){
      console.log("INFO: Form is Valid")

      const currentBooking: Booking = this.bookingForm.value;
      console.log(currentBooking) ;

      //If id is present then we are updating not creating
      const id = this.activeRoute.snapshot.paramMap.get('id');

      if(id){
        //UPDATE
        console.log('INFO: id is present')
        currentBooking.id = parseInt(id); 
        this.bookingServiceImpl.updateBooking(parseInt(id), currentBooking).subscribe(bok => {
          console.log('updated')
        });
      }else{
        // New Booking
        console.log('INFO: id is not present...c reating new booking')
        this.bookingServiceImpl.addbooking(currentBooking).subscribe(booking => {
          console.log('add complete')
        });
      }

      //When user clicks submit we want to navigate them to the Booking list url and it will display the list
      this.router.navigate(['list'])


    }else{
      console.log("INFO: Form is invalid")
    }
  };


}
