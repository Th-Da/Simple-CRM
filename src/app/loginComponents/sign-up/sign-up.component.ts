import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { VariableService } from 'src/app/services/variable.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private readonly _serv: VariableService
  ) {}

  ngOnInit(): void {}
  /*   public get isLoggedIn() {
    return this._serv.isLoggedIn;
  } */
}
