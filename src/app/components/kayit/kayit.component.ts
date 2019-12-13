import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-kayit',
  templateUrl: './kayit.component.html',
  styleUrls: ['./kayit.component.css']
})
export class KayitComponent implements OnInit {
  user = {
    adi: '',
    soyadi: '',
    kadi: '',
    email: '',
    sifre: '',
    sifret: ''
  };
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
  
  }

  kayit() {
    Object.keys(this.user).map(key => {
      if(this.user[key].trim() == '') {
        this._snackBar.open('Boş bırakma!', 'x', { duration: 2000 });
        return;
      }
      if(this.user.sifre != this.user.sifret) {
        this._snackBar.open('Şifreler Uyuşmuyor!', 'x', { duration: 2000 });
        return;
      }
    });

    let query = `
      mutation kayit($user: KayitUser) {
        kayit(user: $user) {
          sonuc
        }
      }
    `;

    fetch('http://localhost:4000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'applicaton/json'
      },
      body: JSON.stringify({
        query,
        variables: { user: this.user }
      })
    }).then(r => r.json())
    .then(res => {
      console.log(res);
      
      this._snackBar.open(res.data.kayit.sonuc, 'x', { duration: 2000 });
    })

  }

}
