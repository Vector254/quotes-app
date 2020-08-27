import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import {Quotes} from '../quotes';
import {  ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quotes;
  @Output() isRead = new EventEmitter<boolean>();

  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.quote.upvotes+=1;
  }
  downvote(){
    this.quote.downvotes+=1;
  }

  constructor(private route:ActivatedRoute,) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
  }

}
