import { Http, Headers, RequestOptions } from '@angular/http';
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
import { SrvConfig } from '../../providers/srvConfig';
import { IUser } from '../../models/user';


@Component({
  selector: 'page-configuration',
  templateUrl: 'configuration.html',
  providers: [ SrvGeneral,SrvConfig ]
})

export class ConfigurationPage {
  lstData: any;
  formConfig: FormGroup;
  config: IConfig = {} as any;
  valeur: number;
  user: IUser = {} as any;

  constructor( 
    private http: Http, 
    private navCtrl: NavController, 
    private events: Events,
    private srvGeneral: SrvGeneral,
    private srvConfig:SrvConfig,
    private formBuilder: FormBuilder, 
    private translate: TranslateService,
    private ref: ChangeDetectorRef,
    ) {
      
      this.initConfig();
  }

  public validateConfig = ( formConfig ): void => {  
    if(this.formConfig.valid){ 
      var conf = <IConfig>new Object();
      conf.unite=Number.parseInt(this.formConfig.get('unite').value);
      conf.correctionJour=Number.parseInt(this.formConfig.get('correctionJour').value);
      conf.correctionNuit=Number.parseInt(this.formConfig.get('correctionNuit').value);
      conf.hdc1=Number.parseInt(this.formConfig.get('hdc1').value);
      conf.hdc2=Number.parseInt(this.formConfig.get('hdc2').value);
      conf.hdc3=Number.parseInt(this.formConfig.get('hdc3').value);
      conf.hdc4=Number.parseInt(this.formConfig.get('hdc4').value);
      conf.hdc5=Number.parseInt(this.formConfig.get('hdc5').value);
      conf.hdc6=Number.parseInt(this.formConfig.get('hdc6').value);
      conf.unite1=Number.parseInt(this.formConfig.get('unite1').value);
      conf.unite2=Number.parseInt(this.formConfig.get('unite2').value);
      conf.unite3=Number.parseInt(this.formConfig.get('unite3').value);
      conf.unite4=Number.parseInt(this.formConfig.get('unite4').value);
      conf.unite5=Number.parseInt(this.formConfig.get('unite5').value);
      conf.unite6=Number.parseInt(this.formConfig.get('unite6').value);
      conf.dureeAction=Number.parseInt(this.formConfig.get('dureeAction').value);
      conf.valeur=Number.parseInt(this.formConfig.get('valeur').value);
      conf.idUti=0; 
      this.srvConfig.setConfigurationProfil(conf);
    }
  } 

  private initConfig = (): void => {
    this.config = JSON.parse(localStorage.getItem("Config"));
    var confStr=JSON.stringify(this.config);
    this.formConfig = new FormGroup({ 
        unite: new FormControl(this.config==null || confStr=="[]"  ? "" : this.config[0].unite, Validators.required),
    
        valeur: new FormControl(this.config==null || confStr=="[]" ? "" : this.config[0].valeur, Validators.required),
        correctionJour: new FormControl(this.config==null || confStr=="[]"  ? "" : this.config[0].correctionJour, Validators.required),
        correctionNuit: new FormControl(this.config==null || confStr=="[]"  ? "" : this.config[0].correctionNuit, Validators.required),
        dureeAction: new FormControl(this.config==null || confStr=="[]" ? "" : this.config[0].dureeAction, Validators.required),
    
        unite1: new FormControl(this.config==null || confStr=="[]"  ? "" : this.config[0].unite1, Validators.required),
        hdc1: new FormControl(this.config==null || confStr=="[]"  ? "" : this.config[0].hdc1, Validators.required),
        unite2: new FormControl(this.config==null  || confStr=="[]"  ? "" : this.config[0].unite2, Validators.required),
        hdc2: new FormControl(this.config==null || confStr=="[]"  ? "" : this.config[0].hdc2, Validators.required),
        unite3: new FormControl(this.config==null || confStr=="[]"  ? "" : this.config[0].unite3, Validators.required),
        hdc3: new FormControl(this.config==null || confStr=="[]" ? "" : this.config[0].hdc3, Validators.required),
        unite4: new FormControl(this.config==null || confStr=="[]"  ? "" : this.config[0].unite4, Validators.required),
        hdc4: new FormControl(this.config==null || confStr=="[]" ? "" : this.config[0].hdc4, Validators.required),
        unite5: new FormControl(this.config==null || confStr=="[]"  ? "" : this.config[0].unite5, Validators.required),
        hdc5: new FormControl(this.config==null || confStr=="[]"  ? "" : this.config[0].hdc5, Validators.required),
        unite6: new FormControl(this.config==null || confStr=="[]"  ? "" : this.config[0].unite6, Validators.required),
        hdc6: new FormControl(this.config==null || confStr=="[]"  ? "" : this.config[0].hdc6, Validators.required)
    });
  }

  public goHome = ( ): void => {
    this.navCtrl.setRoot( HomePage );
//    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }
  
  
}
