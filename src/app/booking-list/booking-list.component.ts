import { Component, OnInit } from '@angular/core';
import { NgModelGroup } from '@angular/forms';
import { BookingService } from '../booking/booking.service';
import { Booking } from '../models/booking';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})

export class BookingListComponent implements OnInit{
  
  bookingArray: Booking[] = []
  
  constructor(private bookingService: BookingService){
  }
  
  
  ngOnInit(): void {

    const savedBookings = this.bookingService.getAllBookings();

   if(savedBookings!= null){

    this.bookingArray = savedBookings;

   }else{
    console.log("No bookings saved")
   }


  }

}
