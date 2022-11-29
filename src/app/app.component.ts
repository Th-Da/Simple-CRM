import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { VariableService } from './services/variable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'simple-crm';

  /*  isLoggedIn() {
    return this._serv.isLoggedIn;
  } */

  constructor(
    private readonly _serv: VariableService,
    public auth: AuthService
  ) {}
}
