import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController,Events } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { ChangeDetectorRef } from '@angular/core';

import { IConfig } from '../../models/config';
import { HomePage } from '../../pages/home/home';
import { SrvGeneral } from '../../providers/srvGeneral';


@Component({
  selector: 'page-configuration',
  templateUrl: 'configuration.html',
  providers: [ SrvGeneral ]
})

export class ConfigurationPage {
  lstData: any;
  formConfig: FormGroup;
  config: IConfig = {} as any;
  valeur: number;
  

  constructor( 
    private http: Http, 
    private navCtrl: NavController, 
    private events: Events,
    private srvGeneral: SrvGeneral,
    private formBuilder: FormBuilder, 
    private translate: TranslateService,
    private ref: ChangeDetectorRef ) {
      this.translate = translate;
      this.initConfig( );
  }

  public validateConfig = ( formConfig ): void => {  
    if(this.formConfig.valid){ 
      this.srvGeneral.setMessage("Validation !!!");
    }
  } 

  private initConfig = ( ): void => {
    this.config = JSON.parse(localStorage.getItem("Config"));       
    this.formConfig = new FormGroup({ 
        unite: new FormControl(this.config==null ? "" : this.config[0].unite, Validators.required),
    
        valeur: new FormControl(this.config==null ? "" : this.config[0].valeur, Validators.required),
        correctionJour: new FormControl(this.config==null ? "" : this.config[0].correctionJour, Validators.required),
        correctionNuit: new FormControl(this.config==null ? "" : this.config[0].correctionNuit, Validators.required),
        dureeAction: new FormControl(this.config==null ? "" : this.config[0].dureeAction, Validators.required),
    
        unite1: new FormControl(this.config==null ? "" : this.config[0].unite1, Validators.required),
        hdc1: new FormControl(this.config==null ? "" : this.config[0].hdc1, Validators.required),
        unite2: new FormControl(this.config==null ? "" : this.config[0].unite2, Validators.required),
        hdc2: new FormControl(this.config==null ? "" : this.config[0].hdc2, Validators.required),
        unite3: new FormControl(this.config==null ? "" : this.config[0].unite3, Validators.required),
        hdc3: new FormControl(this.config==null ? "" : this.config[0].hdc3, Validators.required),
        unite4: new FormControl(this.config==null ? "" : this.config[0].unite4, Validators.required),
        hdc4: new FormControl(this.config==null ? "" : this.config[0].hdc4, Validators.required),
        unite5: new FormControl(this.config==null ? "" : this.config[0].unite5, Validators.required),
        hdc5: new FormControl(this.config==null ? "" : this.config[0].hdc5, Validators.required),
        unite6: new FormControl(this.config==null ? "" : this.config[0].unite6, Validators.required),
        hdc6: new FormControl(this.config==null ? "" : this.config[0].hdc6, Validators.required)
    });
  }

  public goHome = ( ): void => {
    this.navCtrl.setRoot( HomePage );
//    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }
  
  
}
