import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VariableService {
  public isLoggedIn = true;

  constructor() {}
}
