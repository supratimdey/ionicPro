import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import { DetailPage } from '../detail/detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any[];

  constructor(public navCtrl: NavController , public http: Http) {

    this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=30').map(
      res => res.json()).subscribe( data => {
          this.posts = data.data.children;
        }, err => { console.log("Sorry Erroer!")});

    // this.items =[];
    // for(let i =0; i < 10; i++) {
    //   this.items.push({text: 'Item '+ i,
    //   id:i });
    // }
  }

  // itemSelected(item){
  // //  alert(item.text);
  //   this.navCtrl.push(DetailPage, {
  //     item: item
  //   });
  // }
}
