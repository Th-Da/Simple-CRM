import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { VariableService } from 'src/app/services/variable.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    public authService: AuthService,
    private readonly _serv: VariableService
  ) {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.signUpForm.valid) {
      this.authService.SignUp(
        this.signUpForm.value.email,
        this.signUpForm.value.password
      );
    }
  }
}
