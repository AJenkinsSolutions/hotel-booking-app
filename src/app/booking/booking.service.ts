import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { OnInit } from '@angular/core';
/**
 * This service will handle all the buisness logic for 'booking' including all CRUD operations
 * functions the same way a service functions in Java
 */
@Injectable({
  providedIn: 'root'
})
export class BookingService implements OnInit{

  //Array of booking objects 
  private bookingsArray: Booking[] = [];

 



  ngOnInit(): void {
    
    
  }

  


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

    booking.id = Date.now();
    this.bookingsArray.push(booking);
    //Adding item to local storage

  }
  

  /**
   * 
   * @param id 
   */
  deleteBooking(id: number): string | void{
    console.log("INFO: Entered into deleteBooking in bookingServiceImpl")
    /**
     * Finds the index of an element based off speficed conditons
     */
    let index = this.bookingsArray.findIndex(bok => bok.id === id)
    
    const removed = this.bookingsArray.splice(index, 1)
    //Adding item to local storage

    console.log("Item removed", removed)

  }

  /**
   * Find the booking wihtin our bookingSArray that matches the obj that needs to be updated
   * we then switch it with the updated one
   * @param updatedBooking 
   */
  updateBooking(id: number, updatedBooking: Booking):void {

    //Gives the index of the booking that wants to be updated by user
    const index = this.bookingsArray.findIndex(bok => bok.id === id);

    //Now we take the booking from the array and switch it with the updated one
    this.bookingsArray[index] = updatedBooking;
    //Adding item to local storage

  }

}
