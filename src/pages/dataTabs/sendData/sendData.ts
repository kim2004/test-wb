import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

import { HomePage } from '../../../pages/home/home';
import { SrvData } from '../../../providers/srvData';
import { SrvHttp } from '../../../providers/srvHttp';
import { SrvGeneral } from '../../../providers/srvGeneral';


@Component({
  selector: 'page-sendData',
  templateUrl: 'sendData.html',
  providers: [SrvGeneral]
})

export class SendDataPage {
  mail: string;
  formSendMail: FormGroup;

  constructor( 
    private http: Http,
    private srvData: SrvData,
    private srvHttp: SrvHttp,
    private navCtrl: NavController,
    private srvGeneral: SrvGeneral,
    private translate: TranslateService ) {

      this.validateSendMail(false, null);
  }

  private validateSendMail = ( validation, frmSendMail ): void => {
    if(validation){
      if(this.formSendMail.valid){       
        localStorage.setItem("mailTranfert", frmSendMail.mail);   
        this.srvData.sendDataMail(frmSendMail.mail);
      }
      else {
        this.srvGeneral.setMessage(this.translate.instant("msg.adresseEmailInvalide"));
      }
    }
    else {
      this.mail = localStorage.getItem("mailTranfert");    
      this.formSendMail = new FormGroup({        
          mail: new FormControl(this.mail==null ? "" : this.mail, Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),            
      });
    }
  }

  public goHome = ( ): void => {
//    this.navCtrl.push( HomePage, {}, {direction: 'back'} );
    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }


}
