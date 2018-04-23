import { Pipe, PipeTransform } from '@angular/core';
import * as NumberToWords from "number-to-words"


@Pipe({
  name: 'toWords'
})
export class ToWordsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)
      return '';

    return NumberToWords.toWords(value);
  }

}
