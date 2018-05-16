import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HomePage } from '../../pages/home/home';
import { SrvHttp } from '../../providers/srvHttp';
import { SrvAuth } from '../../providers/srvAuth';
import { SrvGeneral } from '../../providers/srvGeneral';


@Component({
  templateUrl: './changePassword.html',
  providers: [SrvHttp, SrvAuth]
})
export class ChangePasswordPage {
  oldPasswod: string = "";
  newPassword1: string = "";
  newPassword2: string = "";
  buttonDisabled = true;

  formChangePassword: FormGroup;


  constructor( 
    private srvHttp: SrvHttp, 
    private srvAuth: SrvAuth,
    private srvGeneral: SrvGeneral, 
    private navCtrl: NavController,
    private translate: TranslateService ) {

      this.formChangePassword = new FormGroup({
        oldPassword: new FormControl("", Validators.required),
        newPassword1: new FormControl("", Validators.required),
        newPassword2: new FormControl("", Validators.required)
      });

  }

  public onChangeOldPassword = ( data ): void => {   
    this.oldPasswod = data;
    if(this.oldPasswod.length>0 && this.newPassword1.length>0 && this.newPassword2.length>0){
      this.buttonDisabled = null;
    }
    else {
      this.buttonDisabled = true;
    }
  }

  public onChangeNewPassword1 = ( data ): void =>  {   
    this.newPassword1 = data;
    if(this.oldPasswod.length>0 && this.newPassword1.length>0 && this.newPassword2.length>0){
      this.buttonDisabled = null;
    }
    else {
      this.buttonDisabled = true;
    }
  }

  public onChangeNewPassword2 = ( data ): void =>  {   
    this.newPassword2 = data;
    if(this.oldPasswod.length>0 && this.newPassword1.length>0 && this.newPassword2.length>0){
      this.buttonDisabled = null;
    }
    else {
      this.buttonDisabled = true;
    }
  }

  public validateChangePassword = ( ): void =>  {
    if (this.formChangePassword.status === 'VALID') {
      if(this.formChangePassword.value.oldPassword.length == 0){
        this.srvGeneral.setMessage(this.translate.instant("msg.saisieAncienMotdepasse"));
      }     
      else if(this.formChangePassword.value.newPassword1.length < 5){
        this.srvGeneral.setMessage(this.translate.instant("msg.saisieMinimumCar"));
      }  
      else if(this.formChangePassword.value.newPassword1.length == 0){
        this.srvGeneral.setMessage(this.translate.instant("msg.saisieMotdepasse"));
      }
      else if(this.formChangePassword.value.newPassword1 != this.formChangePassword.value.newPassword2){
        this.srvGeneral.setMessage(this.translate.instant("msg.saisieMotdepasseDifferent"));
      }
      else {
        this.srvAuth.changePassword(this.formChangePassword.value.oldPassword, this.formChangePassword.value.newPassword1)
            .subscribe(
              data => {
                  this.srvGeneral.setMessage(this.translate.instant("msg.valideMotdepasseModifie"));  
                  this.goHome();       
              },
              err  => this.srvHttp.handleError(err)
            ); 
      }                
    }
  }

  public goHome = ( ): void =>  {
    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }
}
