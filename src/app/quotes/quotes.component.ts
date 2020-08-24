import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  sayings:Quotes[] = [
    new Quotes('The greater the suffering the greater the peace','anonymous','vector',new Date(2020,7,24)),
    new Quotes('No matter how much weed satan smokes he can never','turker chris','victor',new Date(2020,7,23)),
    new Quotes('We came, we saw, we conquered!','leon james','nduati',new Date(2020,7,22))
  ];
  toggleDetails(index){
    this.sayings[index].showDescription = !this.sayings[index].showDescription;
  }
  readQuote(isRead, index){
    if (isRead) {
      this.sayings.splice(index,1);
    }
  }
    constructor() {
      var today = new Date();
   }

  ngOnInit(): void {
  }

}
