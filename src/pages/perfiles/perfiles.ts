import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Playlists } from '../playlists/playlists'

import { DeezerService } from '../../providers/deezer-service'

@IonicPage()
@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
  providers: [ DeezerService ]
})

export class Perfiles {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ds: DeezerService
    ) {

  }
  

  //Nos lleva a la pagina de playlist
  goToPlaylist(userID){
    this.navCtrl.push(Playlists, { userID: userID });
  }

  ionViewDidLoad() {
    this.ds.getProfilesId();
  }
}