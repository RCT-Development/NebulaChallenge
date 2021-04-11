import { isNgTemplate } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contacts/contact';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(value: Contact[], term: string) {

    if (!term) return value;
    return (value || []).filter((item:Contact) => 
      new RegExp(term, 'gi').test(item.cellNumber) ||
      new RegExp(term, 'gi').test(item.firstName) ||
      new RegExp(term, 'gi').test(item.lastName) ||
      new RegExp(term, 'gi').test(item.firstName + ' ' + item.lastName) 
    );

  }
}
