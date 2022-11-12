import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate: Date;
  loading = true;

  constructor(
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<DialogAddUserComponent>
  ) {}

  ngOnInit(): void {}

  saveUser() {
    this.user.birtDate = this.birthDate.getTime();
    this.firestore
      .collection('users')
      .add(Object.assign({}, this.user))
      .then((result: any) => {
        this.loading = false;
        console.log(result);
        this.dialogRef.close();
      });
  }
}
