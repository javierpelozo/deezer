import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Canciones } from '../canciones/canciones';
import { DeezerService } from '../../providers/deezer-service';

@IonicPage()
@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
  providers: [ DeezerService ]
})
export class Playlists {
  public user: number;
  public playlists: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ds: DeezerService
    ) {
      this.user = this.navParams.get('user');
      this.playlists = [];
  }

  goToCanciones(playlist){
    this.navCtrl.push(Canciones, { playlist: playlist });
  }

  ionViewDidLoad() {
    this.ds.getUserPlaylists(this.user).subscribe( data => {
      this.playlists = data.data;
    })
  }

}