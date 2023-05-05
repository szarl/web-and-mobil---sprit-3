import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  login() {
    this.loggedIn$.next(true); // Update the loggedIn$ BehaviorSubject
  }

  logout() {
    this.loggedIn$.next(false); // Update the loggedIn$ BehaviorSubject
  }
}
