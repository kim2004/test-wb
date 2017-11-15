import { Injectable } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/timeout';

import { IUser } from '../models/user';
import { SrvHttp } from '../providers/srvHttp';
 
@Injectable()
export class SrvAuth {
  user: IUser = {} as any;
 
  constructor( 
    private http: Http,
    private srvHttp: SrvHttp,
    private menuCtrl: MenuController, ) {
  }
   
  public connexion = ( email: string, password: string ): any => {
    let params = "e="+email+"&p="+password;
//    let params = { e: email, p: password };
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });  

    return this.http.post( this.srvHttp.SERVER_URL + this.srvHttp.urlConnexion, params, options);
/*       
          .timeout(10000)
          .map(res => {
            localStorage.setItem("User", JSON.stringify(res.json()));
            return res.json();
          })
*/          
  }

  public deconnexion = (): any => { 
    this.user = JSON.parse(localStorage.getItem('User'));   
    if(this.user && this.user.num && this.user.num.length>0){      
      let headers = new Headers();//{ 'Content-Type': 'application/x-www-form-urlencoded' });
      headers.set('user', this.user.num);
      let options = new RequestOptions({ headers: headers });

      return this.http.delete( this.srvHttp.SERVER_URL + this.srvHttp.urlConnexion, options );      
    }
  }
 
  public changePassword = ( oldPassword, newPassword ): any => {
    this.user = JSON.parse(localStorage.getItem('User'));
    if(this.user && this.user.num && this.user.num.length>0){
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      headers.set('user', this.user.num);
      let options = new RequestOptions({ headers: headers });

      var params = "op="+oldPassword+"&p1="+newPassword;     
      return this.http.post( this.srvHttp.SERVER_URL + this.srvHttp.urlPassword, params, options )
            .timeout(10000)
            .map(res => {return true;})
            .subscribe((err) => (this.srvHttp.handleError(err)));
    }
  }

  public forgetPassword = ( email ): any => {
    var params = "?e="+email;   
    return this.http.get( this.srvHttp.SERVER_URL + this.srvHttp.urlConnexion + params )
          .timeout(10000)
          .map(res => {return true;})
          .subscribe((err) => (this.srvHttp.handleError(err)));
  }
}