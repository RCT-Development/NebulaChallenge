import { Component, OnInit } from '@angular/core';
import data from './contacts.json';
import { Contact } from './contact';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  activeContact: Contact;
  query: string;
  constructor() { }

  ngOnInit(): void {
    this.contacts = data;
    this.activeContact = this.contacts[0];
    this.query = "";
  }

}
