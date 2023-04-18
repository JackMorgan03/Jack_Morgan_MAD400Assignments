import { Pipe, PipeTransform } from '@angular/core';
import { IContent } from './models/icontent';

@Pipe({
  name: 'filterIContent'
})
export class FilterIContentPipe implements PipeTransform {
  transform(contents: IContent[], types?: string): IContent[] {
    if (!contents) {
      return [];
    }

    if (!types) {
      return contents.filter(content => !content.type);
    } else {
      return contents.filter(content => content.type === types);
    }
  }
}

