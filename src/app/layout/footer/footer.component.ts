import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../api/contacts/contact.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() contact: Contact;
  constructor() {}

  ngOnInit(): void {}
}
