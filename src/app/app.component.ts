import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Platform, MenuController, Nav, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
//import {Cookie} from 'ng2-cookies/ng2-cookies';
import { IUser } from '../models/user';

import { HomePage } from '../pages/home/home';
import { SrvHttp } from '../providers/srvHttp';
import { SrvAuth } from '../providers/srvAuth';
import { SrvInit } from '../providers/srvInit';
import { LoginPage } from '../pages/login/login';
import { LanguePage } from '../pages/langue/langue';
import { InformationPage } from '../pages/information/information';
import { ConfigurationPage } from '../pages/configuration/configuration';
import { ChangePasswordPage } from '../pages/changePassword/changePassword';
import { SubscriptionPage } from '../pages/Inscription/subscription';


@Component({
  templateUrl: 'app.html',
  providers: [ SrvHttp, SrvAuth, TranslateService ]
})
export class webDia {
  @ViewChild(Nav) nav: Nav;

  user: IUser = {} as any;

  // make HomePage the root (or first) page
  rootPage: any = HomePage;
  menuConnect: Array<{ title: string, component: any, icon: string, function: boolean }>;
  menuDisconnect: Array<{ title: string, component: any, icon: string, function: boolean }>;

  constructor(
    private events: Events,
    private srvHttp: SrvHttp, 
    private srvInit: SrvInit,    
    private srvAuth: SrvAuth,
    private keyboard: Keyboard,
    private platform: Platform,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    private splashScreen: SplashScreen,
    private translate: TranslateService ) {
    
      this.initializeApp();

      //Initialiser le cookie Access
      if (localStorage.getItem('access')==null){
        localStorage.setItem('access','0');
      }

      //initialize ng2-translate
      this.initTranslation();   

      // Init Menu
      this.initMenu();

      // Init LocalStorage
      this.srvInit.initStorageAliment();
      

      // Events appelé dans langue.ts lors du changement de langue
      this.events.subscribe('changeMenuLanguage', () => {
        this.initMenu( );        
      });

  }

  private initMenu = ( ): void =>  {

    /*
    <button ion-button color="primary">Secondary</button>
    <button ion-button color="secondary">Secondary</button>
    <button ion-button color="danger">Danger</button>
    <button ion-button color="light">Light</button>
    <button ion-button color="dark">Dark</button>
    */

    this.translate.get("menu.information").subscribe(
      value => {          
          this.menuConnect = [
            { title: this.translate.instant("menu.deconnexion"), component: 'deconnexion', icon: 'ion-ios-deconnexion', function: true },
            { title: this.translate.instant("menu.information"), component: InformationPage, icon: '', function: false },
            { title: this.translate.instant("msg.connexion.utilisateur"), component: SubscriptionPage, icon: '', function: false },
            { title: this.translate.instant("menu.configuration"), component: ConfigurationPage, icon: '', function: false },
            { title: this.translate.instant("menu.chPassword"), component: ChangePasswordPage, icon: '', function: false },
            { title: this.translate.instant("menu.langue"), component: LanguePage, icon: '', function: false }
          ];

          this.menuDisconnect = [
            { title: this.translate.instant("menu.connexion"), component: LoginPage, icon: 'ion-ios-connexion', function: false },
            { title: this.translate.instant("menu.information"), component: InformationPage, icon: '', function: false }, 
            { title: this.translate.instant("menu.configuration"), component: ConfigurationPage, icon: '', function: false },
            { title: this.translate.instant("menu.langue"), component: LanguePage, icon: '', function: false }
          ];

//          this.menuCtrl.enable(true, 'menuConnect');
//          this.menuCtrl.enable(false, 'menuDisconnect');
      }
    )          
  }

  private initializeApp = ( ): void =>  {
    this.platform.ready().then(() => {
      
      this.keyboard.onKeyboardShow().subscribe(() => {
        document.body.classList.add('keyboard-open');
      });

      this.keyboard.onKeyboardHide().subscribe(() => {
        document.body.classList.remove('keyboard-open');
      });

      this.statusBar.styleDefault();
      this.splashScreen.hide();     
    });
  }

  private deconnexion = ( ): void =>  {
    this.srvAuth.deconnexion()
        .timeout(10000)
        .subscribe(
            data => {
              localStorage.removeItem('User');
              localStorage.removeItem("Config");
              localStorage.removeItem("localData");
              localStorage.removeItem("lastData");
              localStorage.removeItem("mesRepas");  

              // affiche le menu disconnect
              this.menuCtrl.enable(false, 'menuConnect');
              this.menuCtrl.enable(true, 'menuDisconnect');     
            },
            err  => {
              this.srvHttp.handleError(err)
            }
        ); 
        this.nav.setRoot(HomePage);             
  }

  public openMenuPage = ( page ): void =>  {
    // close the menu when clicking a link from the menu
    this.menuCtrl.close();
    if(page.function){
      if(page.component === 'deconnexion') {
        this.deconnexion();
      }
    }
    else {
      // navigate to the new page if it is not the current page
      this.nav.setRoot(page.component);
    }
  }

 
  private initTranslation = ( ): void =>  {
    var langue = localStorage.getItem("langue");  

    if (langue!=null){
      this.translate.use(langue);
    }
    else {
      var userLang = navigator.language.split('-')[0]; // use navigator lang if available
      userLang = /(fr|en|de)/gi.test(userLang) ? userLang : 'fr';
      // this language will be used as a fallback when a translation isn't found in the current language
      this.translate.setDefaultLang('fr');
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      this.translate.use(userLang);
      localStorage.setItem("langue",userLang);     
    }
  }
  
}
