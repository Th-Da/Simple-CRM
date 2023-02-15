import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate: Date;
  loading = false;
  uid: string = '';

  constructor(
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    public firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {}

  saveUser() {
    this.user.birtDate = this.birthDate.getTime();
    this.user.photoURL = this.firestoreService.updatedUser.photoURL;
    this.firestore
      .collection('users')
      .add(Object.assign({}, this.user))
      .then((result: any) => {
        this.loading = false;
        this.dialogRef.close();
      });
  }
}
