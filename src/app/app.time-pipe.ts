import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
name : 'time'
})
export class timePipe implements PipeTransform {
    transform(val : number) : number {
    return Math.sqrt(val);
    }
    }