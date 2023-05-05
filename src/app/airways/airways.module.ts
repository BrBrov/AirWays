import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { MaterialModule } from '../material/material.module';
import { FirstStepComponent } from './components/first-step/first-step.component';
import { SecondStepComponent } from './components/second-step/second-step.component';
import { BookingEditComponent } from './components/booking-edit/booking-edit.component';
import { BookingEditorComponent } from './components/booking-editor/booking-editor.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { LogInComponent } from './components/modal-window/log-in/log-in.component';
import { SignInComponent } from './components/modal-window/sign-in/sign-in.component';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';
import { PassengerFormComponent } from './components/second-step/passenger-form/passenger-form.component';
import { ContactsFormComponent } from './components/second-step/contacts-form/contacts-form.component';

@NgModule({
  declarations: [
    MainPageComponent,
    BookingPageComponent,
    ShoppingCartPageComponent,
    FlightSearchComponent,
    FirstStepComponent,
    SecondStepComponent,
    BookingEditComponent,
    BookingEditorComponent,
    ModalWindowComponent,
    LogInComponent,
    SignInComponent,
    SummaryPageComponent,
    PassengerFormComponent,
    ContactsFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterOutlet,
    NgOptimizedImage,
  ],
  exports: [
    MainPageComponent,
    BookingPageComponent,
    ShoppingCartPageComponent,
    ModalWindowComponent,
  ],
})
export class AirwaysModule { }
