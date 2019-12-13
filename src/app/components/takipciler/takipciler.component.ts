import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-takipciler',
  templateUrl: './takipciler.component.html',
  styleUrls: ['./takipciler.component.css']
})
export class TakipcilerComponent implements OnInit {
  users: User[] = []
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let user_id;
    this.route.paramMap.subscribe(({params}) => {
      console.log(params);
      user_id = params['user_id'];

      let query = `
        query TakipciByUserId($id: ID!) {
          TakipciByUserId(id: $id) {
            _id
            adi
            soyadi
            kadi
            email
            fotograf
            takip
            takipci
            yazi_adeti
          }
        }
      `;

      fetch('http:localhost:4000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          query,
          variables: { id: user_id }
        })
      }).then(r => r.json())
      .then(res => {
        //res.data.
      })
    })
  }

}
