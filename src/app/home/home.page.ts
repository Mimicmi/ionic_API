import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Plugins, Network } from '@capacitor/core';
const { Geolocation } = Plugins;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) { }



  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
  }

  async getNetwork() {
    const status = await Network.getStatus();
    console.log('Network Status', status);
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.getCurrentPosition();
    this.getNetwork();

    const URL = 'https://api.chucknorris.io/jokes/random';
    this.http.get(URL)
      .subscribe((data) => {
        console.log(data);
        return this.http.get(URL);
      });
  }
}
