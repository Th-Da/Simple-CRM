import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dialog-auth-errors',
  templateUrl: './dialog-auth-errors.component.html',
  styleUrls: ['./dialog-auth-errors.component.scss'],
})
export class DialogAuthErrorsComponent {
  constructor(
    public authService: AuthService,
    public dialogRef: MatDialogRef<DialogAuthErrorsComponent>
  ) {}
}
