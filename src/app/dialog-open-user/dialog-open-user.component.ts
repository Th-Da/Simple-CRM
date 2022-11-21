import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-open-user',
  templateUrl: './dialog-open-user.component.html',
  styleUrls: ['./dialog-open-user.component.scss'],
})
export class DialogOpenUserComponent implements OnInit {
  user: User;
  userId: string;
  loading = false;
  birthDate: Date;

  constructor(
    public dialogRef: MatDialogRef<DialogOpenUserComponent>,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {}

  saveUser() {
    this.loading = true;
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(Object.assign({}, this.user))
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      });
  }
}
