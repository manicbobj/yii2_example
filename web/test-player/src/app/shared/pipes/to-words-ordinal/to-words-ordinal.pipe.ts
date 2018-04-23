import { Pipe, PipeTransform } from '@angular/core';
import * as NumberToWords from "number-to-words"

@Pipe({
  name: 'toWordsOrdinal'
})
export class ToWordsOrdinalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)
      return '';

    return NumberToWords.toWordsOrdinal(value);
  }

}
