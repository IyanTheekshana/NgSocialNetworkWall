import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-account',
  imports: [MatInputModule, MatButtonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

  private userService = inject(UserService);

  form = new FormGroup({
    email: new FormControl("", {
      validators:[Validators.email, Validators.required]
    }),
    username: new FormControl("", {
      validators:[Validators.maxLength(10), Validators.required, Validators.maxLength(10)]
    }),
    password: new FormControl("",{
      validators:[Validators.minLength(6), Validators.required]
    })
  });

  onSubmit() {
    this.userService.createNewUser(this.form.value).subscribe();
  }

}
