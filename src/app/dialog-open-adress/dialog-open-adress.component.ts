import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog-open-adress',
  templateUrl: './dialog-open-adress.component.html',
  styleUrls: ['./dialog-open-adress.component.scss'],
})
export class DialogOpenAdressComponent implements OnInit {
  user: User;
  userId: string;
  loading = false;
  constructor(
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<DialogOpenAdressComponent>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.userId);

    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id');
    });
  }
  saveUser() {
    try {
      this.firestore
        .collection('users')
        .doc(this.userId)
        .update(Object.assign({}, this.user));
    } catch (error) {
      error;
    }

    console.log(this.userId);
    /*       .then((result: any) => {
        this.loading = false;
        this.dialogRef.close();
        
      }); */
  }
}
