import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../../pages/home/home';


@Component({
  selector: 'page-langue',
  templateUrl: 'langue.html'
})

export class LanguePage {
  langue: any;

  constructor( 
    private events: Events,
    private navCtrl: NavController,
    private translate: TranslateService ) {

      this.navCtrl = navCtrl;
      this.translate = translate;

      this.langue = localStorage.getItem("langue");
  }

  public goHome = (): void => {
    this.navCtrl.setRoot( HomePage );
   //this.navCtrl.setRoot( HomePage, {}, { animate: true, direction: 'back' });
  }

  public changeLangue = ( langue ): void => {
    localStorage.setItem("langue", langue);
    this.translate.use(langue);
    
    // Appel EVENT 'changeMenuLanguage' dans app.components.ts
    this.events.publish('changeMenuLanguage');
  }
 
}
