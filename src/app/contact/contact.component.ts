import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../api/contacts/contact.service';
import { Contact } from '../api/contacts/contact.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../api/customer/customer.service';
import { CustomerModel } from '../api/customer/customer.model';
import { pipe } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact: Contact;
  contactForm: FormGroup;
  @ViewChild('alert', { static: true }) alert: ElementRef;
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private customerService: CustomerService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.contactService
      .getAllInformation()
      .subscribe((data) => (this.contact = data));
  }

  initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      content: [''],
      address: ['', [Validators.required]],
    });
  }

  postInformationOfCustomer(): void {
    const body: CustomerModel = this.contactForm.getRawValue();
    this.customerService
      .postInformationCustomer(body)
      .pipe(
        finalize(() => {
          this.contactForm.reset();
          this.alert.nativeElement.classList.add('show');
        })
      )
      .subscribe();
  }

  closeAlert(): void {
    this.alert.nativeElement.classList.remove('show');
  }
}
