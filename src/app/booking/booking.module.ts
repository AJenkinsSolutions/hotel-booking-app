import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingListComponent } from '../booking-list/booking-list.component';
import { BookingFormComponent } from '../booking-form/booking-form.component';




@NgModule({
  declarations: [
 
  
    BookingListComponent,
         BookingFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookingModule { }
