import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


/**
 * This service will handle all the buisness logic for 'booking' including all CRUD operations
 * functions the same way a service functions in Java
 */
@Injectable({
  providedIn: 'root'
})
export class BookingService implements OnInit{

  // Define custom headers
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'localhost:3001',
    'Access-Control-Allow-Methods' : 'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS', // Specify the origin that is allowed to access the resource
    'Access-Control-Allow-Headers' : 'Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With'
  });

  //Array of booking objects 
  private bookingsArray: Booking[] = [];

  //Mockoon Api base Url
  private baseUrl: string = 'http://localhost:3001/';
  private getAllEndpoint: string = 'bookings';
  private getEndpoint: string = 'booking/';
  private postEndpoint: string = 'add';

  //DI: so we can use our httpClient
 constructor(private http: HttpClient){}



  ngOnInit(): void {
    
    
  }

  


  //CRUD Operations

  /**
   * 
   * @returns Array of Bookings
   */
  getAllBookings(): Observable<Booking[]>{
    // return this.bookingsArray;
    return this.http.get<Booking[]>(this.baseUrl + this.getAllEndpoint);
  }

  /**
   * 
   * @param id 
   * @returns Single Booking Obj 
   */
  getBookingById(id: number): Observable<Booking>{ 
    //It searches through the Array and returns the OBJ with matching ID

    return this.http.get<Booking>(this.baseUrl + this.getEndpoint + id);
    //return this.bookingsArray.find(bok => bok.id == id);
  }

  /**
   * Takes in a Booking Obj, Adds it to an array 
   * @param booking 
   */
  addbooking(booking: Booking): Observable<void>{
    console.log('INFO: Entered intop addBoooking in Booking service')
    const body: Booking = booking;
    body.id = Date.now();
    console.log(body)
    //this.bookingsArray.push(booking);

    return this.http.post<void>(this.baseUrl + 'add', body);

  }
  

  /**
   * 
   * @param id 
   */
  deleteBooking(id: number): Observable<void>{
    console.log("INFO: Entered into deleteBooking in bookingServiceImpl")
    /**
     * Finds the index of an element based off speficed conditons
     */
    //let index = this.bookingsArray.findIndex(bok => bok.id === id)
    return this.http.delete<void>(this.baseUrl + 'delete/' + id); 
    //const removed = this.bookingsArray.splice(index, 1)
    //Adding item to local storage

    

  }

  /**
   * Find the booking wihtin our bookingSArray that matches the obj that needs to be updated
   * we then switch it with the updated one
   * @param updatedBooking 
   */
  updateBooking(id: number, updatedBooking: Booking): Observable<void> {

    //Gives the index of the booking that wants to be updated by user
    ///const index = this.bookingsArray.findIndex(bok => bok.id === id);
    return this.http.put<void>(this.baseUrl + 'update/'+ id, updatedBooking);
    //Now we take the booking from the array and switch it with the updated one
    //this.bookingsArray[index] = updatedBooking;
    //Adding item to local storage

  }

}
