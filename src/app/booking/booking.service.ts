import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }


  private bookings: Booking[] = [];
3

  //CRUD Operations
  getAllBookings(): Booking[]{
    
    
    
    return this.bookings;
  }


  getBooking(id: number): Booking | undefined{ 
    return this.bookings.find(bok => bok.id == id);
  
  }

  addbooking(booking: Booking): void{
    this.bookings.push(booking);
  }

  deleteBooking(id: number): string | void{

    let index = this.bookings.findIndex(bok => bok.id === id)
    this.bookings.splice(index, 1)
  }

}
