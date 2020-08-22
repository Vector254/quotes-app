import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'The Quotes App';
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

