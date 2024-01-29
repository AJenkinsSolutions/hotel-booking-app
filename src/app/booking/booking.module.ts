import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingListComponent } from '../booking-list/booking-list.component';
import { BookingFormComponent } from '../booking-form/booking-form.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
 
  
    BookingListComponent,
         BookingFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BookingModule { }
