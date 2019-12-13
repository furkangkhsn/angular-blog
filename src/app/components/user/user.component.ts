import { Component, OnInit } from '@angular/core';
import { User } from '../../types/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let userId;
    this.route.paramMap.subscribe(({params}) => {
      console.log(params);
      
      userId = params['user_id'];
    });
    
    let query = `
      query UserById($id: ID!) {
        UserById(id: $id) {
          _id
          adi
          soyadi
          kadi
          email
          takip
          takipci
          fotograf
          yazi_adeti
        }
      }
    `;

    fetch('http://localhost:4000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { id: userId }
      })
    }).then(r => r.json())
    .then(data => {
      this.user = data.data.UserById;
      console.log(this.user);
      
    })
  
  }

}
