import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DescriptionPage } from '../description/description';


@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html'
})
export class CalendarioPage {

  calendary: any;
  entrada: any = 'https://www.lyl.com.co/api/calendario';

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.calendar()
  }


  calendar() {
    return new Promise(resolve => {
      this.http.get(this.entrada).subscribe(data => {
        this.calendary = data[0];
        for (let item of Object.keys(this.calendary)) {
          if (this.calendary[item].imagen) {
            this.calendary[item].imagen = 'https://www.lyl.com.co' + this.calendary[item].imagen
          }
        }
        console.log(this.calendary)
      }, err => {
        console.log(err);
      });
    });
  }

  descripcion(item) {
    this.navCtrl.push(DescriptionPage, {
      data: item
    });
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.calendar()
      refresher.complete();
    }, 2000);
  }

}
