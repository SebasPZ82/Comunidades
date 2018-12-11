import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { CalendarioPage } from '../calendario/calendario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  loginError: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    fb: FormBuilder, private http: HttpClient, private alert: AlertController, public menuCtrl: MenuController) {
    //this.menuCtrl.enable(false, 'myMenu');
    this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  login() {
    let data = this.loginForm.value;

    if (!data.email) {
      return;
    }

    let credentials = {
      username: data.email,
      password: data.password
    };

    return new Promise(resolve => {
      this.http.post('https://evadevback.lyl.com.co:8000/api/ws/evaauthservice', { username: credentials.username, password: credentials.password }, { headers: { 'Content-Type': 'application/json' } })
        .map(response => response)
        .subscribe(
          response => {
            if (response) {
              console.log(response)
              this.navCtrl.setRoot(CalendarioPage)
              resolve(response);
            } else {
              console.log(response)
              resolve(false);
            }
          }, error => {
            this.presentAlert()
            resolve(false);
          }
        );
    });
  }


  presentAlert() {
    let alert = this.alert.create({
      title: 'Error',
      subTitle: 'Error En Usuario Y Contraseña',
      buttons: ['Aceptar']
    });
    alert.present();
  }
}

