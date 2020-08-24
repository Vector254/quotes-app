import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighestUpvotes]'
})
export class HighestUpvotesDirective {

  constructor(private elem:ElementRef) {}
    private textDeco(action:string){
    this.elem.nativeElement.style.backgroundColor ='green';
   }

}
