import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthServService } from '../services/auth-serv.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class authguardGuard implements CanActivate{
  constructor(private router:Router, private auth:AuthServService){};
  canActivate(): boolean {
    if(this.auth.islogging()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }

}
