import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
})
export class Canciones {

  public playlistID: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.playlistID = this.navParams.get('playlistID');
      console.log(this.playlistID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Canciones');
  }

}
