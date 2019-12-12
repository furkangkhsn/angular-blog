import { Component, OnInit, Input } from '@angular/core';
import { Yazi } from "../yazi";

@Component({
  selector: 'app-anasayfa-yazi',
  templateUrl: './anasayfa-yazi.component.html',
  styleUrls: ['./anasayfa-yazi.component.css']
})
export class AnasayfaYaziComponent implements OnInit {
  @Input() yazi: Yazi;
  date(tarih: string): String {
    let date = new Date(tarih);
    let gun = date.getDate();
    let ay = date.getMonth();
    let yil = date.getFullYear();

    let saat = date.getHours();
    let dak = date.getMinutes();

    return saat+':'+dak+' '+gun+'/'+ay+'/'+yil;
  }
  constructor() { }

  ngOnInit() {
  }

}
