import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingFormComponent } from './booking-form/booking-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: BookingListComponent},
  {path: 'create', component: BookingFormComponent},
  {path: 'edit/:id', component: BookingFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
