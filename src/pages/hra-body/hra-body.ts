import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HraBodyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hra-body',
  templateUrl: 'hra-body.html',
})
export class HraBodyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  account: { pounds:number, inches: number,avarage:any } = {
    pounds: 150,
    inches: 38,
    avarage: 'Daily'
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad HraBodyPage');
  }

}
