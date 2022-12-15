import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';
import { TripaddComponent } from './tripadd/tripadd.component';
import { TriprateComponent } from './triprate/triprate.component';
import { SearchTripsPipe } from './search-trips.pipe';
import { SearchByPricePipe } from './search-by-price.pipe';
import { SearchByOpinionsPipe } from './search-by-opinions.pipe';
import { SearchByDatePipe } from './search-by-date.pipe';
import { CardComponent } from './card/card.component';
import { NavComponent } from './nav/nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TriphistComponent } from './triphist/triphist.component';
import { SingletripComponent } from './singletrip/singletrip.component';
import { TripopinionformComponent } from './tripopinionform/tripopinionform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    TripaddComponent,
    TriprateComponent,
    SearchTripsPipe,
    SearchByPricePipe,
    SearchByOpinionsPipe,
    SearchByDatePipe,
    CardComponent,
    NavComponent,
    HomepageComponent,
    TriphistComponent,
    SingletripComponent,
    TripopinionformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
