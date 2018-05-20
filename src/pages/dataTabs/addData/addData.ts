import { Platform } from 'ionic-angular';
import { Component } from '@angular/core';
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
import { DataPage } from '../data/data';
import { DataTabsPage } from '../../dataTabs/dataTabs'





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
  dataTab:DataTabsPage;
  

  constructor(  
    private appCtrl: App,
    private srvData: SrvData,
    private srvHttp: SrvHttp,
    private platform: Platform,
    private srvGeneral: SrvGeneral,
    private navCtrl: NavController,
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
    
     this.dataTab = new DataTabsPage(this.appCtrl,this.srvHttp,this.srvData,this.srvGeneral,this.navCtrl,this.translate);    
    if(this.formData.valid){ 
      this.setDataToServer(formData);
      this.dataTab.refreshData();
      this.clearNum=0;
      this.clearCom="";
    }
  }

  public setDataToServer = ( formData ): void => { 

    this.data.nbHdc = Number.parseFloat(formData.nbHdc);
    this.data.glycemie = Number.parseFloat(formData.glycemie);
    this.data.injection = Number.parseFloat(formData.injection);
    this.data.dateInj = formData.currentDate.substring(0,10);
    this.data.timeInj = formData.currentDate.substring(11,16);
    this.data.commentaire = formData.commentaire;
    this.data.commentaire = this.data.commentaire.replace(/"/g, "'");
    this.data.glycemieAuto = 0;
    this.data.glycemieCapteur = 0;
    var tranche=formData.trancheHoraire;
    var numRepas:number;
    if (tranche==="u1"){
      numRepas=1;
    }
    else if (tranche==="u2"){
      numRepas=2;
    }
    else if (tranche==="u3"){
      numRepas=3;
    }
    else if (tranche==="u4"){
      numRepas=4;
    }
    else if (tranche==="u5"){
      numRepas=5;
    }
    else if (tranche==="u6"){
      numRepas=6;
    }
    this.data.repas=numRepas;    

    localStorage.setItem("localData", JSON.stringify(this.srvData.dataToJson(this.data)));   
    this.srvData.saveData();
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
