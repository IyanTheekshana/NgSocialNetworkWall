import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [MatInputModule, MatButtonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl("", {
      validators:[Validators.email, Validators.required]
    }),
    password: new FormControl("",{
      validators:[Validators.minLength(6), Validators.required]
    })
  });

  onSubmit() {
    console.log(this.form.controls.email.value, this.form.controls.password.value)
  }
      

}
