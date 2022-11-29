import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { VariableService } from '../services/variable.service';
VariableService;

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  constructor(
    private readonly _serv: VariableService,
    public afAuth: AuthService
  ) {}

  ngOnInit(): void {}

  public logout() {
    this._serv.isLoggedIn = !this._serv.isLoggedIn;
  }
}
