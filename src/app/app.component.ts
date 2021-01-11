import { Component, OnInit } from '@angular/core';
import { Contact } from './api/contacts/contact.model';
import { ContactService } from './api/contacts/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  contactInformation: Contact;
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getAllInformation().subscribe((data) => {
      this.contactInformation = data;
    });
  }
}
