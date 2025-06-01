import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthServService } from '../../services/auth-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };
  constructor(private logging: AuthServService, private router:Router){};
  submitForm() {

    this.logging.login();
    console.log(this.logging.loggedIn);
    this.router.navigate(['home']);

  }
}
