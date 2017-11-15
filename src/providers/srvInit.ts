import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { IUser } from '../models/user';
import { SrvHttp } from '../providers/srvHttp';

import { SrvData } from '../providers/srvData';
import { SrvConfig } from '../providers/srvConfig';
import { SrvAliment } from '../providers/srvAliment';

 
@Injectable()
export class SrvInit {
  user: IUser = {} as any;
 
  constructor( 
    private http: Http,
    private srvHttp: SrvHttp,
    private srvData: SrvData,
    private srvConfig: SrvConfig,
    private srvAliment: SrvAliment, ) {
  }
   
  public initStorageAliment = ( ): void => {

    this.srvAliment.getAliments();
    this.srvAliment.getImagesAliments();

      // Gestion des Favoris
      this.user = JSON.parse(localStorage.getItem('User'));
console.log(this.user);      
      if(this.user && this.user.num && this.user.num.length>0){
        let headers = new Headers();
        headers.set('user', this.user.num);
        let options = new RequestOptions({ headers: headers });        

        this.srvData.getMesDonnees( options )
            .timeout(10000)   
            .subscribe(
              data => localStorage.setItem("Donnees", JSON.stringify(data.json())), 
              err => this.srvHttp.handleError(err)); 
              
        this.srvAliment.getFavoris( options );
        this.srvAliment.getMesAliments( options );   
        this.srvConfig.getConfiguration( options );  
      }             
  }

}