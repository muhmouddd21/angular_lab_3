import { AuthServService } from './../../services/auth-serv.service';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule,HeaderComponent,CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  constructor(public auth: AuthServService,private router:Router){};
  showLogOut:boolean =this.auth.islogging();
  logout(){
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
