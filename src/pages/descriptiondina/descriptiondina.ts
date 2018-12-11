import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-descriptiondina',
  templateUrl: 'descriptiondina.html',
})
export class DescriptiondinaPage {

  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('data');
    console.log(this.data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptiondinaPage');
  }

}
