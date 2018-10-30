import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CircleProperty } from '../../constant/app-constant';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  circle_properties: CircleProperty[] = [
    new CircleProperty("1番"),
    new CircleProperty("2番"),
    new CircleProperty("3番"),
    new CircleProperty("4番")
  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
  }

}
