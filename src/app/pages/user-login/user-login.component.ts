import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    const user = {
      first_name: '',
      last_name: '',
      email: '',
      username: usernameInput?.value || '',
      password: passwordInput?.value || '',
    };

    if (user.username && user.password) {
      localStorage.setItem('user', JSON.stringify(user));
      this.authService.loggedIn$.next(true); // Update the loggedIn$ BehaviorSubject
      this.router.navigate(['/homepage']);
    }
  }
}
