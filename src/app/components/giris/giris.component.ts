import { Component, OnInit } from '@angular/core';
import {  MatSnackBar } from '@angular/material';
import { Router } from "@angular/router";

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.css']
})
export class GirisComponent implements OnInit {
  user = {
    kadi: '',
    sifre: ''
  }

  constructor(private _snackBar: MatSnackBar, private router: Router) { }
  isLoggedIn() {
    return localStorage.getItem('user-token');
  }
  ngOnInit() {
    if(this.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  giris() {
    if(this.user.kadi.trim() == '' || this.user.sifre.trim() == '') {
      this._snackBar.open('Boş bırakma!', 'x', { duration: 2000 });
      return;
    }

    let query = `
      mutation giris($user: GirisUser) {
        giris(user: $user) {
          sonuc
          tip
          user {
            _id
            adi
            soyadi
            kadi
            email
            yetkiler
            takip
            takipci
            fotograf
            yazi_adeti
          }
        }
      }
    `;
    
    fetch('http://localhost:4000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables: { user: this.user }
      })
    }).then(r => r.json())
    .then(res => {
      console.log(res);
      
      if(res.data.giris.tip) {
        localStorage.setItem('user-token', res.data.giris.sonuc);
        localStorage.setItem('user', JSON.stringify(res.data.giris.user));
        this.router.navigate(['/']);
      } else this._snackBar.open(res.data.giris.sonuc, 'x', { duration: 2000 });
    })
  }

}
