import { Http } from '@angular/http';
import { Component, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

//import { IConfig } from '../../../models/config';
import { HomePage } from '../../../pages/home/home';


@Component({
  selector: 'page-data',
  templateUrl: 'data.html'
})


export class DataPage {  

  lstData: any;
  lstDataLocal:any;
  

  constructor( 
    private http: Http, 
    private navCtrl: NavController, 
    private formBuilder: FormBuilder ) {
 
    this.affData( );
  }

  private affData = ( ): void => {   
    this.lstData = JSON.parse(localStorage.getItem("lastData"));
  }
  private affDataL = ( ): void => {  
    this.lstDataLocal = JSON.parse(localStorage.getItem("localData"));
  }

  public isHidden = (): boolean => {
    this.lstDataLocal = JSON.parse(localStorage.getItem("localData"));
    if(this.lstDataLocal!=null || this.lstDataLocal!="[]"){
      return true;
    }
    else {
      return false;
    }
  }
 
  ionViewWillEnter() {
    this.affData();
    this.affDataL();
  }

  public goHome = ( ): void => {
    this.navCtrl.setRoot( HomePage );
//    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }

}
