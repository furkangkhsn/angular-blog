import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Yazi } from '../yazi';

@Component({
  selector: 'app-yazi',
  templateUrl: './yazi.component.html',
  styleUrls: ['./yazi.component.css']
})
export class YaziComponent implements OnInit {
  yazi: Yazi;

  date(tarih: string): String {
    let date = new Date(tarih);
    let gun = date.getDate();
    let ay = date.getMonth();
    let yil = date.getFullYear();

    let saat = date.getHours();
    let dak = date.getMinutes();

    return saat+':'+dak+' '+gun+'/'+ay+'/'+yil;
  }

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let yaziId;
    this.route.queryParams.subscribe(params => {
      yaziId = params['id'];
    });
    let query = `query yaziById($id: String){
      yaziById(_id: $id) {
        _id
        baslik
        icerik
        yazar
        yazar_adi
        yazar_soyadi
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
        query,
        variables: {id: yaziId}
      })
    })
      .then(r => r.json())
      .then(data => {
        this.yazi = data.data.yaziById;
        console.log(data.data.yaziById);
        console.log(this.yazi);
        
      });
      
  }

}
