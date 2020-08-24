import { Component, OnInit } from '@angular/core';
import {Quotes} from './quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  sayings:Quotes[] = [
    {quote:'The greater the suffering the greater the peace', author:'anonymous', postedBy:'vector'},
    {quote:'No matter how much weed satan smokes he can never',author:'turker chris', postedBy:'victor'},
    {quote:'We came, we saw, we conquered!',author:'leon james', postedBy:'nduati'}
  ];
    constructor() {
   }

  ngOnInit(): void {
  }

}
