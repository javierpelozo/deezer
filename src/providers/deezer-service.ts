import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeezerService {
  public deezerAPI: string;

  constructor(public http: Http) {
    this.deezerAPI = "/deezerAPI/";
  }

  getProfilesId(){
    this.http.get('https://api.myjson.com/bins/w076v')
    .map( res => res.json() )
    .subscribe( users => {
      console.log(users);

      users.map( userID => {
        this.getUserDetail(userID);
      });
    });
  }

  getUserDetail(userID){
    this.http.get(this.deezerAPI + 'user/' + userID)
    .map( res => res.json() )
    .subscribe( data => {
      console.log(data);
    });
  }

}