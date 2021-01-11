import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../api/contacts/contact.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() contact: Contact;
  constructor() { }

  ngOnInit(): void {
  }

}
