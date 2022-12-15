import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SingletripComponent } from './singletrip/singletrip.component';
import { TripaddComponent } from './tripadd/tripadd.component';
import { TriphistComponent } from './triphist/triphist.component';
import { TripsComponent } from './trips/trips.component';

const routes: Routes = [
  {path: 'trips', component: TripsComponent},
  {path: 'trips/:id', component: SingletripComponent},
  {path: 'add-trip', component: TripaddComponent},
  {path: 'card', component: CardComponent},
  {path: 'history', component: TriphistComponent},
  {path: '', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
