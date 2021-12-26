import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})

export class FormComponent implements OnInit {

  user = {
    first_name: '',
    last_name: '',
    street_adrress: '',
    street_adrress2: '',
    email: '',
    phone: '',
    postal: '',
    state: '',
    city: ''
  }

  show_form_error = false
  userForm: FormGroup = new FormGroup({})

  onSubmit(){
    if (this.userForm.status == "VALID"){
        console.log(this.userForm.value)
        this.userForm.reset()
        this.show_form_error = false
    } else {
        console.log('ERROR')
        this.show_form_error = true
    }
  }

  ngOnInit(): void {

    this.userForm = new FormGroup({
      first_name: new FormControl(this.user.first_name, Validators.required),
      last_name: new FormControl(this.user.last_name, Validators.required),
      street_address: new FormControl(this.user.street_adrress, Validators.required),
      street_address2: new FormControl(this.user.street_adrress2, Validators.required),
      email: new FormControl(this.user.email),
      phone: new FormControl(this.user.phone, Validators.required),
      postal: new FormControl(this.user.postal, Validators.required),
      state: new FormControl(this.user.state, Validators.required),
      city: new FormControl(this.user.city, Validators.required)
    });
  
  }
  
  get first_name() { return this.userForm.get('first_name') }
  get last_name() { return this.userForm.get('last_name') }
  get street_address() { return this.userForm.get('street_address') }
  get street_address2() { return this.userForm.get('street_address2') }
  get email() { return this.userForm.get('email') }
  get phone() { return this.userForm.get('phone') }
  get postal() { return this.userForm.get('postal') }
  get state() { return this.userForm.get('state') }
  get city() { return this.userForm.get('city') }
}