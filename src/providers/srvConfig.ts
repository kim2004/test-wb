import { Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/timeout';

import { SrvHttp } from '../providers/srvHttp';


@Injectable()
export class SrvConfig {

  constructor( 
    private http: Http,
    private srvHttp: SrvHttp ) {
      
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

}
