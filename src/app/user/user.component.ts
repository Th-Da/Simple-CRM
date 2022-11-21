import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user = new User();
  allUsers = [];

  constructor(
    public dialog: MatDialog,
    private firestore: AngularFirestore,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({ idField: 'id' })
      .subscribe((changes: any) => {
        this.allUsers = changes;
      });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
