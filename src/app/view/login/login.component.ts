import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  
  constructor(private _fb: FormBuilder, private _serv: ServicesService) {
    this.myForm = this._fb.group({
      userName: ['', [Validators.required,Validators.pattern("[a-z0-9]*"),Validators.minLength(8)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      emailAdd: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^[0-9]{10}$"), Validators.minLength(10)]]
    });
  }
  
  get userName(){
    return this.myForm.get('userName');
  }
  get firstName(){
    return this.myForm.get('firstName');
  }
  get lastName(){
    return this.myForm.get('lastName');
  }
  get emailAdd(){
    return this.myForm.get('emailAdd');
  }
  get phoneNumber(){
    return this.myForm.get('phoneNumber');
  }
  
  ngOnInit(): void {
  
  }

  onSubmit(){
    this._serv.sentDate(this.myForm.value);
    console.log(this.myForm.value);
  }
  
}
