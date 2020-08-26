import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {AlertService} from '../alert-service/alert.service'
import {Quotes} from '../quotes'
import { Quote } from '@angular/compiler';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote = new Quotes("","","",new Date(),0,0);
  @Output() addQuote = new EventEmitter<Quotes>();
  myForm:FormGroup;
  alertSevice:AlertService;

  submitQuote(){
this.addQuote.emit(this.newQuote);
  this.alertSevice.alertMe("Quote added!");
}
constructor(alertSevice:AlertService){
  this.alertSevice=alertSevice;
}
  

ngOnInit() {
}
}
