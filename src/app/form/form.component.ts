import { Component, OnInit } from '@angular/core';

import {Quotes} from '../quotes'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote = new Quotes("","","",new Date());

ngOnInit() {
}
}
