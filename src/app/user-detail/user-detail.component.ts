import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogOpenAdressComponent } from '../dialog-open-adress/dialog-open-adress.component';
import { DialogOpenUserComponent } from '../dialog-open-user/dialog-open-user.component';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  userId: string;
  user: User = new User();

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    public dialog: MatDialog,
    public firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id');
      this.getUser();
    });
  }

  getUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges({ idField: 'id' })
      .subscribe((user: any) => {
        this.user = new User(user);
      });
  }

  editAdress() {
    const dialog = this.dialog.open(DialogOpenAdressComponent);
    dialog.componentInstance.user = new User(Object.assign({}, this.user));
    dialog.componentInstance.userId = this.userId;
  }
  editProfil() {
    const dialog = this.dialog.open(DialogOpenUserComponent);
    dialog.componentInstance.user = new User(Object.assign({}, this.user));
    dialog.componentInstance.userId = this.userId;
  }
}
