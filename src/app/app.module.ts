import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HighestUpvotesDirective } from './highest-upvotes.directive';
import { QuotesComponent } from './quotes/quotes.component';
import { TimePipePipe } from './time-pipe.pipe';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { FooterComponent } from './footer/footer.component';
import{HttpClientModule} from '@angular/common/http';

import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HighestUpvotesDirective,
    QuotesComponent,
    TimePipePipe,
    QuoteDetailsComponent,
    FooterComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
