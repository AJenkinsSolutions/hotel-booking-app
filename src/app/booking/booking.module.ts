import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingListComponent } from '../booking-list/booking-list.component';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
 
  
    BookingListComponent,
         BookingFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule
  ],
})
export class BookingModule { }
