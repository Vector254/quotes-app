import { Component, OnInit , Output, EventEmitter} from '@angular/core';

import {Quotes} from '../quotes'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote = new Quotes("","","",new Date(),0,0);
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote(){
this.addQuote.emit(this.newQuote);
  }
ngOnInit() {
}
}
