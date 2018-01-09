import { Platform } from 'ionic-angular';

import { FormBuilder, AbstractControl } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { TranslateService } from '@ngx-translate/core';
import { Headers, RequestOptions } from '@angular/http';
import { NavController, Tabs, App } from 'ionic-angular';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ViewChild, Input } from '@angular/core';
import {Component, NgModule, Injectable, Inject, NgZone} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { IUserSubscription } from '../../models/userSubscription';
import { SrvData } from '../../providers/srvData';
import { SrvInscription } from '../../providers/srvInscription';
import { SrvGeneral } from '../../providers/srvGeneral';
import { IUser } from '../../models/user';
import { SrvHttp } from '../../providers/srvHttp';
import { HomePage } from '../../pages/home/home';import { IonicApp } from 'ionic-angular/components/app/app-root';
import { IonicModule, IonicPageModule } from 'ionic-angular/module';
import {captcha} from ''

export declare var grecaptcha: any;

@Component({
  selector: 'page-subscription',
  templateUrl: 'subscription.html',
  providers: [ SrvGeneral, SrvData ,SrvInscription ]
})


export class SubscriptionPage {  

  lstData: any;
  lstDataLocal:any;
  appelation: Array<{value:string,text: string}> = [];
  formUser: FormGroup;
  formHash: FormGroup;
  clearName:string="";
  clearNameP:string="";
  clearNameM:string="";
  clearNameN:string="";
  clear:boolean=false;
  genred:string="m";
  user:IUser=null;
  captch:number=0;
  etat :boolean=false;
  src:string=null;
  val:number=0;

  constructor( 
    private appCtrl: App,
    private platform: Platform,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private srvGeneral : SrvGeneral,
    private srvInscription :SrvInscription,
    private zone: NgZone
  ) {
    
    this.appelation=this.initAppelation();
    this.initForm();
    this.genred="m";

    this.src=this.generateCaptcha();
  }

  public ionViewDidLoad = ( ) : void => {
    this.src=this.generateCaptcha();
  }

  
 
  public generateCaptcha = function(){
    var title="assets/img/captcha/captcha_";
    var min = Math.ceil(1);
    var max = Math.floor(8);
    var num= Math.floor(Math.random() * (max - min +1)) + min;
    switch (num) {
      case 1:
          this.val = 4;
          break;
      case 2:
          this.val = 6;
          break;
      case 3:
          this.val = 8;
          break;
      case 4:
          this.val = 10;
          break;
      case 5:
          this.val = 5;
          break;
      case 6:
          this.val = 1;
          break;
      case 7:
          this.val=3;
          break;
      case 8:
          this.val=5;
          break;
    }
    return title+num+".png";
  }
  

 

  public  initAppelation= function() {
    var mon:string = "M.";
    var mad:string = "Mme.";
    this.appelation.push({value:"m",text:mon});
    this.appelation.push({value:"f",text:mad});
    return this.appelation;
  } 
  
 

  public validateAddUser = ( formUser ): void => { 
    var appelServlet=false;
    var userInsc = <IUserSubscription>new Object();
    if(this.formUser.valid){
      var prenom=this.formUser.get("prenom").value;
      var nom=this.formUser.get("nom").value;
      var mail=this.formUser.get("mail").value;
      var mdp=this.formUser.get("mdp").value;
      var mdp2=this.formUser.get("mdp2").value;
      var code=this.formUser.get("code").value;
      if(prenom==""){
        this.srvGeneral.setMessage(this.translate.instant("msg.saisiePrenom"));
      }
      else if(nom==""){
        this.srvGeneral.setMessage(this.translate.instant("msg.saisieNom"));
      }
      else if(mail==""){
        this.srvGeneral.setMessage(this.translate.instant("msg.saisieMail"));
      }
      else if(mdp==""){
        this.srvGeneral.setMessage(this.translate.instant("msg.saisieMotdepasse"));
      }
      else if(mdp2==""){
        this.srvGeneral.setMessage(this.translate.instant("msg.saisieMotdepasse"));
      }else if (this.val!=code){
        this.srvGeneral.setMessage(this.translate.instant("msg.codeCaptcha"));
      }
      else {
          this.user=JSON.parse(localStorage.getItem("user"));
          if(this.user && this.user.num && this.user.num.length>0){
          if (this.formUser.get("case").value==false){
            this.srvGeneral.setMessage(this.translate.instant("msg.valideConditionUtilisation"));
          }
          else if (this.srvInscription.isValidEmailAddress(mail)){
            userInsc.actif=0;
            userInsc.mail=mail;
            userInsc.mdp=mdp;
            userInsc.nom=nom;
            userInsc.prenom=prenom;
            userInsc.sexe=(this.formUser.get("genred").value=="m"?0:1);
            userInsc.typeAcces=1;
            Cookie.set('email',mail);
            //this.srvInscription.createUser(this.userInsc);
          }
        }
        else{
          if (mdp!==mdp2) {
            this.srvGeneral.setMessage(this.translate.instant('msg.saisieMotdepasseDifferent'));
          }
          else if(mdp.length<5) {
          this.srvGeneral.setMessage(this.translate.instant('msg.saisieMinimumCar'));
           }
           else if(this.formUser.get("case").value==false) {
          this.srvGeneral.setMessage(this.translate.instant('msg.valideConditionUtilisation'));
          }
          else if (this.formUser.get("code").value==""){
            this.srvGeneral.setMessage(this.translate.instant('msg.codeCaptcha'));
          }
          else if (this.srvInscription.isValidEmailAddress(mail)){
          userInsc.actif=0;
          userInsc.mail=mail;
          userInsc.mdp=mdp;
          userInsc.nom=nom;
          userInsc.prenom=prenom;
          userInsc.sexe=(this.formUser.get("genred").value=="m"?0:1);
          userInsc.typeAcces=1;
          Cookie.set('email',mail);
          this.srvInscription.inscription(userInsc);
          this.clearName="";
          this.clear=false;
          
            }
        } 
      } 
    }
  }
  

  public nospaceValidator(control: AbstractControl): { [s: string]: boolean } {
    let re = / /;
    if (control.value && control.value.match(re)) {
      return { nospace: true };
    }
  }

  public goHome = ( ): void => {
    this.appCtrl.getRootNav().setRoot( HomePage );
//    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }

  private initForm = ( ): void => {
    var user = <IUser>new Object();
    user=JSON.parse(localStorage.getItem("User"));
    this.formUser = new FormGroup({ 
        genred : new FormControl(user==null?this.genred:(user.sexe==1)?this.genred:"f",Validators.required),
        prenom: new FormControl("",Validators.compose([Validators.required, this.nospaceValidator])),
        nom: new FormControl("",Validators.compose([Validators.required, this.nospaceValidator])),
        mail: new FormControl("",Validators.compose([Validators.required, this.nospaceValidator])),
        mdp: new FormControl("",Validators.compose([Validators.required, this.nospaceValidator])),
        mdp2: new FormControl("",Validators.compose([Validators.required, this.nospaceValidator])),
        code:new FormControl("",Validators.compose([Validators.required, this.nospaceValidator])),
        case : new FormControl(false)
    });
  this.clearNameM=user.mail;
  this.clearNameN=user.nom;
  this.clearNameP=user.prenom;
  }

  

}
