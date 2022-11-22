import { Component, OnInit } from '@angular/core';
import { VariableService } from '../services/variable.service';
VariableService;

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  constructor(private readonly _serv: VariableService) {}

  ngOnInit(): void {}

  public logout() {
    this._serv.isLoggedIn = !this._serv.isLoggedIn;
  }
}
