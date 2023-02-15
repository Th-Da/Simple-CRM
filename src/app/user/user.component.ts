import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user = new User();

  constructor(
    public dialog: MatDialog,
    private firestore: AngularFirestore,
    public router: Router,
    public firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    this.firestoreService.getUser();
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  openUser(url, id) {
    this.router.navigate([url]);
  }
}
