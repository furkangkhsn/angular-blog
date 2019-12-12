import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import { Yazi } from '../yazi';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css']
})
export class AnasayfaComponent implements OnInit {
  yazilar: Yazi[] = [];
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    let query = `query yazilar {
      yazilar
      {
        _id
        baslik
        icerik
        yazar
        tarih
        kategori
        yayinda
      }
    }`;
    fetch('http://localhost:4000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query
      })
    })
      .then(r => r.json())
      .then(data => {
        this.yazilar = data.data.yazilar;        
      });
      
  }

}
