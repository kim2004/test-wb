import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IUser } from '../../models/user';
import { HomePage } from '../../pages/home/home';
import { SrvAuth } from '../../providers/srvAuth';
import { SrvHttp } from '../../providers/srvHttp';
import { SrvInit } from '../../providers/srvInit';
import { SrvGeneral } from '../../providers/srvGeneral';


@Component({
  templateUrl: './login.html',
  providers: [SrvHttp, SrvAuth, SrvInit]
})
export class LoginPage {
  email: string = "";
  password: string = "";
  buttonDisabled = true;

  formLogin: FormGroup;
  emailSave: string ="";


  constructor( 
    private srvHttp: SrvHttp, 
    private srvAuth: SrvAuth,
    private srvInit: SrvInit,
    private srvGeneral: SrvGeneral, 
    private navCtrl: NavController,
    private translate: TranslateService ) {

      this.emailSave = localStorage.getItem('email');
      this.email = (this.emailSave==null ? "" : this.emailSave);
      this.formLogin = new FormGroup({
        email: new FormControl(this.emailSave==null ? "" : this.email, Validators.required),
        password: new FormControl("", Validators.required)
      });
  }

  

/*
  public onChangeNom = ( data ): void => {   
    this.email = data;
    if(this.email.length>0 && this.password.length>0){
      this.buttonDisabled = null;
    }
    else {
      this.buttonDisabled = true;
    }
  }
  public onChangePassword = ( data ): void => {   
    this.password = data;  
    if(this.email.length>0 && this.password.length>0){
      this.buttonDisabled = null;
    }
    else {
      this.buttonDisabled = true;
    }
  } 
*/   

  public validateLogin = ( ): void => { 
    if (this.formLogin.status === 'VALID') {
      if(this.formLogin.value.email.length == 0){
        this.srvGeneral.setMessage(this.translate.instant("msg.saisieMail"));
      }
      else if(this.formLogin.value.password.length == 0){
        this.srvGeneral.setMessage(this.translate.instant("msg.saisieMotdepasse"));
      }
      else {
        this.srvGeneral.setLoader(true,this.translate.instant("msg.chargement_en_cours")); 
        this.srvAuth.connexion(this.formLogin.value.email, this.formLogin.value.password)
//            .timeout(10000)
            .subscribe(
              data => {    
console.log(data);                                          
                if(data!=null){ 
                  localStorage.setItem("User", JSON.stringify(data.json())); 
                  localStorage.setItem("email",this.formLogin.value.email);               
                  this.srvInit.initStorageAliment();
                  this.srvGeneral.setLoader(false);
                  this.goHome();
                }
              },
              err  => {            
                this.srvGeneral.setLoader(false);
                this.srvGeneral.setMessage(this.translate.instant('msg.errorPassword'));
              }
            ); 
      }
    }
    else if(this.formLogin.value.email.length == 0){
      this.srvGeneral.setMessage(this.translate.instant("msg.saisieMail"));
    }
    else if(this.formLogin.value.password.length == 0){
      this.srvGeneral.setMessage(this.translate.instant("msg.saisieMotdepasse"));
    }
  }

  public forgetPassword = ( ): void => {  
    if(this.email!=null && this.email.length>0){
      this.srvAuth.forgetPassword(this.email)
          .subscribe(
            data => {
              this.srvGeneral.setMessage(this.translate.instant("msg.messageEnvoye"));       
            },
            err  => this.srvHttp.handleError(err)
          ); 
    } 
  }

  public goHome = ( ): void => {
//    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
    this.navCtrl.setRoot( HomePage );
  }
}
