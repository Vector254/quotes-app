import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighestUpvotes]'
})
export class HighestUpvotesDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor ='lightgreen';
    this.elem.nativeElement.style.color = "black";
   }

}
