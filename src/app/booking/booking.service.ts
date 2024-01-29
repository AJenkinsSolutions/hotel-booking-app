import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
/**
 * This service will handle all the buisness logic for 'booking' including all CRUD operations
 * functions the same way a service functions in Java
 */
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  //Array of booking objects 
  private bookingsArray: Booking[] = [];


  //CRUD Operations

  /**
   * 
   * @returns Array of Bookings
   */
  getAllBookings(): Booking[]{
    return this.bookingsArray;
  }

  /**
   * 
   * @param id 
   * @returns Single Booking Obj 
   */
  getBookingById(id: number): Booking | undefined{ 
    //It searches through the Array and returns the OBJ with matching ID
    return this.bookingsArray.find(bok => bok.id == id);
  }

  /**
   * Takes in a Booking Obj, Adds it to an array 
   * @param booking 
   */
  addbooking(booking: Booking): void{
    this.bookingsArray.push(booking);
    console.log("Info: Booking has be successfully added")
  }

  /**
   * 
   * @param id 
   */
  deleteBooking(id: number): string | void{

    /**
     * Finds the index of an element based off speficed conditons
     */
    let index = this.bookingsArray.findIndex(bok => bok.id === id)
    
    const removed = this.bookingsArray.splice(index, 1)

    console.log("Item removed", removed)

  }

  /**
   * Find the booking wihtin our bookingSArray that matches the obj that needs to be updated
   * we then switch it with the updated one
   * @param updatedBooking 
   */
  updateBooking(updatedBooking: Booking):void {

    //Gives the index of the booking that wants to be updated by user
    const index = this.bookingsArray.findIndex(bok => bok.id === updatedBooking.id);

    //Now we take the booking from the array and switch it with the updated one
    this.bookingsArray[index] = updatedBooking;

  }

}
