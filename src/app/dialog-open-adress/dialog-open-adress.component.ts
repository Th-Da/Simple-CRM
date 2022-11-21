import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-open-adress',
  templateUrl: './dialog-open-adress.component.html',
  styleUrls: ['./dialog-open-adress.component.scss'],
})
export class DialogOpenAdressComponent implements OnInit {
  user: User;
  userId: string;
  loading = true;
  constructor(
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<DialogOpenAdressComponent>
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
