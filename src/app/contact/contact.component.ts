import {Component, OnInit} from '@angular/core';
import {ContactService} from '../api/contacts/contact.service';
import {Contact} from '../api/contacts/contact.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../api/customer/customer.service';
import {CustomerModel} from '../api/customer/customer.model';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact: Contact;
  contactForm: FormGroup;
  isShowAlert = false;

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

  // tslint:disable-next-line:typedef
  get name() {
    return this.contactForm.get('name');
  }

  // tslint:disable-next-line:typedef
  get email() {
    return this.contactForm.get('email');
  }

  // tslint:disable-next-line:typedef
  get phone() {
    return this.contactForm.get('phone');
  }

  // tslint:disable-next-line:typedef
  get address() {
    return this.contactForm.get('address');
  }


  sendInformationOfCustomer(): void {
    const body: CustomerModel = this.contactForm.getRawValue();
    this.customerService
      .postInformationCustomer(body)
      .pipe(
        finalize(() => {
          this.contactForm.reset();
          this.isShowAlert = true;
        })
      )
      .subscribe();
  }
}
