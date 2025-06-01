import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServService {
  loggedIn:boolean = false;

  login(){
      this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  islogging(){
    return this.loggedIn;
  }
}
