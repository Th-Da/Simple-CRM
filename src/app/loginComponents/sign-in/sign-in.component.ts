import { ViewportScroller } from '@angular/common';
import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VariableService } from 'src/app/services/variable.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private readonly _serv: VariableService,
    private viewportScroller: ViewportScroller
  ) {}

  contactForm = new FormGroup({
    password: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
  });

  ngOnInit(): void {}
  /*   public isLoggedIn() {
    return !this._serv.isLoggedIn;
  } */

  /**
   * checks if the form is valid befor signing in
   *  @param userEmail value from intputfield email
   * @param userPassword value from intputfield password
   */
  onSubmit(userEmail, userPassword) {
    if (this.contactForm.valid) {
      this.authService.SignIn(userEmail, userPassword);
    }
  }

  scroll(target: string) {
    this.viewportScroller.scrollToAnchor(target);
  }
}
