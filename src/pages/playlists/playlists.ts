import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Canciones } from '../canciones/canciones'

@IonicPage()
@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
})
export class Playlists {
  public userID: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.userID = this.navParams.get('userID');
      console.log(this.userID);
  }

  goToCanciones(playlistID){
    this.navCtrl.push(Canciones, { playlistID: playlistID });
    console.log(playlistID);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad Playlists');
  }

}
