import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HighestUpvotesDirective } from './highest-upvotes.directive';
import { timePipe } from './app.time-pipe';

@NgModule({
  declarations: [
    timePipe,
    AppComponent,
    FormComponent,
    HighestUpvotesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
