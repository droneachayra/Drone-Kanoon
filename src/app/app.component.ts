import { Component } from '@angular/core';
import { MongoClient } from 'mongodb';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  signupFrom!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.signupFrom = this.fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'phone': ['', Validators.required],
      'service': ['', Validators.required],
    })
  }
  title = 'Newproject';
  user = {
    name: '',
    email: '',
    phone: '',
    service: ''
  };

  submitForm() {
    const data = this.signupFrom.value;
    this.auth.signup(data).subscribe(res => {
      if(res.success){
       // alert('ssss');
      }
     // alert("user register succ ....");
     // this.signupFrom.reset();
    }, err => {
      //alert('ssssddddd');
      alert(err)
    })
  }
}
