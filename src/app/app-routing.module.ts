import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuotesComponent} from './quotes/quotes.component'
import {AboutComponent} from './about/about.component'
import{NotFoundComponent} from './not-found/not-found.component'
import{QuoteDetailsComponent} from './quote-details/quote-details.component'
const routes: Routes = [
  {path: 'quotes', component:QuotesComponent},
  {path: 'about', component: AboutComponent},
  { path: 'quotes/:id', component: QuoteDetailsComponent },
  
  { path: '', redirectTo:"/quotes", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
