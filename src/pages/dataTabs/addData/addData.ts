import { Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

import { IData } from '../../../models/data';
import { SrvData } from '../../../providers/srvData';
import { SrvGeneral } from '../../../providers/srvGeneral';


@Component({
  selector: 'page-addData',
  templateUrl: 'addData.html',
  providers: [ SrvGeneral, SrvData ]
})

export class AddDataPage {  
  lstData: any;
  formData: FormGroup;
  data: IData = {} as any;
  trancheHoraire: string = 'u1';
  repas: Array<{ value: string, text: string }> = [];


  constructor(  
    private srvData: SrvData,
    private platform: Platform,
    private srvGeneral: SrvGeneral,
    private formBuilder: FormBuilder ) {
 
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

  public validateAddData = ( formData ): void => {      
    if(this.formData.valid){ 
      this.srvData.setDataToServer(formData);
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
