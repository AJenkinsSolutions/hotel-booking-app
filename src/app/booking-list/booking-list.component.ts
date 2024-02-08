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

    this.bookingService.getAllBookings().subscribe(bookings => {
      this.bookingArray = bookings

    });


  }

  deleteById(id: number){
    console.log("Entered deleteById in booking list component")

    const removed = this.bookingService.deleteBooking(id);

  }

}
