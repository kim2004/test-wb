import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { Keyboard } from '@ionic-native/keyboard';
import { StatusBar } from '@ionic-native/status-bar';
import { NgModule, ErrorHandler } from '@angular/core';
import { Transfer } from '@ionic-native/transfer';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators}  from '@angular/forms';
import { FilePath } from '@ionic-native/file-path';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {WindowTokenModule} from 'ngx-window-token';

//import { TranslateModule } from 'ng2-translate/ng2-translate';




import { webDia } from './app.component';
import { SrvSort } from '../pipes/srvSort';
import { HomePage } from '../pages/home/home';
import { SrvHttp } from '../providers/srvHttp'; 
import { SrvInit } from '../providers/srvInit'; 
import { SrvData } from '../providers/srvData'; 
import { PopupPage } from '../pages/pop/popup';
import { SrvConfig } from '../providers/srvConfig'; 
import { LoginPage } from '../pages/login/login';
import { SrvSafeHtml } from '../pipes/srvSafeHtml';
import { LanguePage } from '../pages/langue/langue';
import { CalculPage } from '../pages/calcul/calcul';
import { SrvGeneral } from '../providers/srvGeneral'; 
import { SrvAliment } from '../providers/srvAliment'; 
import { FavorisPage } from '../pages/favoris/favoris';
import { DataPage } from '../pages/dataTabs/data/data';
import { DataTabsPage } from '../pages/dataTabs/dataTabs';
import { SrvInscription} from '../providers/srvInscription';
import { AddDataPage } from '../pages/dataTabs/addData/addData';
import { SendDataPage } from '../pages/dataTabs/sendData/sendData';
import { InformationPage } from '../pages/information/information';
import { ConfigurationPage } from '../pages/configuration/configuration';
import { ChangePasswordPage } from '../pages/changePassword/changePassword';
import { SubscriptionPage} from '../pages/Inscription/subscription'

import { AlimentTabsPage } from '../pages/alimentTabs/alimentTabs';
import { AlimentPage } from '../pages/alimentTabs/aliment/aliment';
import { QuantitePage } from '../pages/alimentTabs/quantite/quantite';
import { AjoutAlimentPage } from '../pages/alimentTabs/ajoutAliment/ajoutAliment';
import { FamilleAlimentPage } from '../pages/alimentTabs/familleAliment/familleAliment';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    webDia,
    SrvSort,
    DataPage,
    HomePage,
    LoginPage,
    LanguePage,
    CalculPage,
    SrvSafeHtml,
    FavorisPage,
    AddDataPage,
    AlimentPage,
    DataTabsPage,
    SendDataPage,
    QuantitePage,
    InformationPage,
    AlimentTabsPage,
    AjoutAlimentPage,
    ConfigurationPage,
    FamilleAlimentPage,
    ChangePasswordPage,
    PopupPage,
    SubscriptionPage,
  ],
  imports: [    
    IonicModule.forRoot( webDia, 
      {
          mode: 'md', 
          tabsPlacement: 'bottom'
      }), 
      BrowserModule, 
      HttpClientModule,
      HttpModule, 
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    webDia,
    DataPage,
    HomePage,    
    LoginPage,
    LanguePage,
    CalculPage,
    FavorisPage,
    AddDataPage,
    AlimentPage,
    DataTabsPage,
    SendDataPage,
    QuantitePage,
    InformationPage,
    AlimentTabsPage,  
    AjoutAlimentPage,
    ConfigurationPage,
    FamilleAlimentPage,
    ChangePasswordPage,
    PopupPage,
    SubscriptionPage
  ],
  providers: [
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    },
    Camera,
    Transfer,
    FilePath,
    Keyboard, 
    StatusBar, 
    SplashScreen,  
    SrvGeneral, 
    SrvAliment,
    SrvHttp,
    SrvInit,
    SrvData,
    SrvConfig,
    SrvInscription
  ]
})
export class AppModule {}
