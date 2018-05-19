import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/timeout';
import { TranslateService } from '@ngx-translate/core';

import { SrvHttp } from '../providers/srvHttp';
import { SrvGeneral } from '../providers/srvGeneral';
import { IConfig } from '../models/config';
import { IUser } from '../models/user';

@Injectable()
export class SrvConfig {

  user: IUser = {} as any;
  
  constructor( 
    private http: Http,
    private srvHttp: SrvHttp,
    private srvGeneral :SrvGeneral,
    private translate : TranslateService ) {
      
  }
  public listConfig = function () {
    var wd=localStorage.getItem("Config");
    if (wd!=null && wd.length!==0) {       
        return  JSON.parse(localStorage.getItem("Config"));
    }
    else {
        return localStorage.setItem("Config", "[]");
    }
  }

  public getConfiguration = ( options: RequestOptions ): any => {
     this.http.get( this.srvHttp.SERVER_URL + this.srvHttp.urlProfil, options)
          .timeout(10000)
          .map(res => {                
            localStorage.setItem("Config", JSON.stringify(res.json()));                                                   
            return res.json();
          })
          .subscribe(data => (data), (err) => (console.log("Delay exceeded !")));   
  }

  public setConfigurationProfil=(profil:IConfig):any =>{
    this.user = JSON.parse(localStorage.getItem('User'));   
    if(this.user && this.user.num && this.user.num.length>0){
      let headers = new Headers();
      headers.set('user', this.user.num);
      headers.append("Accept", 'application/x-www-form-urlencoded');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      let options = new RequestOptions({ headers: headers });
      var storeData = [];
      storeData.push(profil);
      localStorage.setItem("Config",JSON.stringify(storeData));
      let params ="n="+JSON.stringify(storeData);

      this.http.post(this.srvHttp.SERVER_URL+this.srvHttp.urlProfil,params,options)
        .timeout(10000)
        .subscribe(data=>{this.srvGeneral.setMessage(this.translate.instant("msg.config.enrogOk"));  },(err)=>(console.log("Delay exceeded")));
    }
  }

}
