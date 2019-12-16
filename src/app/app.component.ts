import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  active = false;
  user = JSON.parse(localStorage.getItem('user'));
  toggleActive() {
    this.active = !this.active;
  }

  isLoggedIn() {
    return localStorage.getItem('user-token') !== null;
  }

  cikis() {
    localStorage.removeItem('user');
    localStorage.removeItem('user-token');
    this.active = false;
  }
}
