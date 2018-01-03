import { Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { TranslateService } from '@ngx-translate/core';
import { Headers, RequestOptions } from '@angular/http';
import { NavController, Tabs, App } from 'ionic-angular';

import { IData } from '../../../models/data';
import { SrvData } from '../../../providers/srvData';
import { SrvGeneral } from '../../../providers/srvGeneral';
import { IUser } from '../../../models/user';
import { SrvHttp } from '../../../providers/srvHttp';





@Component({
  selector: 'page-addData',
  templateUrl: 'addData.html',
  providers: [ SrvGeneral, SrvData ]
})

export class AddDataPage {  
  lstData: any;
  formData: FormGroup;
  data: IData = {} as any;
  user: IUser = {} as any;
  trancheHoraire: string = 'u1';
  repas: Array<{ value: string, text: string }> = [];
  clearNum:number;
  clearCom:string;

  

  constructor(  
    private appCtrl: App,
    private srvData: SrvData,
    private srvHttp: SrvHttp,
    private platform: Platform,
    private srvGeneral: SrvGeneral,
    private formBuilder: FormBuilder,
    private translate: TranslateService ) {
 
    this.repas = this.srvGeneral.initTrancheHoraire();
    this.trancheHoraire = this.srvGeneral.getTrancheHoraire();
    this.initForm();
  }

  public ionViewDidLoad = ( ) : void => {
    // Permet d'attendre la fin du chargement de la page et de la traduction
    this.platform.ready().then(() => {
      this.initForm();
    })
  }

  
  public insertData = () :void => {
    this.srvGeneral.setLoader(true,this.translate.instant("msg.chargement_en_cours"));
    this.user = JSON.parse(localStorage.getItem('User'));
    if(this.user && this.user.num && this.user.num.length>0){
      let headers = new Headers();
      headers.set('user', this.user.num);
      let options = new RequestOptions({ headers: headers });
  
  this.srvData.getMesDonnees( options )
  .timeout(10000) 
  .subscribe(
    data => { 
      this.appCtrl.getRootNav().setRoot(AddDataPage);
      this.srvGeneral.setLoader(false); },
    err  => { 
      this.appCtrl.getRootNav().setRoot(AddDataPage); 
      this.srvGeneral.setLoader(false);
      this.srvHttp.handleError(err);
    }
  );
    }
 }

  public validateAddData = ( formData ): void => {      
    if(this.formData.valid){ 
    this.srvData.setDataToServer(formData);
    this.clearNum=0;
    this.clearCom="";
    }
  }


  private initForm = ( ): void => {
    var curtDate: String = new Date().toISOString();
    this.formData = new FormGroup({ 
        trancheHoraire: new FormControl(this.trancheHoraire, Validators.required),
        currentDate: new FormControl(curtDate),
        nbHdc: new FormControl(""),
        glycemie: new FormControl(""),
        injection: new FormControl(""),
        commentaire: new FormControl("")
    });
  }

  
}
