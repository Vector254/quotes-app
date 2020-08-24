import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

quote;
Author;
formdata;




ngOnInit() {
this.formdata = new FormGroup({
Name: new FormControl(),
quote: new FormControl(),
Author: new FormControl()
});
}
onClickSubmit(data) {this.quote = data.quote; this.Author = data.Author;}


}
