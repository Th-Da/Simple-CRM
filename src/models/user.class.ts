export class User {
  uid: string;
  firstName: string;
  email: string;
  lastName: string;
  birtDate: number;
  street: string;
  zipCode: number;
  city: string;
  photoURL: string;

  constructor(obj?: any) {
    this.uid = obj ? obj.uid : '';
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.email = obj ? obj.email : '';
    this.birtDate = obj ? obj.birtDate : '';
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
    this.photoURL = obj ? obj.photoURL : '';
  }
}
