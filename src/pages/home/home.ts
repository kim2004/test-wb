import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController, MenuController, Events } from 'ionic-angular';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { IUser } from '../../models/user';
import { LoginPage } from '../../pages/login/login';
import { CalculPage } from '../../pages/calcul/calcul';
import { FavorisPage } from '../../pages/favoris/favoris';
import { DataTabsPage } from '../../pages/dataTabs/dataTabs';
import { AlimentTabsPage } from '../../pages/alimentTabs/alimentTabs';
import { ConfigurationPage } from '../../pages/configuration/configuration';
import { PopupPage } from '../../pages/pop/popup';
import { SubscriptionPage } from '../../pages/Inscription/subscription';

import { SrvQuantite } from '../../providers/srvQuantite';
import { SrvGeneral } from '../../providers/srvGeneral';
import { timeout } from 'rxjs/operator/timeout';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ SrvQuantite, SrvGeneral ]
})

export class HomePage {
  user: IUser = {} as any;

  loginPage = LoginPage;

  constructor( 
    private events: Events,
    private navCtrl: NavController,
    private srvQuantite: SrvQuantite,
    private srvGeneral: SrvGeneral,
    private menuCtrl: MenuController,
    private translate: TranslateService) {

      this.srvQuantite.clearRepas();

      this.user = JSON.parse(localStorage.getItem('User'));    
      if(this.user!=null && this.user.actif==1){          
        this.menuCtrl.enable(true, 'menuConnect');
        this.menuCtrl.enable(false, 'menuDisconnect');
      }
      else {      
        this.menuCtrl.enable(false, 'menuConnect');
        this.menuCtrl.enable(true, 'menuDisconnect');
        if (this.user!=null){
        this.srvGeneral.setMessage(this.translate.instant("msg.inscriptionConfirme"));
        }
      }

      if (Cookie.get('access')=='0'){
        setTimeout(() => {
            // this.navCtrl.popToRoot();
            // might try this instead
            if (Cookie.get('access')=='0'){
            this.navCtrl.setRoot(PopupPage);
            }
        }, 4500);
      }
     
  }
  
  

  public setMenu = ( page ): void => {
    if(page=='config'){
      this.navCtrl.push(ConfigurationPage);
    }
    else if (page=='aliment'){
      this.navCtrl.push(AlimentTabsPage);
    }
    else if (page=='calcul'){
      localStorage.removeItem("repas");
      this.navCtrl.push(CalculPage);
    }
    else if (page=='data'){
      this.navCtrl.push(DataTabsPage);
    }
    else if (page=='favoris'){
      this.navCtrl.push(FavorisPage);
    }  
    else if (page=='inscription'){
      this.navCtrl.push(SubscriptionPage);
    }    
    
  };

  public openPage()
  {
    this.navCtrl.setRoot(HomePage);
  }

  public isConnect = (): boolean => {
    this.user = JSON.parse(localStorage.getItem('User'));
    if(this.user!=null && this.user.actif==1){
      return true;
    }
    else {
      return false;
    }
  }
}
