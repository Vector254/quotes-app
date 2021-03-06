import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';
import { HttpClient } from '@angular/common/http';

import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';
import {Quote} from '../quote-class/quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  router:Router;
  quote:Quote;
  sayings:Quotes[] = [
    new Quotes('Impossible is just but an opinion','Paulo Coelho','vector',new Date(2019,7,24),0,0),
    new Quotes('No matter how much weed satan smokes, he can never be the most high','Anonymous','victor',new Date(2020,7,23),0,0),
    new Quotes('Intelligence is the ability to adapt to change','Stephen Hawking','nduati',new Date(2020,7,22),0,0)
  ];
  goToUrl(id){
    this.router.navigate(['/quotes',id])
  }
  toggleDetails(index){
    this.sayings[index].showDescription = !this.sayings[index].showDescription;
  }
  more(button): void {
    

    button.innerHTML = "less";
}
  readQuote(isRead, index){
    if (isRead) {
      this.sayings.splice(index,1);
    }
  }
  addNewQuote(quote){
    let quoteLength = this.sayings.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.datePosted)
    this.sayings.push(quote)
  }
  
  current:number
  previous:number
  counter:number

  highestUpvote(){
    this.current = 0
    this.previous = 0

    for(this.counter=0 ; this.counter < this.sayings.length; this.counter++) {
      this.previous = this.sayings[this.counter].upvotes;
      if(this.previous > this.current){this.current = this.previous}
    }
    return  this.current
  }
    constructor(private quoteService:QuoteRequestService) {
    
   }

  ngOnInit() {
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
}
}
