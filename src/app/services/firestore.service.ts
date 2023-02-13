import { Injectable, Injector } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MatDialogRef } from '@angular/material/dialog';
import { finalize, Observable } from 'rxjs';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    public storage: AngularFireStorage,
    private injector: Injector,
    private afAuth: AngularFireAuth
  ) {}

  user = new User();
  updatedUser: User;
  birthDate: Date;
  loading = false;
  downloadURL: Observable<string>;
  userDataObject: User;

  saveUser() {
    this.user.birtDate = this.birthDate.getTime();
    this.firestore
      .collection('users')
      .add(Object.assign({}, this.user))
      .then((result: any) => {
        this.loading = false;
        this.dialogRef.close();
      });
  }

  uploadImage(event) {
    const file = event.target.files[0];
    const filePath = 'images/' + file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url) => {
            this.user.photoURL = url;
            this.updatedUser = { ...this.user, photoURL: url };
          });
        })
      )
      .subscribe();
  }

  changeImage(url: string) {}
}
