import { Component } from '@angular/core';
import { VariableService } from './services/variable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'simple-crm';

  public get isLoggedIn() {
    return this._serv.isLoggedIn;
  }

  constructor(private readonly _serv: VariableService) {}
}
