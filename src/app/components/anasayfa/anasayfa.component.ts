import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import { Yazi } from '../../types/yazi';

@Component({
  selector: 'app-anasayfa',
  template: `
    <div class="main flex flex-row flex-wrap w-full">
      <app-anasayfa-yazi *ngFor="let yazi of yazilar" [yazi]='yazi' class="w-full md:w-1/2 lg:w-1/3"></app-anasayfa-yazi>
    </div>
  `,
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
