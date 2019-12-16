import { Component, OnInit } from '@angular/core';
import { User } from '../../types/user';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]
  constructor(private apollo: Apollo) { }
  isLoggedIn() {
    return localStorage.getItem('user-token');
  }
  loggedInUser = null;
  ngOnInit() {
    if(this.isLoggedIn()) {
      this.loggedInUser = JSON.parse(localStorage.getItem('user'));
    }
    let query = `
      query users {
        users {
          _id
          adi
          soyadi
          kadi
          email
          sifre
          yetkiler
        }
      }
    `;

    fetch('http://localhost:4000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify( {
        query
      })
    }).then(r => r.json())
      .then(data => {
        this.users = data.data.users;
        console.log(this.users);
        
      })

  
  }

}
