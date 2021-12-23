import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {
  first_name: string = ''
  last_name: string = ''
  street_adrress: string = ''
  street_adrress2: string = ''
  email: string = ''
  phone: string = ''
  postal: string = ''
  state: string = ''
  city: string = ''
  onSubmit(f: NgForm){
    console.log(f.value);
    
  }
}
