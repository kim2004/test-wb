import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { IUser } from '../models/user';
import { SrvHttp } from '../providers/srvHttp';

import { SrvData } from '../providers/srvData';
import { SrvConfig } from '../providers/srvConfig';
import { SrvAliment } from '../providers/srvAliment';
import { SrvInscription } from '../providers/srvInscription';
import { IAlimentAdd } from '../models/addAliment';
import { IUserSubscription } from '../models/userSubscription';

 
@Injectable()
export class SrvInit {
  user: IUser = {} as any;
  lstAlimentAdd : IAlimentAdd[] = {} as any;
 
  constructor( 
    private http: Http,
    private srvHttp: SrvHttp,
    private srvData: SrvData,
    private srvConfig: SrvConfig,
    private srvAliment: SrvAliment,
    private srvInscription:SrvInscription ) {
  }
   
  public initStorageAliment = ( ): void => {

    this.srvAliment.getAliments();
    this.srvAliment.getImagesAliments();
    this.lstAlimentAdd=localStorage.getItem("addAliment")!=null && localStorage.getItem('addAliment').toString()!='[]'? JSON.parse(localStorage.getItem("addAliment")):'';
    if ( this.lstAlimentAdd!=null && this.lstAlimentAdd!=[] ) {
      if (this.lstAlimentAdd.length>1){
        this.lstAlimentAdd.forEach(element => {
          var mnObject= <IAlimentAdd> new Object;
          mnObject.file=element.file;
          mnObject.name=element.name;
          mnObject.nbHdc=element.nbHdc;
          mnObject.unite=element.unite; 
          this.srvAliment.upload(mnObject.file,mnObject.name,mnObject.nbHdc,mnObject.unite); 
        });
        /*for (var i = 0; i < this.lstAlimentAdd.length; i++) { 
          var mnObject= <IAlimentAdd> new Object;
          mnObject.file=this.lstAlimentAdd[i].file;
          mnObject.name=this.lstAlimentAdd[i].name;
          mnObject.nbHdc=this.lstAlimentAdd[i].nbHdc;
          mnObject.unite=this.lstAlimentAdd[i].unite;  
          this.srvAliment.upload(mnObject.file,mnObject.name,mnObject.nbHdc,mnObject.unite,1); 
        }*/
            this.lstAlimentAdd=[];
            localStorage.setItem("addAliment","[]");
          
      }else if (this.lstAlimentAdd.length>0){
        this.srvAliment.upload(this.lstAlimentAdd[0].file,this.lstAlimentAdd[0].name,this.lstAlimentAdd[0].nbHdc,this.lstAlimentAdd[0].unite);
        localStorage.setItem("addAliment","[]");
        this.lstAlimentAdd=[];
      }
    }
    var mnObject= <IUserSubscription> new Object;
    mnObject=localStorage.getItem("ModificationUser")==null?null:JSON.parse(localStorage.getItem("ModificationUser"));
    mnObject==null?null:this.srvInscription.modifierUser(mnObject);
      // Gestion des Favoris
      this.user = JSON.parse(localStorage.getItem('User'));   
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
        localStorage.getItem("localData")!=null && localStorage.getItem('localData').toString()!='[]'? this.srvData.storeData(false):'';   
      }             
  }

}