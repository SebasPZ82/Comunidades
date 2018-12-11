import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DescriptiondinaPage } from '../descriptiondina/descriptiondina';


@Component({
  selector: 'page-dina',
  templateUrl: 'dina.html',
})
export class DinaPage {

  dina: any = [];
  img: any = [];
  entrada: any = 'https://www.lyl.com.co/api/dinamizadores';

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.dinamizadores();
  }

  dinamizadores() {
    return new Promise(resolve => {
      this.http.get(this.entrada).subscribe(data => {
        console.log(data[0])
        this.dina = data[0];
        for (let item of Object.keys(this.dina)) {
          if (this.dina[item].imagen) {
            this.dina[item].imagen = 'https://www.lyl.com.co' + this.dina[item].imagen
          }
        }
      }, err => {
        console.log(err);
      });
    });
  }

  descripcion(item) {
    this.navCtrl.push(DescriptiondinaPage, {
      data: item
    });
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.dinamizadores()
      refresher.complete();
    }, 2000);
  }

}
