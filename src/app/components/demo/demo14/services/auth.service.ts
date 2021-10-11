import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // La liste des users
  userList: User[] = [
    { login: 'RoiArthur', email: 'arthur@mail.com', password: 'test1234' },
    { login: 'BriseFer', email: 'benoit@mail.com', password: 'test1234' },
  ];

  // property userConnected
  private connectedUser!: User;

  // mon subject = observable, on stocke quelque chose dedans et ensuite on emet
  myUserSubject: Subject<User> = new Subject<User>();

  // mon subject doit emmettre l'utilisateur connecte aux abonnés grace a .next()
  emitUser() {
    this.myUserSubject.next(this.connectedUser);
  }

  constructor() {}

  login(email: string, pass: string) {
    // si on trouve une correspondance, on renvoie un user
    // difference entre any(dynamique) undefined(non dynamique)
    // si on type any , on accede quand meme aux proprietes , undefined non

    let id = this.userList.findIndex(
      (x) => x.email === email && x.password === pass
    );

    this.connectedUser = this.userList[id];

    // stocker notre user dans notre session
    sessionStorage.setItem('user', JSON.stringify(this.connectedUser));
    localStorage.setItem('user', JSON.stringify(this.connectedUser));

    //emmettre
    this.emitUser();
  }
}
