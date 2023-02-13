import { ViewportScroller } from '@angular/common';
import { Target } from '@angular/compiler';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
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
  @HostListener('document:click', ['$event'])
  documentClick(event: Event): void {
    this.isGuestButtonClicked(event);
  }
  @ViewChild('guestLogin', { read: ElementRef }) guestLogin: ElementRef;

  constructor(
    public authService: AuthService,
    private readonly _serv: VariableService,
    private viewportScroller: ViewportScroller
  ) {}

  signInAsGuest: Boolean = false;

  contactForm = new FormGroup({
    password: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
  });

  ngOnInit(): void {}

  /**
   * checks if the form is valid befor signing in
   *  @param userEmail value from intputfield email
   * @param userPassword value from intputfield password
   */
  onSubmit(userEmail, userPassword) {
    if (this.contactForm.valid && !this.signInAsGuest) {
      this.authService.SignIn(userEmail, userPassword);
    } else if (this.signInAsGuest) {
      this.authService.loginAsGuest();
    }
  }

  scroll(target: string) {
    this.viewportScroller.scrollToAnchor(target);
  }

  isGuestButtonClicked(event) {
    if (
      (event.target as HTMLButtonElement) == this.guestLogin.nativeElement ||
      this.guestLogin.nativeElement.children
    ) {
      this.signInAsGuest = true;
      this.contactForm.setValue({
        password: 'guest',
        email: 'guest@guest.com',
      });
    }
  }
}
