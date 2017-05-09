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
  public users: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ds: DeezerService
    ) {
      this.users = [];
  }
  

  //Nos lleva a la pagina de playlist
  goToPlaylist(user){
    this.navCtrl.push(Playlists, { user: user });
  }

  ionViewDidLoad() {

    this.ds.getUsers().subscribe( usersIDs => {
      usersIDs.map( userID => {
        this.ds.getUserDetail(userID).subscribe( user => {
          this.users.push(user);
        });
      });
    });
  }
}