import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  connectedUser!: User;

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    this._auth.myUserSubject.subscribe((cu: User) => {
      this.connectedUser = cu;
    });
  }
}
