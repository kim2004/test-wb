webpackJsonp([0],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvGeneral; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_index__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the Famille provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var SrvGeneral = (function () {
    function SrvGeneral(modalCtrl, toastCtrl, alertCtrl, translate, loading) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.loading = loading;
        this.setLoader = function (aff, text) {
            if (aff == true) {
                if (text == null) {
                    _this.loader = _this.loading.create();
                }
                else {
                    _this.loader = _this.loading.create({ content: text });
                }
                _this.loader.present();
            }
            else {
                _this.loader.dismiss();
            }
        };
        this.setMessage = function (text, titre, css) {
            var alert = null;
            var options = {};
            if (!titre) {
                titre = 'Information';
            }
            if (!text) {
                text = 'Information';
            }
            if (css) {
                options = {
                    title: titre,
                    subTitle: text,
                    buttons: [{
                            text: 'OK',
                            handler: function () {
                                return (localStorage.getItem('access') == '0' ? true : true);
                            }
                        }],
                    cssClass: 'alertDanger',
                    mode: 'ios',
                    enableBackdropDismiss: false
                };
            }
            else {
                options = {
                    title: titre,
                    subTitle: text,
                    buttons: [{
                            text: 'OK',
                            handler: function () {
                                return (localStorage.getItem('access') == '0' ? true : true);
                            }
                        }],
                    mode: 'ios',
                    cssClass: 'alertDanger',
                    enableBackdropDismiss: false
                };
            }
            alert = _this.alertCtrl.create(options);
            alert.present();
            alert.onDidDismiss(function (data) {
                if (data = true) {
                    localStorage.setItem('access', '1');
                }
            });
        };
        this.setMessageInjection = function (title, subTitle) {
            if (title == null || title.trim().length == 0) {
                title = 'Information';
            }
            if (subTitle == null || subTitle.trim().length == 0) {
                subTitle = '';
            }
            var alert = _this.alertCtrl.create({
                title: title,
                subTitle: subTitle,
                mode: 'ios',
                cssClass: 'alertDanger',
                buttons: ['Ok']
            });
            alert.present();
        };
        this.setMessageConfirm = function (title, message) {
            if (title == null || title.trim().length == 0) {
                title = 'Confirmation';
            }
            if (message == null || message.trim().length == 0) {
                message = '';
            }
            var alert = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [
                    { text: 'Cancel', role: 'cancel' },
                    { text: 'Ok', handler: function () { return (true); } }
                ]
            });
            alert.present();
        };
        this.initTrancheHoraire = function () {
            var repas = [];
            var langue = localStorage.getItem("langue");
            if (langue != null) {
                var u1 = _this.translate.instant("msg.petitdejeuner");
                var u2 = _this.translate.instant("msg.collation10");
                var u3 = _this.translate.instant("msg.midi");
                var u4 = _this.translate.instant("msg.collation16");
                var u5 = _this.translate.instant("msg.diner");
                var u6 = _this.translate.instant("msg.collationSoir");
            }
            repas.push({ value: 'u1', text: u1 });
            repas.push({ value: 'u2', text: u2 });
            repas.push({ value: 'u3', text: u3 });
            repas.push({ value: 'u4', text: u4 });
            repas.push({ value: 'u5', text: u5 });
            repas.push({ value: 'u6', text: u6 });
            return repas;
        };
        this.getTrancheHoraire = function () {
            var d = new Date();
            var hr = d.getHours();
            var mn = d.getMinutes();
            var tps = (hr * 60) + mn;
            if (tps > 1200) {
                return 'u6';
            } // 20h00
            else if (tps > 1080) {
                return 'u5';
            } // 18h00
            else if (tps > 970) {
                return 'u4';
            } // 14h30
            else if (tps > 690) {
                return 'u3';
            } // 11h30
            else if (tps > 570) {
                return 'u2';
            } // 9h30
            else if (tps > 390) {
                return 'u1';
            }
            else
                return 'u6'; // entre 0h00 et 6h30    
        };
        this.getTextTrancheHoraire = function (trancheHoraire) {
            var d = new Date();
            var hr = d.getHours();
            var mn = d.getMinutes();
            var tps = (hr * 60) + mn;
            if (trancheHoraire) {
                if (trancheHoraire === 'u1') {
                    return _this.translate.instant("msg.petitdejeuner");
                }
                else if (trancheHoraire === 'u2') {
                    return _this.translate.instant("msg.collation10");
                }
                else if (trancheHoraire === 'u3') {
                    return _this.translate.instant("msg.midi");
                }
                else if (trancheHoraire === 'u4') {
                    return _this.translate.instant("msg.collation16");
                }
                else if (trancheHoraire === 'u5') {
                    return _this.translate.instant("msg.diner");
                }
                else if (trancheHoraire === 'u6') {
                    return _this.translate.instant("msg.collationSoir");
                }
            }
            else {
                if (tps > 1200) {
                    return _this.translate.instant("msg.collationSoir");
                } // 20h00
                else if (tps > 1080) {
                    return _this.translate.instant("msg.diner");
                } // 18h00
                else if (tps > 970) {
                    return _this.translate.instant("msg.collation16");
                } // 14h30
                else if (tps > 690) {
                    return _this.translate.instant("msg.midi");
                } // 11h30
                else if (tps > 570) {
                    return _this.translate.instant("msg.collation10");
                } // 9h30
                else if (tps > 390) {
                    return _this.translate.instant("msg.petitdejeuner");
                }
                else
                    return 'u6'; // entre 0h00 et 6h30    
            }
        };
        this.stripVowelAccent = function (str) {
            var rExps = [
                { re: /[\xC0-\xC6]/g, ch: 'A' },
                { re: /[\xE0-\xE6]/g, ch: 'a' },
                { re: /[\xC8-\xCB]/g, ch: 'E' },
                { re: /[\xE8-\xEB]/g, ch: 'e' },
                { re: /[\xCC-\xCF]/g, ch: 'I' },
                { re: /[\xEC-\xEF]/g, ch: 'i' },
                { re: /[\xD2-\xD6]/g, ch: 'O' },
                { re: /[\xF2-\xF6]/g, ch: 'o' },
                { re: /[\xD9-\xDC]/g, ch: 'U' },
                { re: /[\xF9-\xFC]/g, ch: 'u' },
                { re: /[\xD1]/g, ch: 'N' },
                { re: /[\xF1]/g, ch: 'n' }
            ];
            for (var i = 0, len = rExps.length; i < len; i++) {
                str = str.replace(rExps[i].re, rExps[i].ch);
            }
            return str;
        };
        this.roundNumber = function (number) {
            var newnumber = new Number(number + '').toFixed(1);
            var newnumberFloat = parseFloat(newnumber);
            newnumber = newnumberFloat.toFixed(2);
            return parseFloat(newnumber);
        };
    }
    SrvGeneral.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    return SrvGeneral;
}());
SrvGeneral = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular_index__["h" /* LoadingController */]])
], SrvGeneral);

//# sourceMappingURL=srvGeneral.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_srvAuth__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvHttp__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvInit__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_srvGeneral__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(srvHttp, srvAuth, srvInit, srvGeneral, navCtrl, translate) {
        var _this = this;
        this.srvHttp = srvHttp;
        this.srvAuth = srvAuth;
        this.srvInit = srvInit;
        this.srvGeneral = srvGeneral;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.email = "";
        this.password = "";
        this.buttonDisabled = true;
        this.user = {};
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
        this.validateLogin = function () {
            if (_this.formLogin.status === 'VALID') {
                if (_this.formLogin.value.email.length == 0) {
                    _this.srvGeneral.setMessage(_this.translate.instant("msg.saisieMail"));
                }
                else if (_this.formLogin.value.password.length == 0) {
                    _this.srvGeneral.setMessage(_this.translate.instant("msg.saisieMotdepasse"));
                }
                else {
                    _this.srvGeneral.setLoader(true, _this.translate.instant("msg.chargement_en_cours"));
                    _this.srvAuth.connexion(_this.formLogin.value.email, _this.formLogin.value.password)
                        .timeout(10000)
                        .subscribe(function (data) {
                        if (data != null) {
                            localStorage.setItem("User", JSON.stringify(data.json()));
                            _this.srvInit.initStorageAliment();
                            _this.srvGeneral.setLoader(false);
                            _this.goHome();
                        }
                    }, function (err) {
                        _this.srvGeneral.setLoader(false);
                        _this.srvHttp.handleError(err);
                    });
                }
            }
            else if (_this.formLogin.value.email.length == 0) {
                _this.srvGeneral.setMessage(_this.translate.instant("msg.saisieMail"));
            }
            else if (_this.formLogin.value.password.length == 0) {
                _this.srvGeneral.setMessage(_this.translate.instant("msg.saisieMotdepasse"));
            }
        };
        this.forgetPassword = function () {
            if (_this.email != null && _this.email.length > 0) {
                _this.srvAuth.forgetPassword(_this.email)
                    .subscribe(function (data) {
                    _this.srvGeneral.setMessage(_this.translate.instant("msg.messageEnvoye"));
                }, function (err) { return _this.srvHttp.handleError(err); });
            }
        };
        this.goHome = function () {
            //    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        };
        this.user = JSON.parse(localStorage.getItem('User'));
        this.email = (this.user == null ? "" : this.user.mail);
        this.formLogin = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.user == null ? "" : this.user.mail, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required)
        });
    }
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/login/login.html"*/'<ion-header center align-title="center">\n  <ion-navbar center align-title="center" hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon class="ion-ios-home"></ion-icon>  \n      </button>\n    </ion-buttons>\n    <ion-title>\n        <div class="title left" style="padding-top: 10px;">\n          <img alt="webDia" src="assets/img/logoNew_hug.png" height="30">&nbsp;&nbsp;<span style="position:absolute; top: 7px"></span>\n        </div> \n      </ion-title>\n      <ion-buttons right>\n          <button ion-button menuToggle>\n            <ion-icon class="ion-ios-menu"></ion-icon>\n          </button>\n        </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-color-login" no-lines>\n\n  <ion-title class=""><font color="#008cba" size="5rem">Connexion</font></ion-title>\n  <form (submit)="validateLogin()" [formGroup]="formLogin">\n\n    <ion-list>\n        <ion-grid >\n            <ion-row width-90 >  \n              <ion-col width-90 >\n      <ion-item text-input-md-highlight-color-invalid >\n<!--        <ion-input formControlName="email" autofocus type="text" placeholder=\'{{"msg.inscription.email"|translate}}\' (keyup)="onChangeNom($event.target.value)"></ion-input>-->\n        <ion-input text-input-md-highlight-color-invalid formControlName="email" autofocus type="text" placeholder=\'{{"msg.inscription.email"|translate}}\'></ion-input>\n      </ion-item>\n      <br>\n      <ion-item text-input-md-highlight-color-invalid>\n<!--        <ion-input formControlName="password" type="password" placeholder=\'{{"msg.connexion.mot_de_passe"|translate}}\' (keyup)="onChangePassword($event.target.value)"></ion-input>-->\n        <ion-input text-input-md-highlight-color-invalid formControlName="password" type="password" placeholder=\'{{"msg.connexion.mot_de_passe"|translate}}\'></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n      <ion-grid style="background-color:transparent;">\n        <ion-row width-90 style="background-color:transparent;">  \n          <ion-col width-90 style="background-color:transparent;">\n              <button ion-button block text-left color="dark"  round (click)="forgetPassword()">{{"frm.login.oublieMotdepasse"|translate}}</button>                   \n    <br>\n<!--            <button disabled={{buttonDisabled}} ion-button color="primary" type="submit" block>{{"button.ok"|translate}}</button>-->\n            <button ion-button color="myck" type="submit" block>{{"button.ok"|translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> \n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n \n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/login/login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_6__providers_srvHttp__["a" /* SrvHttp */], __WEBPACK_IMPORTED_MODULE_5__providers_srvAuth__["a" /* SrvAuth */], __WEBPACK_IMPORTED_MODULE_7__providers_srvInit__["a" /* SrvInit */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_5__providers_srvAuth__["a" /* SrvAuth */],
        __WEBPACK_IMPORTED_MODULE_7__providers_srvInit__["a" /* SrvInit */],
        __WEBPACK_IMPORTED_MODULE_8__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_srvHttp__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SrvAuth = (function () {
    function SrvAuth(http, srvHttp, menuCtrl) {
        var _this = this;
        this.http = http;
        this.srvHttp = srvHttp;
        this.menuCtrl = menuCtrl;
        this.user = {};
        this.connexion = function (email, password) {
            var params = "e=" + email + "&p=" + password;
            //    let params = { e: email, p: password };
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return _this.http.post(_this.srvHttp.SERVER_URL + _this.srvHttp.urlConnexion, params, options);
            /*
                      .timeout(10000)
                      .map(res => {
                        localStorage.setItem("User", JSON.stringify(res.json()));
                        return res.json();
                      })
            */
        };
        this.deconnexion = function () {
            _this.user = JSON.parse(localStorage.getItem('User'));
            if (_this.user && _this.user.num && _this.user.num.length > 0) {
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */](); //{ 'Content-Type': 'application/x-www-form-urlencoded' });
                headers.set('user', _this.user.num);
                var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                return _this.http.delete(_this.srvHttp.SERVER_URL + _this.srvHttp.urlConnexion, options);
            }
        };
        this.changePassword = function (oldPassword, newPassword) {
            _this.user = JSON.parse(localStorage.getItem('User'));
            if (_this.user && _this.user.num && _this.user.num.length > 0) {
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
                headers.set('user', _this.user.num);
                var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                var params = "op=" + oldPassword + "&p1=" + newPassword;
                return _this.http.post(_this.srvHttp.SERVER_URL + _this.srvHttp.urlPassword, params, options)
                    .timeout(10000)
                    .map(function (res) { return true; })
                    .subscribe(function (err) { return (_this.srvHttp.handleError(err)); });
            }
        };
        this.forgetPassword = function (email) {
            var params = "?e=" + email;
            return _this.http.get(_this.srvHttp.SERVER_URL + _this.srvHttp.urlConnexion + params)
                .timeout(10000)
                .map(function (res) { return true; })
                .subscribe(function (err) { return (_this.srvHttp.handleError(err)); });
        };
    }
    return SrvAuth;
}());
SrvAuth = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
], SrvAuth);

//# sourceMappingURL=srvAuth.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvInit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_srvHttp__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_srvData__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_srvConfig__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvAliment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvInscription__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SrvInit = (function () {
    function SrvInit(http, srvHttp, srvData, srvConfig, srvAliment, srvInscription) {
        var _this = this;
        this.http = http;
        this.srvHttp = srvHttp;
        this.srvData = srvData;
        this.srvConfig = srvConfig;
        this.srvAliment = srvAliment;
        this.srvInscription = srvInscription;
        this.user = {};
        this.lstAlimentAdd = {};
        this.initStorageAliment = function () {
            _this.lstAlimentAdd = localStorage.getItem("addAliment") != null && localStorage.getItem('addAliment').toString() != '[]' ? JSON.parse(localStorage.getItem("addAliment")) : '';
            if (_this.lstAlimentAdd != null && _this.lstAlimentAdd != []) {
                if (_this.lstAlimentAdd.length > 1) {
                    _this.lstAlimentAdd.forEach(function (element) {
                        var mnObject = new Object;
                        mnObject.file = element.file;
                        mnObject.name = element.name;
                        mnObject.nbHdc = element.nbHdc;
                        mnObject.unite = element.unite;
                        _this.srvAliment.upload(mnObject.file, mnObject.name, mnObject.nbHdc, mnObject.unite);
                    });
                    /*for (var i = 0; i < this.lstAlimentAdd.length; i++) {
                      var mnObject= <IAlimentAdd> new Object;
                      mnObject.file=this.lstAlimentAdd[i].file;
                      mnObject.name=this.lstAlimentAdd[i].name;
                      mnObject.nbHdc=this.lstAlimentAdd[i].nbHdc;
                      mnObject.unite=this.lstAlimentAdd[i].unite;
                      this.srvAliment.upload(mnObject.file,mnObject.name,mnObject.nbHdc,mnObject.unite,1);
                    }*/
                    _this.lstAlimentAdd = [];
                    localStorage.setItem("addAliment", "[]");
                }
                else if (_this.lstAlimentAdd.length > 0) {
                    _this.srvAliment.upload(_this.lstAlimentAdd[0].file, _this.lstAlimentAdd[0].name, _this.lstAlimentAdd[0].nbHdc, _this.lstAlimentAdd[0].unite);
                    localStorage.setItem("addAliment", "[]");
                    _this.lstAlimentAdd = [];
                }
            }
            // Gestion des Favoris
            _this.user = JSON.parse(localStorage.getItem('User'));
            if (_this.user && _this.user.num && _this.user.num.length > 0) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.set('user', _this.user.num);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.srvData.getMesDonnees(options)
                    .timeout(10000)
                    .subscribe(function (data) { return localStorage.setItem("Donnees", JSON.stringify(data.json())); }, function (err) { return _this.srvHttp.handleError(err); });
                _this.srvAliment.getFavoris(options);
                _this.srvAliment.getMesAliments(options);
                _this.srvConfig.getConfiguration(options);
                localStorage.getItem("localData") != null && localStorage.getItem('localData').toString() != '[]' ? _this.srvData.storeData(false) : '';
            }
            _this.srvAliment.getAliments();
            _this.srvAliment.getImagesAliments();
        };
    }
    return SrvInit;
}());
SrvInit = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_4__providers_srvData__["a" /* SrvData */],
        __WEBPACK_IMPORTED_MODULE_5__providers_srvConfig__["a" /* SrvConfig */],
        __WEBPACK_IMPORTED_MODULE_6__providers_srvAliment__["a" /* SrvAliment */],
        __WEBPACK_IMPORTED_MODULE_7__providers_srvInscription__["a" /* SrvInscription */]])
], SrvInit);

//# sourceMappingURL=srvInit.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_srvHttp__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_srvGeneral__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SrvConfig = (function () {
    function SrvConfig(http, srvHttp, srvGeneral, translate) {
        var _this = this;
        this.http = http;
        this.srvHttp = srvHttp;
        this.srvGeneral = srvGeneral;
        this.translate = translate;
        this.user = {};
        this.listConfig = function () {
            var wd = localStorage.getItem("Config");
            if (wd != null && wd.length !== 0) {
                return JSON.parse(localStorage.getItem("Config"));
            }
            else {
                return localStorage.setItem("Config", "[]");
            }
        };
        this.getConfiguration = function (options) {
            _this.http.get(_this.srvHttp.SERVER_URL + _this.srvHttp.urlProfil, options)
                .timeout(10000)
                .map(function (res) {
                localStorage.setItem("Config", JSON.stringify(res.json()));
                return res.json();
            })
                .subscribe(function (data) { return (data); }, function (err) { return (console.log("Delay exceeded !")); });
        };
        this.setConfigurationProfil = function (profil) {
            _this.user = JSON.parse(localStorage.getItem('User'));
            if (_this.user && _this.user.num && _this.user.num.length > 0) {
                var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
                headers.set('user', _this.user.num);
                headers.append("Accept", 'application/x-www-form-urlencoded');
                headers.append('Content-Type', 'application/x-www-form-urlencoded');
                var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
                var storeData = [];
                storeData.push(profil);
                localStorage.setItem("Config", JSON.stringify(storeData));
                var params = "n=" + JSON.stringify(storeData);
                _this.http.post(_this.srvHttp.SERVER_URL + _this.srvHttp.urlProfil, params, options)
                    .timeout(10000)
                    .subscribe(function (data) { _this.srvGeneral.setMessage(_this.translate.instant("msg.config.enrogOk")); }, function (err) { return (console.log("Delay exceeded")); });
            }
        };
    }
    return SrvConfig;
}());
SrvConfig = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_5__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], SrvConfig);

//# sourceMappingURL=srvConfig.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvInscription; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvHttp__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SrvInscription = (function () {
    function SrvInscription(http, events, camera, srvHttp, platform, srvGeneral, translate) {
        this.http = http;
        this.events = events;
        this.camera = camera;
        this.srvHttp = srvHttp;
        this.platform = platform;
        this.srvGeneral = srvGeneral;
        this.translate = translate;
        this.modifierUser = function (user) {
            var _this = this;
            this.user = JSON.parse(localStorage.getItem('User'));
            if (this.user && this.user.num && this.user.num.length > 0) {
                var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
                headers.set('user', this.user.num);
                var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                var civilite = "civ=" + user.sexe;
                var nom = "&n=" + user.nom;
                var prenom = "&p=" + user.prenom;
                var mail = "&m=" + user.mail;
                var pass = "&p1=" + user.mdp;
                var hash = "&hc=1234&mp=kk&ma=j&mv=er&mville=zz&mt=uu&mc=we";
                var code = "&c=0";
                var params = civilite + nom + prenom + mail + pass + code + hash;
                return this.http.post(this.srvHttp.SERVER_URL + this.srvHttp.urlUtilisateur, params, options)
                    .timeout(10000)
                    .subscribe(function (data) {
                    _this.srvGeneral.setMessage('msg.modifProfil');
                }, function (err) {
                    _this.srvHttp.handleError(err);
                });
            }
        };
        this.inscription = function (user) {
            var _this = this;
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var civilite = "civ=" + user.sexe;
            var nom = "&n=" + user.nom;
            var prenom = "&p=" + user.prenom;
            var mail = "&m=" + user.mail;
            var pass = "&p1=" + user.mdp;
            var pass2 = "&p2=" + user.mdp;
            var hash = "&hc=1234";
            var code = "&c=0";
            var medecin = "&medecin=0";
            var langue = "&language=" + localStorage.getItem("langue").toString();
            var params = civilite + nom + prenom + mail + pass + hash + code + medecin + langue;
            return this.http.post(this.srvHttp.SERVER_URL + this.srvHttp.urlInscription, params, options)
                .timeout(10000)
                .subscribe(function (data) {
                _this.srvGeneral.setMessage(_this.translate.instant('msg.inscriptionConfirme'));
            }, function (err) {
                _this.srvHttp.handleError(err);
            });
        };
        this.isValidEmailAddress = function (emailAddress) {
            if (emailAddress) {
                var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                if (!pattern.test(emailAddress)) {
                    this.srvGeneral.setMessage(this.translate.instant('msg.adresseEmailInvalide'));
                    return false;
                }
            }
            return true;
        };
    }
    return SrvInscription;
}());
SrvInscription = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_6__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], SrvInscription);

//# sourceMappingURL=srvInscription.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvData__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_srvQuantite__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_alimentTabs_quantite_quantite__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CalculPage = (function () {
    function CalculPage(events, srvData, platform, srvGeneral, navCtrl, srvQuantite, translate) {
        var _this = this;
        this.events = events;
        this.srvData = srvData;
        this.platform = platform;
        this.srvGeneral = srvGeneral;
        this.navCtrl = navCtrl;
        this.srvQuantite = srvQuantite;
        this.translate = translate;
        this.trancheHoraire = 'u1';
        this.display = true;
        this.displayList = false;
        this.data = {};
        this.repas = {};
        this.config = {};
        this.lstRepas = {};
        this.id = 1;
        this.addIcon = "add-circle";
        this.valuedefault = 0;
        this.repasHoraire = [];
        this.ionViewDidLoad = function () {
            // Permet d'attendre la fin du chargement de la page et de la traduction
            _this.platform.ready().then(function () {
                _this.repasHoraire = _this.srvGeneral.initTrancheHoraire();
                _this.trancheHoraire = _this.srvGeneral.getTrancheHoraire();
                _this.initTrancheHoraire(_this.trancheHoraire);
            });
        };
        this.afficheHdC = function (data) {
            _this.lstRepas = JSON.parse(localStorage.getItem("repas"));
            if (_this.lstRepas != null) {
                _this.nbAllHdc = _this.srvQuantite.getNbHdcRepas() + " " + _this.translate.instant("msg.hdc");
            }
        };
        this.getQuantite = function (idAliment) {
            _this.repas = _this.srvQuantite.getAlimentSelect(idAliment);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pages_alimentTabs_quantite_quantite__["a" /* QuantitePage */], { aliment: _this.repas.idAliment, quantite: _this.repas.quantite, callFromList: false });
        };
        this.validateCalcul = function (formCalcul) {
            if (_this.formCalcul.valid) {
                _this.srvData.calculInjection(formCalcul, _this.srvQuantite.getNbHdcRepas());
            }
            else {
                _this.srvGeneral.setMessage(_this.translate.instant("msg.config.rapport.erreur"));
            }
        };
        this.changeOnOff = function (event) {
            if (_this.id == 1) {
                _this.id = 2;
                _this.addIcon = "remove-circle";
            }
            else if (_this.id == 2) {
                _this.id = 1;
                _this.addIcon = "add-circle";
            }
        };
        this.initTrancheHoraire = function (tranche) {
            _this.config = JSON.parse(localStorage.getItem("Config"));
            if (tranche == 'u1') {
                _this.xHdc = _this.config == null ? "" : _this.config[0].hdc1;
                _this.xUnite = _this.config == null ? "" : _this.config[0].unite1;
            }
            else if (tranche == 'u2') {
                _this.xHdc = _this.config == null ? "" : _this.config[0].hdc2;
                _this.xUnite = _this.config == null ? "" : _this.config[0].unite2;
            }
            else if (tranche == 'u3') {
                _this.xHdc = _this.config == null ? "" : _this.config[0].hdc3;
                _this.xUnite = _this.config == null ? "" : _this.config[0].unite3;
            }
            else if (tranche == 'u4') {
                _this.xHdc = _this.config == null ? "" : _this.config[0].hdc4;
                _this.xUnite = _this.config == null ? "" : _this.config[0].unite4;
            }
            else if (tranche == 'u5') {
                _this.xHdc = _this.config == null ? "" : _this.config[0].hdc5;
                _this.xUnite = _this.config == null ? "" : _this.config[0].unite5;
            }
            else if (tranche == 'u6') {
                _this.xHdc = _this.config == null ? "" : _this.config[0].hdc6;
                _this.xUnite = _this.config == null ? "" : _this.config[0].unite6;
            }
            _this.formCalcul = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
                trancheHoraire: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](tranche, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required),
                nbHdc: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](""),
                unite: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](_this.xUnite, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required),
                hdc: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](_this.xHdc, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required),
                glycemie: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]("")
            });
        };
        this.goHome = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], {}, { animate: true, direction: 'back' });
        };
        this.lstRepas = JSON.parse(localStorage.getItem("repas"));
        if (this.lstRepas != null) {
            this.nbAllHdc = this.srvQuantite.getNbHdcRepas() + " " + this.translate.instant("msg.hdc");
            this.display = true;
        }
        else {
            this.display = false;
        }
        /*
              this.repasHoraire = this.srvGeneral.initTrancheHoraire();
              this.trancheHoraire = this.srvGeneral.getTrancheHoraire();
              this.initTrancheHoraire(this.srvGeneral.getTrancheHoraire());
        */
        this.repasHoraire = this.srvGeneral.initTrancheHoraire();
        this.initTrancheHoraire(this.srvGeneral.getTrancheHoraire());
        this.events.subscribe('afficheHdC', function (data) {
            _this.afficheHdC(data);
        });
    }
    return CalculPage;
}());
CalculPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calcul',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/calcul/calcul.html"*/'<ion-header *ngIf="!display">\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon class="ion-ios-home"></ion-icon>   \n      </button>\n    </ion-buttons>\n    \n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n        <img alt="webDia" src="assets/img/logoNew_hug.png" height="30">&nbsp;&nbsp;<span style="position:absolute; top: 7px"></span>\n      </div> \n    </ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-color-aliment">\n  <div style="height:30px;">\n    <span class="txt-title">{{"frm.aliments.titre" | translate}}</span>\n  </div>\n\n  <form (submit)="validateCalcul(formCalcul.value)" [formGroup]="formCalcul">\n\n      <ion-grid class="vertical-align-content">\n\n        <ion-row *ngIf="display">\n          <ion-col>\n            <ion-list no-margin>\n              <ion-list-header no-margin class="list-conf-rb" >\n                <span (click)="displayList=!displayList">{{nbAllHdc}}</span>\n                <ion-icon name={{addIcon}} item-right (click)="changeOnOff($event);displayList=!displayList"></ion-icon>\n<!--remove-circle-->                \n              </ion-list-header>\n              <ion-list *ngIf="displayList" no-margin>\n                <ion-item no-lines class="list-conf-rb" *ngFor="let aliment of lstRepas">\n                  <span (click)="getQuantite(aliment.idAliment);">{{aliment.nom}}</span>\n                  <ion-icon name="create" item-right (click)="getQuantite(aliment.idAliment);"></ion-icon>\n                </ion-item>\n              </ion-list>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item no-lines class="list-conf-rb" >\n              <ion-input type="number" formControlName="nbHdc" placeholder=\'{{"frm.monAliment.nbHdc"|translate}}\'></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class="center"><p>{{"frm.config.rapport"|translate}}</p></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n\n            <ion-grid  class="vertical-align-content" style="background-color: #fff">\n              <ion-row style="border-bottom:2px solid rgba(160, 208, 171, 0.3)">\n                <ion-col col-10 no-lines center style="padding-left:10px;">\n                  <ion-item no-lines >\n                    <ion-select #C  item-center formControlName="trancheHoraire" class="selectOption"  (ionChange)="initTrancheHoraire(C.value)" cancelText="{{\'button.annuler\'|translate}}" okText="{{\'button.ok\'|translate}}">      \n                      <ion-option *ngFor="let item of repasHoraire"  value="{{item.value}}">{{item.text}}</ion-option>    \n                    </ion-select> \n                  </ion-item>         \n                </ion-col>\n              </ion-row>\n                <ion-row center>\n                <ion-col col-5 width-50 no-lines no-padding no-margin style="padding-left:24px;">\n                  <ion-item no-lines >\n                    <ion-input  type="tel" maxlength="3" formControlName="unite"  placeholder=\'Unite\'  ></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col center>/</ion-col>\n                <ion-col col-5 width-50 no-lines item-right>\n                  <ion-item no-lines item-right>\n                    <ion-input  item-right maxlength="3" type="tel" formControlName="hdc" placeholder=\'HdC\'  ></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      \n        \n      <ion-grid class="vertical-align-content">\n        <ion-row>\n          <ion-col>\n            <ion-item no-lines>\n              <ion-input type="number" formControlName="glycemie" placeholder="{{\'msg.glycemie\'|translate}}" showFooter></ion-input>\n            </ion-item>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n            <button ion-button  class="button-ok" type="submit" block>{{"button.ok"|translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> \n\n  </form>\n\n</ion-content>\n \n<ion-footer *ngIf="!display" class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/calcul/calcul.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__["a" /* SrvGeneral */], __WEBPACK_IMPORTED_MODULE_6__providers_srvData__["a" /* SrvData */], __WEBPACK_IMPORTED_MODULE_8__providers_srvQuantite__["a" /* SrvQuantite */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_6__providers_srvData__["a" /* SrvData */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_8__providers_srvQuantite__["a" /* SrvQuantite */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
], CalculPage);

//# sourceMappingURL=calcul.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvQuantite; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_srvGeneral__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SrvQuantite = (function () {
    function SrvQuantite(srvGeneral, platform) {
        var _this = this;
        this.srvGeneral = srvGeneral;
        this.platform = platform;
        this.repas = {};
        this.lstRepas = [];
        this.getNbHdcRepas = function () {
            var nbHdc = 0;
            _this.lstRepas = JSON.parse(localStorage.getItem("repas"));
            if (_this.lstRepas != null) {
                for (var i = 0; i < _this.lstRepas.length; i++) {
                    nbHdc += _this.lstRepas[i].nbHdc;
                }
                nbHdc = _this.srvGeneral.roundNumber(nbHdc);
            }
            return nbHdc;
        };
        this.getNomAliment = function (idAliment) {
            var nomAliment;
            for (var i = 0; i < _this.lstData.length; i++) {
                if (_this.lstData[i].id == idAliment) {
                    if (_this.langue == 'en') {
                        nomAliment = _this.lstData[i].nom_en;
                    }
                    else if (_this.langue == 'de') {
                        nomAliment = _this.lstData[i].nom_de;
                    }
                    else {
                        nomAliment = _this.lstData[i].nom;
                    }
                    break;
                }
            }
            return nomAliment;
        };
        this.getImageAliment = function (idAliment) {
            for (var i = 0; i < _this.lstData.length; i++) {
                if (_this.lstData[i].id == idAliment) {
                    return _this.lstData[i].image;
                }
            }
            return null;
        };
        this.getAlimentSelect = function (idAliment) {
            _this.lstRepas = JSON.parse(localStorage.getItem("repas"));
            for (var i = 0; i < _this.lstRepas.length; i++) {
                if (_this.lstRepas[i].idAliment == idAliment) {
                    _this.repas = _this.lstRepas[i];
                    break;
                }
            }
            return _this.repas;
        };
        this.calculHdc = function (idAliment, quantite) {
            var bFind = false;
            _this.repas.id = 0;
            _this.repas.idRepas = 0;
            _this.repas.quantite = quantite;
            _this.repas.idAliment = idAliment;
            _this.lstRepas = JSON.parse(localStorage.getItem("repas"));
            if (_this.lstRepas === null) {
                _this.lstRepas = [];
            }
            for (var i = 0; i < _this.lstData.length; i++) {
                if (_this.lstData[i].id == idAliment) {
                    if (_this.langue == 'en') {
                        _this.repas.nom = _this.lstData[i].nom_en;
                    }
                    else if (_this.langue == 'de') {
                        _this.repas.nom = _this.lstData[i].nom_de;
                    }
                    else {
                        _this.repas.nom = _this.lstData[i].nom;
                    }
                    _this.repas.unite = _this.lstData[i].quantite;
                    // valeur de HDC pour 100gr ou 100ml
                    if (_this.lstData[i].quantite == 100) {
                        _this.repas.nbHdc = _this.srvGeneral.roundNumber((_this.lstData[i].glucide * quantite) / 100);
                    }
                    else {
                        _this.repas.nbHdc = _this.srvGeneral.roundNumber(_this.lstData[i].glucide * quantite);
                    }
                    // Replace aliment du repas
                    for (var j = 0; j < _this.lstRepas.length; j++) {
                        if (_this.lstRepas[j].idAliment == idAliment) {
                            bFind = true;
                            _this.lstRepas.splice(j, 1, _this.repas);
                        }
                    }
                    if (!bFind) {
                        _this.lstRepas.push(_this.repas);
                    }
                }
            }
            localStorage.setItem("repas", JSON.stringify(_this.lstRepas));
        };
        this.langue = localStorage.getItem("langue");
        this.lstData = JSON.parse(localStorage.getItem("Aliments"));
    }
    SrvQuantite.prototype.clearRepas = function () {
        localStorage.setItem("repas", JSON.stringify(this.lstRepas));
    };
    return SrvQuantite;
}());
SrvQuantite = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_srvGeneral__["a" /* SrvGeneral */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], SrvQuantite);

//# sourceMappingURL=srvQuantite.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuantitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_srvQuantite__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuantitePage = (function () {
    function QuantitePage(events, params, navCtrl, sanitizer, srvQuantite, viewCtrl, platform, translate) {
        var _this = this;
        this.events = events;
        this.params = params;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.srvQuantite = srvQuantite;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.translate = translate;
        this.quantite = "";
        this.imageBase64 = "";
        this.alimentAffiche = 1;
        this.callFromList = false;
        this.quantite_1 = 0;
        this.quantite_2 = 0;
        this.quantite_3 = 0;
        this.imageAliment = 0;
        this.imageAliment_1 = null;
        this.imageAliment_2 = null;
        this.imageAliment_3 = null;
        this.imageMonAliment = null;
        this.ionViewDidLoad = function () {
            _this.events.publish('hideTabbar', true);
        };
        this.ionViewWillLeave = function () {
            _this.events.publish('hideTabbar', false);
        };
        this.affQuantite = function () {
            var nbAliment = 0;
            _this.imageAliment_1 = null;
            _this.imageAliment_2 = null;
            _this.imageAliment_3 = null;
            _this.lstImgData = JSON.parse(localStorage.getItem("imagesAliments"));
            if (_this.lstImgData) {
                for (var i = 0; i < _this.lstImgData.length; i++) {
                    if (_this.lstImgData[i].diaImagealimentPK.idAliment === _this.idAliment) {
                        nbAliment++;
                        if (nbAliment <= 3) {
                            var img = "assets/img/aliments/" + _this.lstImgData[i].diaImagealimentPK.idAliment + '_' + _this.lstImgData[i].diaImagealimentPK.quantite + '.jpg';
                            if (nbAliment === 1) {
                                _this.imageAliment = 1;
                                _this.imageAliment_1 = img;
                                _this.quantite_1 = _this.lstImgData[i].diaImagealimentPK.quantite;
                            }
                            else if (nbAliment === 2) {
                                _this.imageAliment = 2;
                                _this.imageAliment_2 = img;
                                _this.quantite_2 = _this.lstImgData[i].diaImagealimentPK.quantite;
                            }
                            else if (nbAliment === 3) {
                                _this.imageAliment = 3;
                                _this.imageAliment_3 = img;
                                _this.quantite_3 = _this.lstImgData[i].diaImagealimentPK.quantite;
                            }
                        }
                    }
                }
            }
            if (_this.quantite == 0) {
                _this.quantite = "";
            }
            _this.quantiteAliment = _this.translate.instant("frm.quantite.saisie") + "<br>" + _this.srvQuantite.getNomAliment(_this.idAliment);
            _this.imageBase64 = _this.srvQuantite.getImageAliment(_this.idAliment) != null ? _this.srvQuantite.getImageAliment(_this.idAliment).replace('data/image/jpeg/base64/', '') : _this.srvQuantite.getImageAliment(_this.idAliment);
            console.log(_this.imageBase64);
            if (_this.imageBase64) {
                if (_this.platform.is('ios')) {
                    _this.imageMonAliment = 'data:image/jpeg;base64,' + _this.imageBase64;
                }
                else {
                    _this.imageMonAliment = _this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + _this.imageBase64);
                }
            }
        };
        this.setQuantite = function (num) {
            if (num === 1) {
                _this.alimentAffiche = 1;
                _this.quantite = _this.quantite_1;
            }
            else if (num === 2) {
                _this.alimentAffiche = 2;
                _this.quantite = _this.quantite_2;
            }
            else if (num === 3) {
                _this.alimentAffiche = 3;
                _this.quantite = _this.quantite_3;
            }
        };
        this.getQuantite = function (quantite) {
            _this.quantite = quantite;
        };
        this.calculHdc = function () {
            _this.srvQuantite.calculHdc(_this.idAliment, _this.quantite);
            // Permet de calculer le total des HdC et d'afficher les aliments
            _this.events.publish('afficheHdC', true);
            // Select Tab Calcul
            _this.navCtrl.parent.select(2);
            if (_this.callFromList) {
                _this.viewCtrl.dismiss();
            }
        };
        this.returnAliment = function () {
            _this.navCtrl.pop();
            //    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
        };
        this.idAliment = params.get("aliment");
        this.quantite = params.get("quantite");
        this.callFromList = params.get("callFromList");
        this.affQuantite();
    }
    return QuantitePage;
}());
QuantitePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-quantite',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/quantite/quantite.html"*/'<ion-content padding class="background-color-aliment">\n\n    <ion-grid class="vertical-align-content">\n      <ion-row>\n          <ion-col width-100 class="center"><span [innerHTML]="quantiteAliment"></span></ion-col>        \n      </ion-row>\n\n      <ion-row>\n        <ion-col width-100>\n          <ion-item no-lines class="itemConf list-conf-rb" >\n            <ion-input type="number" [value]="quantite" placeholder=\'{{"frm.quantite.saisieQuantite"|translate}}\' (change)="getQuantite($event.target.value)"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>      \n      <ion-row class="center">  \n        <ion-col width-90 class="center-col">\n          <div class="dividerBlock" ></div>\n        </ion-col>\n      </ion-row>\n      <ion-row class="center">  \n        <ion-col width-50 class="center-col">\n          <button ion-button full color="myck" (click)="calculHdc()">{{"button.ok"|translate}}</button>\n        </ion-col>\n        <ion-col width-50 class="center-col">\n          <button ion-button full color="dark" (click)="returnAliment();">{{"button.annuler"|translate}}</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n\n    <ion-grid>\n      <ion-row class="center">\n        <ion-col width-90 class="center-col">\n          <img src="{{imageAliment_1}}" class="imgAliment" [hidden]="(imageAliment_1 === null || alimentAffiche !== 1)">\n          <img src="{{imageAliment_2}}" class="imgAliment" [hidden]="(imageAliment_2 === null || alimentAffiche !== 2)">\n          <img src="{{imageAliment_3}}" class="imgAliment" [hidden]="(imageAliment_3 === null || alimentAffiche !== 3)">\n          <ion-img src="{{imageMonAliment}}" class="imgAliment" [hidden]="(imageMonAliment === null)"></ion-img>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class="button-quantite" [hidden]="imageAliment === 0">\n      <ion-row class="center">\n        <ion-col width-33 class="center-col" (click)=\'setQuantite(1)\'>\n            <span>{{quantite_1}}</span>\n        </ion-col>\n        <ion-col width-33 class="center-col col-border" (click)=\'setQuantite(2)\'>\n            <span>{{quantite_2}}</span>\n        </ion-col>\n        <ion-col width-33 class="center-col" (click)=\'setQuantite(3)\'>\n            <span>{{quantite_3}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/quantite/quantite.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_srvQuantite__["a" /* SrvQuantite */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_4__providers_srvQuantite__["a" /* SrvQuantite */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], QuantitePage);

//# sourceMappingURL=quantite.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlimentTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_calcul_calcul__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_srvGeneral__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alimentTabs_ajoutAliment_ajoutAliment__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alimentTabs_familleAliment_familleAliment__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AlimentTabsPage = (function () {
    function AlimentTabsPage(events, params, srvGeneral, navCtrl) {
        var _this = this;
        this.events = events;
        this.params = params;
        this.srvGeneral = srvGeneral;
        this.navCtrl = navCtrl;
        this.valueforngif = true;
        this.tabIndex = 0;
        this.hideSave = 1;
        this.listIcon = 'calculListe';
        this.addIcon = 'calculMnAl';
        this.bolusIcon = 'calculAl';
        this.calculPage = __WEBPACK_IMPORTED_MODULE_3__pages_calcul_calcul__["a" /* CalculPage */];
        this.ajoutAlimentPage = __WEBPACK_IMPORTED_MODULE_5__alimentTabs_ajoutAliment_ajoutAliment__["a" /* AjoutAlimentPage */];
        this.familleAlimentPage = __WEBPACK_IMPORTED_MODULE_6__alimentTabs_familleAliment_familleAliment__["a" /* FamilleAlimentPage */];
        /*
          ionViewDidLoad() {
              this.tabBarElement = document.querySelector('#idAlimentsTabs div');
          }
        */
        this.changeOnOff = function (event) {
            if (event.index == 0) {
                _this.listIcon = 'calculListeOn';
                _this.addIcon = 'calculMnAl';
                _this.bolusIcon = 'calculAl';
            }
            else if (event.index == 1) {
                _this.listIcon = 'calculListe';
                _this.addIcon = 'calculMnAlOn';
                _this.bolusIcon = 'calculAl';
            }
            else if (event.index == 2) {
                _this.listIcon = 'calculListe';
                _this.bolusIcon = 'calculAlOn';
                _this.addIcon = 'calculMnAl';
            }
        };
        this.hideTabbar = function (hide) {
            _this.tabBarElement = document.querySelector('#idAlimentsTabs div');
            if (hide) {
                _this.tabBarElement.style.display = 'none';
            }
            else {
                _this.tabBarElement.style.display = '';
            }
        };
        this.selectTab = function (event) {
            // Tab - Calcul
            if (event.index === 2) {
                _this.events.publish('hideSave', 1);
            }
            else {
                _this.events.publish('hideSave', 0);
            }
        };
        this.saveFavoris = function () {
            _this.srvGeneral.setMessage("saveFavoris()");
        };
        this.goHome = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */], {}, { animate: true, direction: 'back' });
        };
        // utilise par la fonction FAVORIS 
        var tabIndex = this.params.get('tabIndex');
        if (tabIndex) {
            this.tabIndex = tabIndex;
        }
        // Permet de cacher la "Tabbar" lors de la saisie de la quantité => utilisé dans quantite.ts
        this.events.subscribe('hideTabbar', function (data) {
            _this.hideSave = 0;
            _this.hideTabbar(data);
        });
        // permet d'afficher le bouton SAVE uniquement dans l'onglet CALCUL
        this.events.subscribe('hideSave', function (data) {
            _this.hideSave = data;
        });
    }
    return AlimentTabsPage;
}());
AlimentTabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/alimentTabs.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon class="ion-ios-home"></ion-icon>        \n      </button>\n    </ion-buttons>\n    \n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n         <img alt="webDia" src="assets/img/logoNew_hug.png" height="30">&nbsp;&nbsp;<span style="position:absolute; top: 7px"></span>\n      </div> \n    </ion-title>\n    <ion-buttons right>\n      <button ion-button menuToggle [hidden]="hideSave === 1">\n        <ion-icon class="ion-ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    \n    <ion-buttons right>\n      <button ion-button [hidden]="hideSave === 0" (click)="saveFavoris()">\n        <ion-icon name="download"></ion-icon>        \n      </button>\n    </ion-buttons>\n  \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-tabs id="idAlimentsTabs" [selectedIndex]=\'tabIndex\' [color]=\'danger\'>\n      <ion-tab [root]="familleAlimentPage" tabTitle="{{\'button.liste\'|translate}}" tabIcon={{listIcon}} (ionSelect)="changeOnOff($event);selectTab($event)"></ion-tab>\n      <ion-tab [root]="ajoutAlimentPage" tabTitle="{{\'button.monAliment\'|translate}}" tabIcon={{addIcon}} (ionSelect)="changeOnOff($event);selectTab($event)"></ion-tab>\n      <ion-tab [root]="calculPage" tabTitle="{{\'button.calculNew\'|translate}}" tabIcon={{bolusIcon}} (ionSelect)="changeOnOff($event);selectTab($event)"></ion-tab>\n    </ion-tabs>\n</ion-content>\n\n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/alimentTabs.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__alimentTabs_ajoutAliment_ajoutAliment__["a" /* AjoutAlimentPage */], __WEBPACK_IMPORTED_MODULE_6__alimentTabs_familleAliment_familleAliment__["a" /* FamilleAlimentPage */], __WEBPACK_IMPORTED_MODULE_4__providers_srvGeneral__["a" /* SrvGeneral */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
], AlimentTabsPage);

//# sourceMappingURL=alimentTabs.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilleAlimentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aliment_aliment__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvHttp__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_srvGeneral__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FamilleAlimentPage = (function () {
    function FamilleAlimentPage(http, srvHttp, srvGeneral, navCtrl, translate) {
        var _this = this;
        this.http = http;
        this.srvHttp = srvHttp;
        this.srvGeneral = srvGeneral;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.getFamilleAliment = function () {
            _this.srvGeneral.setLoader(true, _this.translate.instant("msg.chargement_en_cours"));
            var langue = localStorage.getItem("langue");
            _this.listFamille = _this.srvHttp.getFamilleAliment();
            if (_this.listFamille != null) {
                if (langue == 'en') {
                    _this.listFamille.forEach(function (famille) {
                        famille.nom = famille.nom_en;
                    });
                }
                else if (langue == 'de') {
                    _this.listFamille.forEach(function (famille) {
                        famille.nom = famille.nom_de;
                    });
                }
                _this.listFamille.splice(0, 0, { id: 0, nom: _this.translate.instant("msg.tous"), ordre: 0 });
                _this.srvGeneral.setLoader(false);
            }
            else {
                _this.listFamille = "[]";
                _this.srvGeneral.setLoader(false);
                _this.srvGeneral.setMessage(_this.translate.instant("msg.erreurConnexionServeur"));
            }
        };
        this.callAlimentFamille = function (famille) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__aliment_aliment__["a" /* AlimentPage */], { idFamille: famille.id });
        };
        this.goHome = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
            //    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
        };
        this.getFamilleAliment();
    }
    return FamilleAlimentPage;
}());
FamilleAlimentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-familleAliment',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/familleAliment/familleAliment.html"*/'<ion-content padding class="background-color-aliment">\n  <div style="height:30px;">\n    <span class="txt-title">{{"frm.aliments.titre" | translate}}</span>\n  </div>\n  <ion-list class="list-conf-rb" no-lines >\n    <button  style="padding:3px 10px 3px 3px;border-bottom:1px solid grey" ion-item *ngFor="let famille of listFamille | OrderBy : [\'ordre\']" (click)="callAlimentFamille(famille)">\n      {{famille.nom}}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/familleAliment/familleAliment.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_7__providers_srvHttp__["a" /* SrvHttp */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_7__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_8__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], FamilleAlimentPage);

//# sourceMappingURL=familleAliment.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_srvConfig__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ConfigurationPage = (function () {
    function ConfigurationPage(http, navCtrl, events, srvGeneral, srvConfig, formBuilder, translate, ref) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.events = events;
        this.srvGeneral = srvGeneral;
        this.srvConfig = srvConfig;
        this.formBuilder = formBuilder;
        this.translate = translate;
        this.ref = ref;
        this.config = {};
        this.user = {};
        this.validateConfig = function (formConfig) {
            if (_this.formConfig.valid) {
                var conf = new Object();
                conf.unite = Number.parseInt(_this.formConfig.get('unite').value);
                conf.correctionJour = Number.parseInt(_this.formConfig.get('correctionJour').value);
                conf.correctionNuit = Number.parseInt(_this.formConfig.get('correctionNuit').value);
                conf.hdc1 = Number.parseInt(_this.formConfig.get('hdc1').value);
                conf.hdc2 = Number.parseInt(_this.formConfig.get('hdc2').value);
                conf.hdc3 = Number.parseInt(_this.formConfig.get('hdc3').value);
                conf.hdc4 = Number.parseInt(_this.formConfig.get('hdc4').value);
                conf.hdc5 = Number.parseInt(_this.formConfig.get('hdc5').value);
                conf.hdc6 = Number.parseInt(_this.formConfig.get('hdc6').value);
                conf.unite1 = Number.parseInt(_this.formConfig.get('unite1').value);
                conf.unite2 = Number.parseInt(_this.formConfig.get('unite2').value);
                conf.unite3 = Number.parseInt(_this.formConfig.get('unite3').value);
                conf.unite4 = Number.parseInt(_this.formConfig.get('unite4').value);
                conf.unite5 = Number.parseInt(_this.formConfig.get('unite5').value);
                conf.unite6 = Number.parseInt(_this.formConfig.get('unite6').value);
                conf.dureeAction = Number.parseInt(_this.formConfig.get('dureeAction').value);
                conf.valeur = Number.parseInt(_this.formConfig.get('valeur').value);
                conf.idUti = 0;
                _this.srvConfig.setConfigurationProfil(conf);
            }
        };
        this.initConfig = function () {
            _this.config = JSON.parse(localStorage.getItem("Config"));
            var confStr = JSON.stringify(_this.config);
            _this.formConfig = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
                unite: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null || confStr == "[]" ? "" : _this.config[0].unite, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                valeur: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null || confStr == "[]" ? "" : _this.config[0].valeur, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                correctionJour: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null || confStr == "[]" ? "" : _this.config[0].correctionJour, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                correctionNuit: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null || confStr == "[]" ? "" : _this.config[0].correctionNuit, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                dureeAction: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null || confStr == "[]" ? "" : _this.config[0].dureeAction, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                unite1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null || confStr == "[]" ? "" : _this.config[0].unite1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                hdc1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null || confStr == "[]" ? "" : _this.config[0].hdc1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                unite2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null || confStr == "[]" ? "" : _this.config[0].unite2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                hdc2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null || confStr == "[]" ? "" : _this.config[0].hdc2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                unite3: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null || confStr == "[]" ? "" : _this.config[0].unite3, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                hdc3: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null || confStr == "[]" ? "" : _this.config[0].hdc3, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                unite4: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null || confStr == "[]" ? "" : _this.config[0].unite4, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                hdc4: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null || confStr == "[]" ? "" : _this.config[0].hdc4, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                unite5: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null || confStr == "[]" ? "" : _this.config[0].unite5, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                hdc5: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null || confStr == "[]" ? "" : _this.config[0].hdc5, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                unite6: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null || confStr == "[]" ? "" : _this.config[0].unite6, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                hdc6: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null || confStr == "[]" ? "" : _this.config[0].hdc6, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required)
            });
        };
        this.goHome = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
            //    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
        };
        this.initConfig();
    }
    return ConfigurationPage;
}());
ConfigurationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-configuration',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/configuration/configuration.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon class="ion-ios-home"></ion-icon>  \n      </button>\n    </ion-buttons>\n\n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n        <img alt="webDia" src="assets/img/logoNew_hug.png" height="30">&nbsp;&nbsp;<span style="position:absolute; top: 7px"></span>\n      </div> \n    </ion-title>\n    \n    <ion-buttons right>\n      <button ion-button menuToggle>\n        <ion-icon class="ion-ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-color-configuration">\n  <div style="padding-bottom:10px;">\n    <span class="txt-title">{{"frm.config.titre" | translate}}</span>\n    <br>\n    <span style="color:#000;">{{"frm.config.unit"|translate}}</span>\n  </div>\n\n  <form (submit)="validateConfig(formConfig.value)" [formGroup]="formConfig">\n\n    \n      \n      <ion-list radio-group no-lines formControlName="unite" class="list-conf-rb" >\n        <ion-item style=" padding:3px 10px 3px 3px;\n        border-bottom:1px solid grey;">\n          <ion-label item-center >mmol/l</ion-label>\n          <ion-radio item-left color="myck" checked value="1">mmol/l</ion-radio>\n        </ion-item >\n        <ion-item  style=" padding:3px 10px 3px 3px;\n        border-bottom:1px solid grey;">\n          <ion-label item-center >mg/dl</ion-label>\n          <ion-radio item-left color="myck" value="2">mg/dl</ion-radio>\n        </ion-item>\n        <ion-item style=" padding:3px 10px 3px 3px;">\n          <ion-label item-center >g/l</ion-label>\n          <ion-radio item-left color="myck" value="3">g/l</ion-radio>\n        </ion-item>\n    \n      </ion-list>  \n    <ion-grid text-center no-padding style="padding-bottom:10px;">\n        <ion-row >\n              <ion-col  col-8>\n                  <ion-item no-lines class="itemConf list-conf-rb">\n                 <ion-label ><font size="1rem"> {{"frm.config.valeurRecherche"|translate}}</font></ion-label>\n                  </ion-item>\n                </ion-col>  \n              <ion-col style="padding-left:8px;" col-4>\n                  <ion-item no-lines class="itemConf list-conf-rb">\n                  <ion-input  maxlength="4" class=" input-Conf" type="tel" style="font-size:0.8em;" center formControlName="valeur" placeholder="mmol/l" ></ion-input>\n                </ion-item>\n                </ion-col> \n        </ion-row>\n         <ion-row > \n                <ion-col col-8>\n                    <ion-item  no-lines  class=" itemConf list-conf-rb"> \n                  <ion-label  > <font size="1rem">{{"frm.config.correctionJour"|translate}}</font></ion-label >\n                  </ion-item>\n                </ion-col>\n                <ion-col style="padding-left:8px;" col-4>\n                    <ion-item no-lines  class=" itemConf list-conf-rb"> \n                    <ion-input maxlength="4" class="input-Conf"  style="font-size:0.8em;" type="tel" center formControlName="correctionJour" placeholder="mmol/l" ></ion-input>\n                    </ion-item>\n                </ion-col>\n          </ion-row> \n          <ion-row >  \n              <ion-col col-8>\n                  <ion-item  no-lines class=" itemConf list-conf-rb">\n                  <ion-label ><font size="1rem">{{"frm.config.correctionNuit"|translate}}</font></ion-label>\n                  </ion-item>\n              </ion-col>  \n              <ion-col style="padding-left:8px;" col-4>\n                  <ion-item no-lines class=" itemConf list-conf-rb">\n                  <ion-input  maxlength="4"  class=" input-Conf" style="font-size:0.8em;"  type="tel" center  formControlName="correctionNuit" placeholder="mmol/l" ></ion-input>\n                  </ion-item>\n              </ion-col> \n          </ion-row> \n          <ion-row>\n                <ion-col col-8>\n                    <ion-item  no-lines class=" itemConf list-conf-rb">\n                    <ion-label ><font size="1rem"> {{"frm.config.dureeInsuline"|translate}}</font></ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col style="padding-left:8px;" col-4>\n                    <ion-item no-lines class=" itemConf list-conf-rb">\n                    <ion-input  maxlength="4" class=" input-Conf" style="font-size:0.8em;" type="tel" center formControlName="dureeAction" placeholder="min." ></ion-input>\n                    </ion-item>\n               </ion-col>\n          </ion-row> \n      </ion-grid>\n      <div class="list-conf-rbTwo center">\n        <span style="text-align:center;color:black;">{{"frm.config.rapport"|translate}}</span>\n        <ion-grid class="vertical-align-content">\n          <ion-row class="center">\n            <span>{{"msg.petitdejeuner"|translate}}</span>\n          </ion-row>\n          <ion-row center>\n            <ion-col col-4 ><ion-item no-lines class=" itemConf list-conf-rb"><ion-input maxlength="4" class=" input-Conf" style="font-size:0.8em;"  type="tel" formControlName="unite1" placeholder=\'{{"msg.xUnite"|translate}}\'></ion-input></ion-item></ion-col>\n            <ion-col>/</ion-col>\n            <ion-col col-4 ><ion-item no-lines class=" itemConf list-conf-rb"><ion-input maxlength="4"  class=" input-Conf" style="font-size:0.8em;"  type="tel" formControlName="hdc1" placeholder=\'{{"msg.xHdC"|translate}}\'></ion-input></ion-item></ion-col>\n          </ion-row>\n          <ion-row>\n            <span>{{"msg.collation10"|translate}}</span>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4><ion-item no-lines class=" itemConf list-conf-rb"><ion-input maxlength="4"  class=" input-Conf" style="font-size:0.8em;"  type="number" formControlName="unite2" placeholder=\'{{"msg.xUnite"|translate}}\'></ion-input></ion-item></ion-col>\n            <ion-col>/</ion-col>\n            <ion-col col-4><ion-item no-lines class=" itemConf list-conf-rb"><ion-input maxlength="4"  class=" input-Conf" style="font-size:0.8em;"  type="number" formControlName="hdc2" placeholder=\'{{"msg.xHdC"|translate}}\'></ion-input></ion-item></ion-col>\n          </ion-row>\n          <ion-row>\n            <span>{{"msg.midi"|translate}}</span>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4><ion-item no-lines class=" itemConf list-conf-rb" ><ion-input type="number" formControlName="unite3" placeholder=\'{{"msg.xUnite"|translate}}\'></ion-input></ion-item></ion-col>\n            <ion-col>/</ion-col>\n            <ion-col col-4><ion-item  no-lines class=" itemConf list-conf-rb"><ion-input type="number" formControlName="hdc3" placeholder=\'{{"msg.xHdC"|translate}}\'></ion-input></ion-item></ion-col>\n          </ion-row>\n          <ion-row>\n            <span>{{"msg.collation16"|translate}}</span>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4><ion-item no-lines class=" itemConf list-conf-rb"><ion-input type="number" formControlName="unite4" placeholder=\'{{"msg.xUnite"|translate}}\'></ion-input></ion-item></ion-col>\n            <ion-col>/</ion-col>\n            <ion-col col-4><ion-item no-lines class=" itemConf list-conf-rb"><ion-input type="number" formControlName="hdc4" placeholder=\'{{"msg.xHdC"|translate}}\'></ion-input></ion-item></ion-col>\n          </ion-row>\n          <ion-row>\n            <span>{{"msg.diner"|translate}}</span>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4><ion-item no-lines class=" itemConf list-conf-rb"><ion-input type="number" formControlName="unite5" placeholder=\'{{"msg.xUnite"|translate}}\'></ion-input></ion-item></ion-col>\n            <ion-col>/</ion-col>\n            <ion-col col-4><ion-item no-lines class=" itemConf list-conf-rb"><ion-input type="number" formControlName="hdc5" placeholder=\'{{"msg.xHdC"|translate}}\'></ion-input></ion-item></ion-col>\n          </ion-row>\n          <ion-row>\n            <span>{{"msg.collationSoir"|translate}}</span>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4><ion-item no-lines class=" itemConf list-conf-rb"><ion-input type="number" formControlName="unite6" placeholder=\'{{"msg.xUnite"|translate}}\'></ion-input></ion-item></ion-col>\n            <ion-col>/</ion-col>\n            <ion-col col-4><ion-item no-lines class=" itemConf list-conf-rb"><ion-input type="number" formControlName="hdc6" placeholder=\'{{"msg.xHdC"|translate}}\'></ion-input></ion-item></ion-col>\n          </ion-row>\n        </ion-grid>\n        \n      </div>\n\n      <ion-grid>\n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n            <button ion-button class="button-ok" type="submit" block>{{"button.ok"|translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> \n\n    \n\n  </form>\n\n</ion-content>\n\n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/configuration/configuration.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__["a" /* SrvGeneral */], __WEBPACK_IMPORTED_MODULE_8__providers_srvConfig__["a" /* SrvConfig */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_8__providers_srvConfig__["a" /* SrvConfig */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */]])
], ConfigurationPage);

//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_srvData__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvInscription__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SubscriptionPage = (function () {
    function SubscriptionPage(appCtrl, platform, formBuilder, translate, srvGeneral, srvInscription, zone) {
        var _this = this;
        this.appCtrl = appCtrl;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.translate = translate;
        this.srvGeneral = srvGeneral;
        this.srvInscription = srvInscription;
        this.zone = zone;
        this.appelation = [];
        this.clearName = "";
        this.clearNameP = "";
        this.clearNameM = "";
        this.clearNameN = "";
        this.clear = false;
        this.genred = "m";
        this.user = null;
        this.captch = 0;
        this.etat = false;
        this.src = null;
        this.val = 0;
        this.util = false;
        this.ionViewDidLoad = function () {
            _this.src = _this.generateCaptcha();
        };
        this.generateCaptcha = function () {
            var title = "assets/img/captcha/captcha_";
            var min = Math.ceil(1);
            var max = Math.floor(8);
            var num = Math.floor(Math.random() * (max - min + 1)) + min;
            switch (num) {
                case 1:
                    this.val = 4;
                    break;
                case 2:
                    this.val = 6;
                    break;
                case 3:
                    this.val = 8;
                    break;
                case 4:
                    this.val = 10;
                    break;
                case 5:
                    this.val = 5;
                    break;
                case 6:
                    this.val = 1;
                    break;
                case 7:
                    this.val = 3;
                    break;
                case 8:
                    this.val = 5;
                    break;
            }
            return title + num + ".png";
        };
        this.initAppelation = function () {
            var mon = "M.";
            var mad = "Mme.";
            this.appelation.push({ value: "m", text: mon });
            this.appelation.push({ value: "f", text: mad });
            return this.appelation;
        };
        this.validateAddUser = function (formUser) {
            var appelServlet = false;
            var userInsc = new Object();
            if (_this.formUser.valid) {
                var prenom = _this.formUser.get("prenom").value;
                var nom = _this.formUser.get("nom").value;
                var mail = _this.formUser.get("mail").value;
                var mdp = _this.formUser.get("mdp").value;
                var mdp2 = _this.formUser.get("mdp2").value;
                var code = _this.formUser.get("code").value;
                if (prenom == "") {
                    _this.srvGeneral.setMessage(_this.translate.instant("msg.saisiePrenom"));
                }
                else if (nom == "") {
                    _this.srvGeneral.setMessage(_this.translate.instant("msg.saisieNom"));
                }
                else if (mail == "") {
                    _this.srvGeneral.setMessage(_this.translate.instant("msg.saisieMail"));
                }
                else if (mdp == "") {
                    _this.srvGeneral.setMessage(_this.translate.instant("msg.saisieMotdepasse"));
                }
                else if (_this.val != code) {
                    _this.srvGeneral.setMessage(_this.translate.instant("msg.codeCaptcha"));
                }
                else {
                    _this.user = JSON.parse(localStorage.getItem("User"));
                    if (_this.user && _this.user.num && _this.user.num.length > 0) {
                        if (_this.formUser.get("case").value == false) {
                            _this.srvGeneral.setMessage(_this.translate.instant("msg.valideConditionUtilisation"));
                        }
                        else if (_this.srvInscription.isValidEmailAddress(mail)) {
                            userInsc.actif = 0;
                            userInsc.mail = mail;
                            userInsc.mdp = mdp;
                            userInsc.nom = nom;
                            userInsc.prenom = prenom;
                            userInsc.sexe = (_this.formUser.get("genred").value == "m" ? 0 : 1);
                            userInsc.typeAcces = 1;
                            _this.srvInscription.modifierUser(userInsc);
                        }
                    }
                    else if (mdp2 == "") {
                        _this.srvGeneral.setMessage(_this.translate.instant("msg.saisieMotdepasse"));
                    }
                    else {
                        if (mdp !== mdp2) {
                            _this.srvGeneral.setMessage(_this.translate.instant('msg.saisieMotdepasseDifferent'));
                        }
                        else if (mdp.length < 5) {
                            _this.srvGeneral.setMessage(_this.translate.instant('msg.saisieMinimumCar'));
                        }
                        else if (_this.formUser.get("case").value == false) {
                            _this.srvGeneral.setMessage(_this.translate.instant('msg.valideConditionUtilisation'));
                        }
                        else if (_this.formUser.get("code").value == "") {
                            _this.srvGeneral.setMessage(_this.translate.instant('msg.codeCaptcha'));
                        }
                        else if (_this.srvInscription.isValidEmailAddress(mail)) {
                            userInsc.actif = 0;
                            userInsc.mail = mail;
                            userInsc.mdp = mdp;
                            userInsc.nom = nom;
                            userInsc.prenom = prenom;
                            userInsc.sexe = (_this.formUser.get("genred").value == "m" ? 0 : 1);
                            userInsc.typeAcces = 1;
                            _this.srvInscription.inscription(userInsc);
                            _this.clearName = "";
                            _this.clear = false;
                        }
                    }
                }
            }
        };
        this.goHome = function () {
            _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]);
            //    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
        };
        this.initForm = function () {
            var user = new Object();
            user = JSON.parse(localStorage.getItem("User"));
            _this.formUser = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
                genred: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](user == null ? _this.genred : (user.sexe == 1) ? _this.genred : "f", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
                prenom: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, _this.nospaceValidator])),
                nom: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, _this.nospaceValidator])),
                mail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, _this.nospaceValidator])),
                mdp: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, _this.nospaceValidator])),
                mdp2: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](""),
                code: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, _this.nospaceValidator])),
                case: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](false)
            });
            _this.clearNameM = user.mail;
            _this.clearNameN = user.nom;
            _this.clearNameP = user.prenom;
        };
        var userTest = JSON.parse(localStorage.getItem("User"));
        if (userTest == null) {
            this.util = false;
        }
        else {
            this.util = true;
        }
        this.appelation = this.initAppelation();
        this.initForm();
        this.genred = "m";
        this.src = this.generateCaptcha();
    }
    SubscriptionPage.prototype.nospaceValidator = function (control) {
        var re = / /;
        if (control.value && control.value.match(re)) {
            return { nospace: true };
        }
    };
    return SubscriptionPage;
}());
SubscriptionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'page-subscription',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/Inscription/subscription.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon class="ion-ios-home"></ion-icon>         \n      </button>\n    </ion-buttons>\n\n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n        <img alt="webDia" src="assets/img/logoNew_hug.png" height="30">&nbsp;&nbsp;<span style="position:absolute; top: 7px"></span>\n      </div> \n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-color-donnees">\n  <div>\n    <span class="txt-title">{{"frm.inscription.titre" | translate}}</span>\n  </div>\n\n  <form (submit)="validateAddUser(formUser.value)" [formGroup]="formUser" >\n        <ion-list>\n          <ion-grid>\n            <ion-row no-padding no-margin>\n              <ion-col>\n                <ion-item no-lines class="txt-title-D">\n                  <ion-select no-padding   style="padding-left:8px;padding-right:5px;" formControlName="genred" class="selectOption" cancelText="{{\'button.annuler\'|translate}}" okText="{{\'button.ok\'|translate}}">      \n                    <ion-option *ngFor="let item of appelation" value="{{item.value}}">{{item.text}}</ion-option>           \n                  </ion-select>          \n                </ion-item>\n              </ion-col>\n            </ion-row>\n    \n            <ion-row>\n              <ion-col>\n                <ion-item no-lines class="txt-title-D">\n                  <ion-input [value]="clearNameP" type="text" autofocus formControlName="prenom" placeholder=\'{{"msg.inscription.prenom"|translate}}\'></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n    \n            <ion-row>\n              <ion-col>\n                <ion-item no-lines class="txt-title-D">\n                  <ion-input [value]="clearNameN" type="text" autofocus formControlName="nom" placeholder=\'{{"msg.inscription.nom"|translate}}\'></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n    \n            <ion-row>\n              <ion-col>\n                <ion-item no-lines class="txt-title-D">\n                  <ion-input type="text" [value]="clearNameM" formControlName="mail" placeholder=\'{{"msg.inscription.email"|translate}}\'></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n    \n            <ion-row>\n              <ion-col>\n                <ion-item no-lines class="txt-title-D">\n                  <ion-input   formControlName="mdp" [value]="clearName" type="text" placeholder=\'{{"msg.connexion.mot_de_passe"|translate}}\'></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n    \n    \n            <ion-row>\n              <ion-col>\n                <ion-item no-lines [hidden]="util" class="txt-title-D">\n                  <ion-input  formControlName="mdp2" type="text" [value]="clearName"  placeholder=\'{{"msg.connexion.mot_de_passe"|translate}}\'></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n    \n    \n          <ion-row >\n          <ion-col >\n            <ion-item no-lines  class="txt-title-D">\n              <ion-checkbox style="padding-right:2px;margin-right:2px;"   item-left formControlName="case" [checked]="clear"></ion-checkbox><ion-label class="check-sub-pd">{{"msg.inscription.acceptation"|translate}}</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n         \n      \n       \n     \n      <!--<re-captcha #captchaControl="ngModel" fromControlName="captcha" name="captcha" required siteKey="6Lf6Jz4UAAAAAN2th6sLnHx0-MDExMkCAQ3AvWIv" ></re-captcha>\n      !--> \n      <ion-row class="center">\n        <ion-col width-90 class="center-col">\n              <div style="text-align: center;" class="recaptcha"><img style="width:75px;\n                height:70px;text-align:left;" id="captcha" [src]="src"/><img style="width:75px;\n                height:70px;text-align:center;" src="assets/img/captcha/egal.png"/>\n                    <input style="width:75px; height:70px;text-align: right;float:right;margin-right:30px;" formControlName="code" name="answer" />\n              </div>\n    </ion-col>\n  </ion-row>\n\n    </ion-grid>\n\n          <ion-grid>\n            <ion-row class="center">  \n              <ion-col width-90 class="center-col">\n                <button ion-button class="button-ok" type="submit" block>{{"button.ok"|translate}}</button>\n              </ion-col>\n            </ion-row>\n          </ion-grid> \n    \n        </ion-list>\n    \n      </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/Inscription/subscription.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__["a" /* SrvGeneral */], __WEBPACK_IMPORTED_MODULE_5__providers_srvData__["a" /* SrvData */], __WEBPACK_IMPORTED_MODULE_6__providers_srvInscription__["a" /* SrvInscription */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_6__providers_srvInscription__["a" /* SrvInscription */],
        __WEBPACK_IMPORTED_MODULE_4__angular_core__["P" /* NgZone */]])
], SubscriptionPage);

//# sourceMappingURL=subscription.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calcul_calcul__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favoris_favoris__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dataTabs_dataTabs__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_alimentTabs_alimentTabs__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_configuration_configuration__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pop_popup__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_Inscription_subscription__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_srvQuantite__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_srvGeneral__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomePage = HomePage_1 = (function () {
    function HomePage(events, navCtrl, srvQuantite, srvGeneral, menuCtrl, translate) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.srvQuantite = srvQuantite;
        this.srvGeneral = srvGeneral;
        this.menuCtrl = menuCtrl;
        this.translate = translate;
        this.user = {};
        this.loginPage = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */];
        this.setMenu = function (page) {
            if (page == 'config') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_configuration_configuration__["a" /* ConfigurationPage */]);
            }
            else if (page == 'aliment') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_alimentTabs_alimentTabs__["a" /* AlimentTabsPage */]);
            }
            else if (page == 'calcul') {
                localStorage.removeItem("repas");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_calcul_calcul__["a" /* CalculPage */]);
            }
            else if (page == 'data') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_dataTabs_dataTabs__["a" /* DataTabsPage */]);
            }
            else if (page == 'favoris') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_favoris_favoris__["a" /* FavorisPage */]);
            }
            else if (page == 'inscription') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pages_Inscription_subscription__["a" /* SubscriptionPage */]);
            }
        };
        this.isConnect = function () {
            _this.user = JSON.parse(localStorage.getItem('User'));
            if (_this.user != null && _this.user.actif == 1) {
                return true;
            }
            else {
                return false;
            }
        };
        this.srvQuantite.clearRepas();
        this.user = JSON.parse(localStorage.getItem('User'));
        if (this.user != null && this.user.actif == 1) {
            this.menuCtrl.enable(true, 'menuConnect');
            this.menuCtrl.enable(false, 'menuDisconnect');
        }
        else {
            this.menuCtrl.enable(false, 'menuConnect');
            this.menuCtrl.enable(true, 'menuDisconnect');
            if (this.user != null) {
                this.srvGeneral.setMessage(this.translate.instant("msg.inscriptionConfirme"));
            }
        }
        if (localStorage.getItem('access') == '0') {
            setTimeout(function () {
                // this.navCtrl.popToRoot();
                // might try this instead
                if (localStorage.getItem('access') == '0') {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_pop_popup__["a" /* PopupPage */]);
                }
            }, 4500);
        }
    }
    HomePage.prototype.openPage = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    return HomePage;
}());
HomePage = HomePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button>\n        <ion-icon class="ion-ios-home"></ion-icon>      \n      </button>\n    </ion-buttons>\n    \n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n        <img alt="webDia" src="assets/ressources/logoNew_hug.png" height="30">&nbsp;&nbsp;<span style="position:absolute; top: 7px"></span>\n      </div> \n    </ion-title>\n    \n    <ion-buttons right>\n      <button ion-button menuToggle>\n        <ion-icon class="ion-ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<!--<ion-content padding class="background-image">-->\n<ion-content no-padding style="background-image:url(\'assets/img/bandeau_newHOME.png\');background-size: 100% 105%;\nbackground-repeat: no-repeat;">  \n\n  <div class="title no-border no-padding no-margin" style>\n    \n  </div>\n  \n<div class="padding" style="padding: 80px 25px 5px 25px">\n  <button (click)="setMenu(\'aliment\')" class="button-aliment button-menu" ion-button block >           \n      {{"button.aliments"|translate}}\n      <ion-icon name="arrow-dropright" class="icon-button"></ion-icon>          \n  </button>\n\n  <button  [hidden]="isConnect()" (click)="setMenu(\'inscription\')" class="button-favoris button-menu" ion-button block >           \n    {{"frm.accueil.inscription"|translate}}\n    <ion-icon name="arrow-dropright" class="icon-button"></ion-icon>          \n</button>\n  <button [disabled]="!isConnect()" [hidden]="!isConnect()" (click)="setMenu(\'favoris\')" class="button-favoris button-menu" ion-button block >           \n      {{"button.MesFavoris"|translate}}\n      <ion-icon name="arrow-dropright" class="icon-button"></ion-icon>          \n  </button>\n\n  <button [disabled]="!isConnect()" (click)="setMenu(\'data\')" class="button-donnees button-menu" ion-button block >           \n      {{"button.donnees"|translate}}\n      <ion-icon name="arrow-dropright" class="icon-button"></ion-icon>          \n  </button>\n\n  <!--\n  <button (click)="setMenu(\'config\')" class="button-configuration button-menu" ion-button block >           \n      {{"button.configuration"|translate}}\n      <ion-icon name="arrow-dropright" class="icon-button"></ion-icon>          \n  </button>\n-->\n\n  <button (click)="setMenu(\'calcul\')" class="button-bolus button-menu" ion-button block >           \n      {{"button.bolus"|translate}}\n      <div class="icon-button">\n        <ion-icon class="ion-ios-bolus"></ion-icon>\n      </div>\n      \n  </button>\n</div>\n  <div class="left" style="color:white;font-size: 0.9em;padding: 0px 25px 5px 25px;">{{"msg.site.citation.texte" | translate}}\n  <span class="right" style="color:white;font-size: 0.7em; float:right; padding-top:1px; padding-right:20px;">{{"msg.site.citation.nom" | translate}}</span></div>\n\n  <div class="bar bar-footer center" style="position: fixed; bottom:22px; padding-left:36%;"><img style="float: center;vertical-align: top; " alt="webDia" src="assets/img/logo_hug_new.png" height="22" border="0"><span class="left" style="display:inline-block; margin-left:19px; font-size:0.5em; ;color:white;"><span>Hôpitaux</span><br><span>Universitaires</span><br><span>Genève</span></span></div><br>\n<ion-footer class="title center footer">\n<div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n\n\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_11__providers_srvQuantite__["a" /* SrvQuantite */], __WEBPACK_IMPORTED_MODULE_12__providers_srvGeneral__["a" /* SrvGeneral */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_11__providers_srvQuantite__["a" /* SrvQuantite */],
        __WEBPACK_IMPORTED_MODULE_12__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
], HomePage);

var HomePage_1;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_srvGeneral__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the Famille provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var SrvHttp = (function () {
    function SrvHttp(srvGeneral, translate) {
        var _this = this;
        this.srvGeneral = srvGeneral;
        this.translate = translate;
        //SERVER_URL = 'http://www.kmconcept.net/webdia/';
        //SERVER_URL = 'http://localhost:8081/webdia/';
        this.SERVER_URL = 'http://localhost:8081/webdia/';
        this.getFavoris = function () {
            return JSON.parse(localStorage.getItem("mesRepas"));
        };
        this.getFamilleAliment = function () {
            return JSON.parse(localStorage.getItem("FamillesAliments"));
        };
        this.handleError = function (error) {
            try {
                var errorText = error.text();
                if (errorText && errorText.search('<u>') > 0) {
                    _this.srvGeneral.setMessage(errorText.substring(errorText.search('<u>') + 3, errorText.search('</u>')));
                }
                else {
                    _this.srvGeneral.setMessage(_this.translate.instant("msg.erreurConnexionServeur"));
                }
            }
            catch (err) {
                _this.srvGeneral.setMessage(_this.translate.instant("msg.erreurConnexionServeur"));
            }
        };
        this.urlProfil = 'profil';
        this.urlSendData = 'mail';
        this.urlData = 'injection';
        this.urlFavoris = 'favoris';
        this.urlAliment = 'aliments';
        this.urlPassword = 'password';
        this.urlConnexion = 'connexion';
        this.urlMesdAliment = 'mesAliments';
        this.urlImageAliment = 'imagesAliments';
        this.urlFamilleAliment = 'familleAliments';
        this.urlUtilisateur = 'utilisateur';
        this.urlInscription = 'inscription';
    }
    return SrvHttp;
}());
SrvHttp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
], SrvHttp);

//# sourceMappingURL=srvHttp.js.map

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_srvHttp__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvGeneral__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_alimentTabs_alimentTabs__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FavorisPage = (function () {
    function FavorisPage(appCtrl, events, srvHttp, srvGeneral, navCtrl, translate) {
        var _this = this;
        this.appCtrl = appCtrl;
        this.events = events;
        this.srvHttp = srvHttp;
        this.srvGeneral = srvGeneral;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.repas = {};
        this.lstRepas = [];
        this.getFavoris = function () {
            _this.srvGeneral.setLoader(true, _this.translate.instant("msg.chargement_en_cours"));
            _this.listFavoris = _this.srvHttp.getFavoris();
            _this.srvGeneral.setLoader(false);
        };
        this.callFavoris = function (favoris) {
            if (favoris && favoris.compositions && favoris.compositions.length > 0) {
                for (var i = 0; i < favoris.compositions.length; i++) {
                    _this.repas = {};
                    var item = favoris.compositions[i];
                    _this.repas.id = 0;
                    _this.repas.idRepas = 0;
                    _this.repas.quantite = item.quantite;
                    _this.repas.idAliment = item.idAliment;
                    _this.repas.unite = item.unite;
                    _this.repas.nbHdc = item.nbHdc;
                    _this.repas.nom = item.nom;
                    _this.lstRepas.push(_this.repas);
                }
                localStorage.setItem("repas", JSON.stringify(_this.lstRepas));
            }
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_alimentTabs_alimentTabs__["a" /* AlimentTabsPage */], { tabIndex: 2 });
        };
        this.deleteFavoris = function (favoris) {
            _this.srvGeneral.setMessage("deleteFavoris(" + favoris + ")");
        };
        this.goHome = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], {}, { animate: true, direction: 'back' });
        };
        this.getFavoris();
    }
    return FavorisPage;
}());
FavorisPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favoris',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/favoris/favoris.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon class="ion-ios-home"></ion-icon>         \n      </button>\n    </ion-buttons>\n\n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n        <img alt="webDia" src="assets/img/logoNew_hug.png" height="30">&nbsp;&nbsp;<span style="position:absolute; top: 7px"></span>\n      </div> \n    </ion-title>\n\n    <ion-buttons right>\n        <button ion-button menuToggle>\n          <ion-icon class="ion-ios-menu"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-color-favoris">\n  <div style="height:30px;">\n    <span class="txt-title">{{"frm.favoris.titre" | translate}}</span>\n  </div>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let favoris of listFavoris" (click)="callFavoris(favoris)">\n      <ion-item>\n        {{favoris.nom}}\n      </ion-item>\n\n      <ion-item-options>\n        <button ion-button icon-only (click)="deleteFavoris(favoris)" [color]="\'danger\'">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/favoris/favoris.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_srvHttp__["a" /* SrvHttp */], __WEBPACK_IMPORTED_MODULE_6__providers_srvGeneral__["a" /* SrvGeneral */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_5__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_6__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], FavorisPage);

//# sourceMappingURL=favoris.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjoutAlimentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_srvAliment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvGeneral__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AjoutAlimentPage = (function () {
    function AjoutAlimentPage(events, camera, navCtrl, translate, platform, srvAliment, srvGeneral, alertCtrl, actionSheetCtrl) {
        var _this = this;
        this.events = events;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.platform = platform;
        this.srvAliment = srvAliment;
        this.srvGeneral = srvGeneral;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.nom = "";
        this.unite = 0;
        this.nbHdc = "";
        this.base64ImageT = null;
        this.lstAlimentAdd = {};
        this.img = false;
        this.onChangeNom = function (data) {
            _this.nom = data;
            /*
                if(this.nom.length>0 && this.nbHdc.length>0){
                  this.buttonDisabled = null;
                }
                else {
                  this.buttonDisabled = true;
                }
            */
        };
        this.onChangeHdc = function (data) {
            _this.nbHdc = data;
            /*
                if(this.nom.length>0 && this.nbHdc.length>0){
                  this.buttonDisabled = null;
                }
                else {
                  this.buttonDisabled = true;
                }
            */
        };
        this.onChangeUnite = function (data, item) {
            _this.unite = item; // 1 = 100gr. - 2 = unité
        };
        this.selectImage = function () {
            var alert = _this.alertCtrl.create();
            alert.setTitle(_this.translate.instant("msg.image.select.titre"));
            alert.addInput({
                type: 'radio',
                label: _this.translate.instant("msg.image.librairie"),
                value: 'lib',
                checked: false
            });
            alert.addInput({
                type: 'radio',
                label: _this.translate.instant("msg.image.camera"),
                value: 'cam',
                checked: true
            });
            alert.addButton(_this.translate.instant("button.annuler"));
            alert.addButton({
                text: _this.translate.instant("button.ok"),
                handler: function (data) {
                    var l = null;
                    if (data == 'lib') {
                        _this.srvAliment.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                    else {
                        _this.srvAliment.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                }
            });
            alert.present();
        };
        this.setRepas = function () {
            var data;
            _this.platform.ready().then(function () {
                if (_this.nom && _this.nom.length > 0) {
                    if (_this.nbHdc && _this.nbHdc.length > 0) {
                        _this.srvAliment.upload(_this.base64ImageT, _this.nom, Number.parseFloat(_this.nbHdc), _this.unite);
                        _this.base64ImageT = null;
                        _this.clearHdc = 0;
                        _this.clearNom = "";
                    }
                    else {
                        _this.srvGeneral.setMessage(_this.translate.instant("msg.saisieNbHdC"));
                    }
                }
                else {
                    _this.srvGeneral.setMessage(_this.translate.instant("msg.saisieNom"));
                }
            });
        };
        this.resetChamps = function () {
            _this.events.subscribe('initImageSrc', function (dataImage) {
                //        this.base64Image = 'data:image/jpeg;base64,' + dataImage; 
                _this.base64ImageT = "";
            });
        };
        /* ---------------------------------------------------------------------------------------------------------------- */
        this.goHome = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], {}, { animate: true, direction: 'back' });
        };
        // Permet d'initialiser l'image "lastImage", appelé dans le provider srvAliment.ts
        this.events.subscribe('initImageSrc', function (dataImage) {
            //        this.base64Image = 'data:image/jpeg;base64,' + dataImage; 
            _this.base64ImageT = dataImage;
        });
    }
    ;
    return AjoutAlimentPage;
}());
AjoutAlimentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ajoutAliment',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/ajoutAliment/ajoutAliment.html"*/'<ion-content padding class="background-color-aliment">\n    <div style="height:30px;">\n      <span class="txt-title">{{"frm.aliments.titre" | translate}}</span>\n    </div>\n    \n    <ion-grid>\n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n            <button ion-button block color="dark" class="button-selectImage" (click)="selectImage()">\n              <ion-icon name="camera"></ion-icon>&nbsp;&nbsp;&nbsp;{{"msg.image.select"|translate}}    \n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n     \n<!--      \n      <button ion-button icon-left (click)="uploadImage()" [disabled]="lastImage === null">\n        <ion-icon name="cloud-upload"></ion-icon>Upload\n      </button>\n-->      \n    <ion-list> \n\n      <ion-grid>\n        <ion-row class="center">\n          <ion-col width-100 class="center-col">\n            <ion-item no-lines class="itemConf list-conf-rb" >\n              <ion-input [value]="clearNom" name="nom" required autofocus type="text" placeholder=\'{{"msg.nom.aliment"|translate}}\' (keyup)="onChangeNom($event.target.value)"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row class="center">\n          <ion-col width-50 class="center-col">\n            <ion-item no-lines class="itemConf list-conf-rb" >\n              <ion-input [value]="clearHdc" name="nbHdc" required type="number" placeholder=\'{{"frm.monAliment.nbHdc"|translate}}\' (keyup)="onChangeHdc($event.target.value)"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col width-50 class="center-col">\n            <ion-item no-lines class="itemConf list-conf-rb" >\n              <ion-select [(ngModel)]="select" (ionChange)="onChangeUnite($event, select)" class="selectOption" cancelText="{{\'button.annuler\'|translate}}" okText="{{\'button.ok\'|translate}}">\n                <ion-option value=100 selected="true">100 gr.</ion-option>\n                <ion-option value=1>unité</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>    \n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n            <img  [src]="base64ImageT" style="width: 100%" [hidden]="(base64ImageT === null)">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n<!--            <button class="button-ok" disabled={{buttonDisabled}} ion-button block (click)="setRepas()">{{"button.ok"|translate}}</button>-->\n            <button class="button-ok" ion-button block (click)="setRepas()">{{"button.ok"|translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> \n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/ajoutAliment/ajoutAliment.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_6__providers_srvGeneral__["a" /* SrvGeneral */], __WEBPACK_IMPORTED_MODULE_5__providers_srvAliment__["a" /* SrvAliment */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__providers_srvAliment__["a" /* SrvAliment */],
        __WEBPACK_IMPORTED_MODULE_6__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */]])
], AjoutAlimentPage);

//# sourceMappingURL=ajoutAliment.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlimentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_srvSort__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quantite_quantite__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_srvHttp__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_srvAliment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_srvGeneral__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__familleAliment_familleAliment__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AlimentPage = (function () {
    function AlimentPage(http, srvHttp, params, srvAliment, navCtrl, srvGeneral, viewCtrl, loading, alertCtrl, translate) {
        var _this = this;
        this.http = http;
        this.srvHttp = srvHttp;
        this.params = params;
        this.srvAliment = srvAliment;
        this.navCtrl = navCtrl;
        this.srvGeneral = srvGeneral;
        this.viewCtrl = viewCtrl;
        this.loading = loading;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.MES_ALIMENTS = 14;
        this.searchTerm = '';
        this.isMesAliments = 0;
        this.user = {};
        this.getAlimentFamille = function (idFamille) {
            _this.srvGeneral.setLoader(true, _this.translate.instant("msg.chargement_en_cours"));
            _this.idFamille = idFamille;
            _this.refreshListAlimentFamille();
            _this.srvGeneral.setLoader(false);
        };
        this.refreshListAlimentFamille = function () {
            var langue = localStorage.getItem("langue");
            _this.listAliment = _this.srvAliment.getAlimentsFamille(_this.idFamille);
            if (_this.idFamille > 0) {
                if (_this.idFamille === _this.MES_ALIMENTS) {
                    _this.isMesAliments = _this.MES_ALIMENTS;
                }
                if (langue == 'en') {
                    _this.listAliment.forEach(function (aliment) {
                        aliment.nom = aliment.nom_en;
                    });
                }
                else if (langue == 'de') {
                    _this.listAliment.forEach(function (aliment) {
                        aliment.nom = aliment.nom_de;
                    });
                }
            }
        };
        this.setFilteredItems = function (searchBar) {
            if (_this.idFamille > 0) {
                _this.refreshListAlimentFamille();
            }
            else {
                _this.listAliment = JSON.parse(localStorage.getItem("Aliments"));
            }
            // set q to the value of the searchbar
            var searchValue = searchBar.srcElement.value;
            // if the value is an empty string don't filter the items 
            if (!searchValue) {
                if (_this.idFamille == 0) {
                    _this.listAliment = [];
                }
                return false;
            }
            _this.listAliment = _this.listAliment.filter(function (item) {
                if (item.nom && searchValue) {
                    if (_this.srvGeneral.stripVowelAccent(item.nom.toLowerCase().substring(0, searchValue.length)) === searchValue.toLowerCase()) {
                        return true;
                    }
                    return false;
                }
            });
        };
        this.returnListeFamille = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__familleAliment_familleAliment__["a" /* FamilleAlimentPage */], {}, { animate: true, direction: 'back' });
        };
        this.getQuantite = function (idAliment) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__quantite_quantite__["a" /* QuantitePage */], { aliment: idAliment, quantite: 0, callFromList: true });
            _this.viewCtrl.dismiss();
        };
        this.deleteMesAliments = function (item) {
            var alert = _this.alertCtrl.create({
                title: "Suppression",
                message: "Etes vous sûr de vouloir supprimer cet aliement ?",
                buttons: [
                    { text: 'Cancel', role: 'cancel' },
                    { text: 'Ok', handler: function () { _this.srvAliment.deleteMesAliments(); } }
                ]
            });
            alert.present();
        };
        this.param = params.get("idFamille");
        this.getAlimentFamille(this.param);
    }
    AlimentPage.prototype.ionViewWillEnter = function () {
        this.user = JSON.parse(localStorage.getItem('User'));
        if (this.user && this.user.num && this.user.num.length > 0) {
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
            headers.append('user', this.user.num);
            var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.srvAliment.getMesAliments(options);
        }
    };
    return AlimentPage;
}());
AlimentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-aliment',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/aliment/aliment.html"*/'<ion-content padding class="background-color-aliment">\n  <div style="height:30px;">\n    <span class="txt-title">{{"frm.aliments.titre" | translate}}</span>\n  </div>\n  <ion-searchbar (ionInput)="setFilteredItems($event)" placeholder=\'{{"msg.rechercheAliments"|translate}}\'></ion-searchbar>\n  <ion-list no-lines >\n    <div [hidden]="(isMesAliments === 0)">\n      <ion-item-sliding style="padding:3px 10px 3px 3px;border-bottom:1px solid grey" *ngFor="let aliment of listAliment | OrderBy : [\'nom\']" (click)="getQuantite(aliment.id)">\n        <ion-item>\n          {{aliment.nom}}        \n        </ion-item>\n\n        <ion-item-options>\n          <button ion-button icon-only (click)="deleteMesAliments(aliment.id)" [color]="\'danger\'">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n    </div>\n\n    <div [hidden]="(isMesAliments !== 0)">\n      <ion-item *ngFor="let aliment of listAliment | OrderBy : [\'nom\']" (click)="getQuantite(aliment.id)">\n          {{aliment.nom}}\n      </ion-item>\n    </div>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/aliment/aliment.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_8__providers_srvHttp__["a" /* SrvHttp */], __WEBPACK_IMPORTED_MODULE_10__providers_srvGeneral__["a" /* SrvGeneral */], __WEBPACK_IMPORTED_MODULE_9__providers_srvAliment__["a" /* SrvAliment */], __WEBPACK_IMPORTED_MODULE_6__pipes_srvSort__["a" /* SrvSort */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_9__providers_srvAliment__["a" /* SrvAliment */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_10__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
], AlimentPage);

//# sourceMappingURL=aliment.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvSort; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SrvSort = (function () {
    function SrvSort() {
        var _this = this;
        // Sort item and Unique item
        this.transform = function (array, args) {
            array = _this.deleteDuplicateData(array, args);
            return __WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"](array, args);
        };
        this.deleteDuplicateData = function (arr, keyname) {
            var keys = [];
            var resultArray = [];
            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                var item = arr_1[_i];
                var key = item[keyname];
                if (keys.indexOf(key) === -1) {
                    // add it to our keys array
                    keys.push(key);
                    // add it to our resultArray array
                    resultArray.push(item);
                }
            }
            return resultArray;
        };
    }
    return SrvSort;
}());
SrvSort = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: "OrderBy"
    })
], SrvSort);

//# sourceMappingURL=srvSort.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dataTabs_data_data__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvHttp__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvData__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_srvGeneral__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dataTabs_addData_addData__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dataTabs_sendData_sendData__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var DataTabsPage = DataTabsPage_1 = (function () {
    function DataTabsPage(appCtrl, srvHttp, srvdata, srvGeneral, navCtrl, translate, ngZone) {
        var _this = this;
        this.appCtrl = appCtrl;
        this.srvHttp = srvHttp;
        this.srvdata = srvdata;
        this.srvGeneral = srvGeneral;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.ngZone = ngZone;
        this.valueforngif = true;
        this.dataPage = __WEBPACK_IMPORTED_MODULE_4__dataTabs_data_data__["a" /* DataPage */];
        this.tabIndex = 0;
        this.addDataPage = __WEBPACK_IMPORTED_MODULE_9__dataTabs_addData_addData__["a" /* AddDataPage */];
        this.sendDataPage = __WEBPACK_IMPORTED_MODULE_10__dataTabs_sendData_sendData__["a" /* SendDataPage */];
        this.listIcon = 'calculListeOn';
        this.addIcon = 'calculMnAl';
        this.syncIcon = 'syncData';
        this.sentIcon = 'sentData';
        this.user = {};
        this.refreshData = function () {
            _this.srvGeneral.setLoader(true, _this.translate.instant("msg.chargement_en_cours"));
            _this.user = JSON.parse(localStorage.getItem('User'));
            if (_this.user && _this.user.num && _this.user.num.length > 0) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.set('user', _this.user.num);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.srvdata.getMesDonnees(options)
                    .timeout(10000)
                    .map(function (res) {
                    localStorage.setItem("lastData", JSON.stringify(res.json()));
                })
                    .subscribe(function (data) {
                    _this.appCtrl.getRootNav().push(DataTabsPage_1);
                    _this.srvGeneral.setLoader(false);
                    localStorage.removeItem("localData");
                }, function (err) {
                    _this.appCtrl.getRootNav().setRoot(DataTabsPage_1);
                    _this.srvGeneral.setLoader(false);
                    _this.srvHttp.handleError(err);
                });
            }
        };
        this.changeOnOff = function (event) {
            if (event.index == 0) {
                _this.listIcon = 'calculListeOn';
                _this.addIcon = 'calculMnAl';
                _this.syncIcon = 'syncData';
                _this.sentIcon = 'sentData';
            }
            else if (event.index == 1) {
                _this.listIcon = 'calculListe';
                _this.addIcon = 'calculMnAlOn';
                _this.syncIcon = 'syncData';
                _this.sentIcon = 'sentData';
            }
            else if (event.index == 2) {
                _this.listIcon = 'calculListe';
                _this.addIcon = 'calculMnAl';
                _this.syncIcon = 'syncData';
                _this.sentIcon = 'sentData';
            }
            else if (event.index == 3) {
                _this.listIcon = 'calculListe';
                _this.addIcon = 'calculMnAl';
                _this.syncIcon = 'syncData';
                _this.sentIcon = 'sentDataOn';
            }
        };
        this.goHome = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], {}, { animate: true, direction: 'back' });
        };
    }
    return DataTabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('myTabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Tabs */])
], DataTabsPage.prototype, "tabRef", void 0);
DataTabsPage = DataTabsPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/dataTabs/dataTabs.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon class="ion-ios-home"></ion-icon>         \n      </button>\n    </ion-buttons>\n\n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n        <img alt="webDia" src="assets/img/logoNew_hug.png" height="30">&nbsp;&nbsp;<span style="position:absolute; top: 7px"></span>\n      </div> \n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-tabs #myTabs>\n      <ion-tab [root]="dataPage" tabTitle="{{\'menu.data\'|translate}}" tabIcon={{listIcon}} (ionSelect)="changeOnOff($event);"  ></ion-tab>\n      <ion-tab [root]="addDataPage" tabTitle="{{\'msg.ajout\'|translate}}" tabIcon={{addIcon}} (ionSelect)="changeOnOff($event)"></ion-tab>\n      <ion-tab tabTitle="{{\'msg.synchronisation\'|translate}}" tabIcon={{syncIcon}} (ionSelect)="changeOnOff($event);refreshData();"></ion-tab>\n      <ion-tab [root]="sendDataPage" tabTitle="{{\'msg.envoyer\'|translate}}" tabIcon={{sentIcon}} (ionSelect)="changeOnOff($event)"></ion-tab>\n    </ion-tabs>\n\n</ion-content>\n \n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/dataTabs/dataTabs.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_8__providers_srvGeneral__["a" /* SrvGeneral */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Tabs */], __WEBPACK_IMPORTED_MODULE_4__dataTabs_data_data__["a" /* DataPage */], __WEBPACK_IMPORTED_MODULE_10__dataTabs_sendData_sendData__["a" /* SendDataPage */], __WEBPACK_IMPORTED_MODULE_9__dataTabs_addData_addData__["a" /* AddDataPage */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_6__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_7__providers_srvData__["a" /* SrvData */],
        __WEBPACK_IMPORTED_MODULE_8__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], DataTabsPage);

var DataTabsPage_1;
//# sourceMappingURL=dataTabs.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { IConfig } from '../../../models/config';

var DataPage = (function () {
    function DataPage(http, navCtrl, formBuilder) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.affData = function () {
            _this.lstData = JSON.parse(localStorage.getItem("lastData"));
        };
        this.affDataL = function () {
            _this.lstDataLocal = JSON.parse(localStorage.getItem("localData"));
        };
        this.isHidden = function () {
            _this.lstDataLocal = JSON.parse(localStorage.getItem("localData"));
            if (_this.lstDataLocal != null || _this.lstDataLocal != "[]") {
                return true;
            }
            else {
                return false;
            }
        };
        this.goHome = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
            //    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
        };
        this.affData();
    }
    DataPage.prototype.ionViewWillEnter = function () {
        this.affData();
        this.affDataL();
    };
    return DataPage;
}());
DataPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-data',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/dataTabs/data/data.html"*/'<ion-content padding class="background-color-donnees">\n  <div style="padding-bottom:10px;">\n    <span class="txt-title">{{"frm.data.titre" | translate}}</span>\n    <br>\n  </div>\n  <div style="color:#000;"  [hidden]="isHidden()">{{"msg.data.locales" | translate}}</div>\n  <div  *ngFor="let data of lstDataLocal" style="margin-bottom:20px;" [hidden]="isHidden()" >\n    <div  class="roundRect" style="margin-bottom:10px;">\n      {{data.dateInj}} - {{ data.timeInj }}\n      <br>\n      {{"msg.hdc"|translate}}: {{ data.nbHdc }}\n      <br>\n      {{"msg.glycemie"|translate}}: {{ data.glycemie }}\n      <br>\n      {{"msg.injection"|translate}}: {{ data.injection }}     \n    </div>\n  </div>\n  <div style="color:#000;">{{"msg.data.dernieresDonnees" | translate}}</div>  \n  <div *ngFor="let datad of lstData" style="margin-bottom:10px;">\n    <div  class="roundRect" style="margin-bottom:10px;">\n      {{datad.dateInj}} - {{ datad.timeInj }}\n        <br>\n        {{"msg.hdc"|translate}}: {{ datad.nbHdc }}\n        <br>\n        {{"msg.glycemie"|translate}}: {{ datad.glycemie }}\n        <br>\n        {{"msg.injection"|translate}}: {{ datad.injection }}     \n      </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/dataTabs/data/data.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], DataPage);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvData__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_srvHttp__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddDataPage = AddDataPage_1 = (function () {
    function AddDataPage(appCtrl, srvData, srvHttp, platform, srvGeneral, formBuilder, translate) {
        var _this = this;
        this.appCtrl = appCtrl;
        this.srvData = srvData;
        this.srvHttp = srvHttp;
        this.platform = platform;
        this.srvGeneral = srvGeneral;
        this.formBuilder = formBuilder;
        this.translate = translate;
        this.data = {};
        this.user = {};
        this.trancheHoraire = 'u1';
        this.repas = [];
        this.ionViewDidLoad = function () {
            // Permet d'attendre la fin du chargement de la page et de la traduction
            _this.platform.ready().then(function () {
                _this.initForm();
            });
        };
        this.insertData = function () {
            _this.srvGeneral.setLoader(true, _this.translate.instant("msg.chargement_en_cours"));
            _this.user = JSON.parse(localStorage.getItem('User'));
            if (_this.user && _this.user.num && _this.user.num.length > 0) {
                var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
                headers.set('user', _this.user.num);
                var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.srvData.getMesDonnees(options)
                    .timeout(10000)
                    .subscribe(function (data) {
                    _this.appCtrl.getRootNav().setRoot(AddDataPage_1);
                    _this.srvGeneral.setLoader(false);
                }, function (err) {
                    _this.appCtrl.getRootNav().setRoot(AddDataPage_1);
                    _this.srvGeneral.setLoader(false);
                    _this.srvHttp.handleError(err);
                });
            }
        };
        this.validateAddData = function (formData) {
            if (_this.formData.valid) {
                _this.srvData.setDataToServer(formData);
                _this.clearNum = 0;
                _this.clearCom = "";
            }
        };
        this.initForm = function () {
            var curtDate = new Date().toISOString();
            _this.formData = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
                trancheHoraire: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.trancheHoraire, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                currentDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](curtDate),
                nbHdc: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](""),
                glycemie: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](""),
                injection: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](""),
                commentaire: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]("")
            });
        };
        this.repas = this.srvGeneral.initTrancheHoraire();
        this.trancheHoraire = this.srvGeneral.getTrancheHoraire();
        this.initForm();
    }
    return AddDataPage;
}());
AddDataPage = AddDataPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-addData',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/dataTabs/addData/addData.html"*/'<ion-content padding class="background-color-donnees">\n  <div>\n    <span class="txt-title">{{"frm.data.titre" | translate}}</span>\n  </div>\n\n  <form (submit)="validateAddData(formData.value)" [formGroup]="formData" >\n\n    <ion-list>\n\n      <ion-grid>\n\n        <ion-row no-padding no-margin>\n          <ion-col>\n            <ion-item no-lines class="txt-title-D">\n              <ion-select no-padding   style="padding-left:8px;padding-right:5px;" formControlName="trancheHoraire" class="selectOption" cancelText="{{\'button.annuler\'|translate}}" okText="{{\'button.ok\'|translate}}">      \n                <ion-option *ngFor="let item of repas" value="{{item.value}}">{{item.text}}</ion-option>           \n              </ion-select>          \n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item no-lines class="txt-title-D">\n              <ion-label style="padding-left:8px;">Date</ion-label>\n              <ion-datetime formControlName="currentDate" displayFormat="DD MMM YYYY - HH:mm" pickerFormat="DD MMM YYYY - HH:mm" cancelText="{{\'button.annuler\'|translate}}" doneText="{{\'button.ok\'|translate}}"></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item no-lines class="txt-title-D">\n              <ion-input [value]="clearNum" type="number" autofocus formControlName="nbHdc" placeholder=\'{{"frm.monAliment.nbHdc"|translate}}\'></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item no-lines class="txt-title-D">\n              <ion-input [value]="clearNum" type="number" formControlName="glycemie" placeholder=\'{{"msg.glycemie"|translate}}\'></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item no-lines class="txt-title-D">\n              <ion-input [value]="clearNum" type="number" formControlName="injection" placeholder=\'{{"msg.injection"|translate}}\'></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item no-lines class="txt-title-D">\n              <ion-textarea [value]="clearCom" formControlName="commentaire" placeholder=\'{{"frm.data.commentaire"|translate}}\'></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n      <ion-grid>\n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n            <button ion-button class="button-ok" type="submit" block>{{"button.ok"|translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> \n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/dataTabs/addData/addData.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__["a" /* SrvGeneral */], __WEBPACK_IMPORTED_MODULE_6__providers_srvData__["a" /* SrvData */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_6__providers_srvData__["a" /* SrvData */],
        __WEBPACK_IMPORTED_MODULE_8__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
], AddDataPage);

var AddDataPage_1;
//# sourceMappingURL=addData.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvData__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_srvHttp__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_srvGeneral__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SendDataPage = (function () {
    function SendDataPage(http, srvData, srvHttp, navCtrl, srvGeneral, translate) {
        var _this = this;
        this.http = http;
        this.srvData = srvData;
        this.srvHttp = srvHttp;
        this.navCtrl = navCtrl;
        this.srvGeneral = srvGeneral;
        this.translate = translate;
        this.validateSendMail = function (validation, frmSendMail) {
            if (validation) {
                if (_this.formSendMail.valid) {
                    localStorage.setItem("mailTranfert", frmSendMail.mail);
                    _this.srvData.sendDataMail(frmSendMail.mail);
                }
                else {
                    _this.srvGeneral.setMessage(_this.translate.instant("msg.adresseEmailInvalide"));
                }
            }
            else {
                _this.mail = localStorage.getItem("mailTranfert");
                _this.formSendMail = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
                    mail: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](_this.mail == null ? "" : _this.mail, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                    ])),
                });
            }
        };
        this.goHome = function () {
            //    this.navCtrl.push( HomePage, {}, {direction: 'back'} );
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], {}, { animate: true, direction: 'back' });
        };
        this.validateSendMail(false, null);
    }
    return SendDataPage;
}());
SendDataPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-sendData',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/dataTabs/sendData/sendData.html"*/'<ion-content padding class="background-color-donnees">\n  <div>\n    <span class="txt-title">{{"frm.data.titre" | translate}}</span>\n  </div>\n  <div  style="margin-top:10px;"class="roundRect_Sent">\n    <span class="txt-title-D" style="font-size:1.4em;">{{"frm.transfert.envoi"|translate}}</span>\n  </div>\n  <br>\n\n  <form (submit)="validateSendMail(true, formSendMail.value)" [formGroup]="formSendMail">\n\n    <ion-list> \n      <ion-item class="list-conf-rb itemConf">\n        <ion-input type="text" formControlName="mail" placeholder=\'{{"msg.inscription.email"|translate}}\'></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-grid>\n      <ion-row class="center">  \n        <ion-col width-90 class="center-col">\n          <button ion-button class="button-ok" type="submit" block>{{"button.ok"|translate}}</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>  \n\n  </form>\n\n</ion-content>\n '/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/dataTabs/sendData/sendData.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_9__providers_srvGeneral__["a" /* SrvGeneral */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_7__providers_srvData__["a" /* SrvData */],
        __WEBPACK_IMPORTED_MODULE_8__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_9__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], SendDataPage);

//# sourceMappingURL=sendData.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_srvGeneral__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PopupPage = (function () {
    function PopupPage(navCtrl, translate, alertCtrl, srvGeneral) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.srvGeneral = srvGeneral;
        this.showAlert = function () {
            _this.srvGeneral.setMessage(_this.translate.instant("msg.conditionUtilisation"));
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */], {}, { animate: true, direction: 'back' });
        };
        this.goHome = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
        };
        this.showAlert();
    }
    return PopupPage;
}());
PopupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-popup',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/pop/popup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button>\n       <ion-icon class="ion-ios-home"></ion-icon>\n      </button>\n    </ion-buttons>\n    \n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n        <img alt="webDia" src="assets/img/logoNew_hug.png" height="30">&nbsp;&nbsp;<span style="position:absolute; top: 7px"></span>\n      </div> \n    </ion-title>\n    \n    <ion-buttons right>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<!--<ion-content padding class="background-image">-->\n<ion-content padding>  \n\n  <div class="title" style="text-align: center">\n    <img style=" margin-top: 5px;max-width:500px;width: 80%" alt="WebDia" src="assets/img/bandeau.png">\n  </div>\n  <hr>\n\n  <p class="center">{{"msg.site.citation.texte" | translate}}</p>\n  <p class="right" style="color:dimgrey;font-size: 0.9em;">{{"msg.site.citation.nom" | translate}}</p>\n\n</ion-content>\n\n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/pop/popup.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_srvGeneral__["a" /* SrvGeneral */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_srvGeneral__["a" /* SrvGeneral */]])
], PopupPage);

//# sourceMappingURL=popup.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LanguePage = (function () {
    function LanguePage(events, navCtrl, translate) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.goHome = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
            //this.navCtrl.setRoot( HomePage, {}, { animate: true, direction: 'back' });
        };
        this.changeLangue = function (langue) {
            localStorage.setItem("langue", langue);
            _this.translate.use(langue);
            // Appel EVENT 'changeMenuLanguage' dans app.components.ts
            _this.events.publish('changeMenuLanguage');
        };
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.langue = localStorage.getItem("langue");
    }
    return LanguePage;
}());
LanguePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-langue',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/langue/langue.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon class="ion-ios-home"></ion-icon>        \n      </button>\n    </ion-buttons>\n\n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n        <img alt="webDia" src="assets/img/logoNew_hug.png" height="30">&nbsp;&nbsp;<span style="position:absolute; top: 7px"></span>\n      </div> \n    </ion-title>\n\n    <ion-buttons right>\n        <button ion-button menuToggle>\n          <ion-icon class="ion-ios-menu"></ion-icon>\n        </button>\n      </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-color-favoris">\n    <div style="height:30px;">\n      <span class="txt-title" style="font-weight: bold;font-family:">{{"frm.langue.titre" | translate}}</span>\n    </div>\n\n    \n\n      <ion-list radio-group no-lines>\n        <ion-item style="padding:3px 10px 3px 3px;border-bottom:1px solid grey">\n          <ion-radio  item-left  color="myck" class="ckCss" value="fr" [checked]="langue==\'fr\'" (click)="changeLangue(\'fr\')"></ion-radio>\n          <ion-label>{{"frm.langue.francais"|translate}}</ion-label>\n        </ion-item>\n        <ion-item style="padding:3px 10px 3px 3px;border-bottom:1px solid grey">\n          <ion-radio  item-left  color="myck" class="ckCss" value="en" [checked]="langue==\'en\'" (click)="changeLangue(\'en\')"></ion-radio>\n          <ion-label>{{"frm.langue.anglais"|translate}}</ion-label>\n        </ion-item>\n        <ion-item style="padding:3px 10px 3px 3px;">\n          <ion-radio  item-left color="myck" class="ckCss" value="de" [checked]="langue==\'de\'" (click)="changeLangue(\'de\')"></ion-radio>\n          <ion-label>{{"frm.langue.allemand"|translate}}</ion-label>\n        </ion-item>\n      </ion-list>\n\n      \n\n    <ion-grid>\n      <ion-row class="center">  \n        <ion-col width-90 class="center-col">\n          <button ion-button  class="button-ok" block (click)="goHome()">{{"button.ok"|translate}}</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n\n</ion-content>\n \n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/langue/langue.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], LanguePage);

//# sourceMappingURL=langue.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InformationPage = (function () {
    function InformationPage(navCtrl, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.goHome = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
            //    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
        };
    }
    return InformationPage;
}());
InformationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-information',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/information/information.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon class="ion-ios-home"></ion-icon>        \n      </button>\n    </ion-buttons>\n\n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n        <img alt="webDia" src="assets/img/logoNew_hug.png" height="30">&nbsp;&nbsp;<span style="position:absolute; top: 7px"></span>\n      </div> \n    </ion-title>\n\n    <ion-buttons right>\n        <button ion-button menuToggle>\n          <ion-icon class="ion-ios-menu"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-color-app">\n  <div >\n    <h3><font color="#008cba" size="5rem">{{"frm.info.titre" | translate}}</font></h3>\n  </div>\n\n  <div class="roundRect" >\n    <span [innerHtml]="\'msg.conditionUtilisation1\'|translate"></span>\n  </div>\n  <br>\n  <div class="roundRect">\n    <span [innerHtml]="\'msg.conditionUtilisation2\'|translate"></span>\n  </div>\n  <br>\n  <div class="roundRect">\n    <span [innerHtml]="\'msg.conditionUtilisation3\'|translate"></span>\n  </div>\n  <br>\n  <div class="roundRect">\n    <span [innerHtml]="\'msg.conditionUtilisation4\'|translate"></span>\n  </div>\n  <br>\n  <div class="roundRect">\n    <span [innerHtml]="\'msg.conditionUtilisation5\'|translate"></span>\n  </div>\n  <br>\n  <div class="roundRect">\n    <span [innerHtml]="\'msg.conditionUtilisation6\'|translate"></span>\n  </div>\n  <br>\n  <div class="dividerBlock"></div>\n  <br>\n  <div>\n    <h3>{{"msg.conditionGenerales" | translate}}</h3>\n  </div>\n  <div class="roundRect">\n    <span [innerHtml]="\'msg.conditionUtilisation7\'|translate"></span>\n  </div>\n  <br>\n  <div class="roundRect">\n    <span [innerHtml]="\'msg.conditionUtilisation8\'|translate"></span>\n  </div>\n  <br>\n  <div class="roundRect">\n    <span [innerHtml]="\'msg.conditionUtilisation9\'|translate"></span>\n  </div> \n  \n  <ion-grid>\n    <ion-row class="center">  \n      <ion-col width-90 class="center-col">\n        <button ion-button class="button-ok" block (click)="goHome()">{{"button.ok"|translate}}</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid> \n\n</ion-content>\n\n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/information/information.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], InformationPage);

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_srvHttp__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvAuth__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChangePasswordPage = (function () {
    function ChangePasswordPage(srvHttp, srvAuth, srvGeneral, navCtrl, translate) {
        var _this = this;
        this.srvHttp = srvHttp;
        this.srvAuth = srvAuth;
        this.srvGeneral = srvGeneral;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.oldPasswod = "";
        this.newPassword1 = "";
        this.newPassword2 = "";
        this.buttonDisabled = true;
        this.onChangeOldPassword = function (data) {
            _this.oldPasswod = data;
            if (_this.oldPasswod.length > 0 && _this.newPassword1.length > 0 && _this.newPassword2.length > 0) {
                _this.buttonDisabled = null;
            }
            else {
                _this.buttonDisabled = true;
            }
        };
        this.onChangeNewPassword1 = function (data) {
            _this.newPassword1 = data;
            if (_this.oldPasswod.length > 0 && _this.newPassword1.length > 0 && _this.newPassword2.length > 0) {
                _this.buttonDisabled = null;
            }
            else {
                _this.buttonDisabled = true;
            }
        };
        this.onChangeNewPassword2 = function (data) {
            _this.newPassword2 = data;
            if (_this.oldPasswod.length > 0 && _this.newPassword1.length > 0 && _this.newPassword2.length > 0) {
                _this.buttonDisabled = null;
            }
            else {
                _this.buttonDisabled = true;
            }
        };
        this.validateChangePassword = function () {
            if (_this.formChangePassword.status === 'VALID') {
                if (_this.formChangePassword.value.oldPassword.length == 0) {
                    _this.srvGeneral.setMessage(_this.translate.instant("msg.saisieAncienMotdepasse"));
                }
                else if (_this.formChangePassword.value.newPassword1.length < 5) {
                    _this.srvGeneral.setMessage(_this.translate.instant("msg.saisieMinimumCar"));
                }
                else if (_this.formChangePassword.value.newPassword1.length == 0) {
                    _this.srvGeneral.setMessage(_this.translate.instant("msg.saisieMotdepasse"));
                }
                else if (_this.formChangePassword.value.newPassword1 != _this.formChangePassword.value.newPassword2) {
                    _this.srvGeneral.setMessage(_this.translate.instant("msg.saisieMotdepasseDifferent"));
                }
                else {
                    _this.srvAuth.changePassword(_this.formChangePassword.value.oldPassword, _this.formChangePassword.value.newPassword1)
                        .subscribe(function (data) {
                        _this.srvGeneral.setMessage(_this.translate.instant("msg.valideMotdepasseModifie"));
                        _this.goHome();
                    }, function (err) { return _this.srvHttp.handleError(err); });
                }
            }
        };
        this.goHome = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], {}, { animate: true, direction: 'back' });
        };
        this.formChangePassword = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            oldPassword: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required),
            newPassword1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required),
            newPassword2: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required)
        });
    }
    return ChangePasswordPage;
}());
ChangePasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/changePassword/changePassword.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon class="ion-ios-home"></ion-icon>        \n      </button>\n    </ion-buttons>\n    <ion-title>\n      <div class="title center" style="padding-top: 10px;">\n        {{"frm.motdepasse.titre"|translate}}\n      </div>\n    </ion-title>\n    <ion-buttons right>\n          <button ion-button menuToggle>\n            <ion-icon class="ion-ios-menu"></ion-icon>\n          </button>\n        </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-color-login" no-lines >\n\n  <form (submit)="validateChangePassword()" [formGroup]="formChangePassword">\n\n    <ion-list>\n\n      <ion-item class="list-conf-rb">        \n        <ion-input type="password" autofocus formControlName="oldPassword" placeholder=\'{{"msg.motdepasse"|translate}}\' (keyup)="onChangeOldPassword($event.target.value)"></ion-input>\n      </ion-item>\n      <br>\n      <ion-item class="list-conf-rb">\n        <ion-input type="password" formControlName="newPassword1" placeholder=\'{{"msg.newMotdepasse"|translate}}\' (keyup)="onChangeNewPassword1($event.target.value)"></ion-input>\n      </ion-item>\n      <br>\n      <ion-item class="list-conf-rb">\n        <ion-input type="password" formControlName="newPassword2" placeholder=\'{{"msg.reNewMotdepasse"|translate}}\' (keyup)="onChangeNewPassword2($event.target.value)"></ion-input>\n      </ion-item>\n      <br>\n      <ion-grid>\n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n            <div class="dividerBlock"></div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n            <button disabled={{buttonDisabled}} ion-button color="myck" type="submit" block>{{"button.ok"|translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> \n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n \n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/changePassword/changePassword.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_srvHttp__["a" /* SrvHttp */], __WEBPACK_IMPORTED_MODULE_6__providers_srvAuth__["a" /* SrvAuth */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_6__providers_srvAuth__["a" /* SrvAuth */],
        __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], ChangePasswordPage);

//# sourceMappingURL=changePassword.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(257);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_srvSort__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_srvHttp__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_srvInit__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_srvData__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_srvConfig__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_srvSafeHtml__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_langue_langue__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_calcul_calcul__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_srvGeneral__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_srvAliment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_srvInscription__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_favoris_favoris__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_dataTabs_data_data__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_dataTabs_dataTabs__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_dataTabs_addData_addData__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_dataTabs_sendData_sendData__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_information_information__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_configuration_configuration__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_changePassword_changePassword__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_pop_popup__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_Inscription_subscription__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_alimentTabs_alimentTabs__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_alimentTabs_aliment_aliment__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_alimentTabs_quantite_quantite__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_alimentTabs_ajoutAliment_ajoutAliment__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_alimentTabs_familleAliment_familleAliment__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//import { TranslateModule } from 'ng2-translate/ng2-translate';





























function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_14__pipes_srvSort__["a" /* SrvSort */],
            __WEBPACK_IMPORTED_MODULE_28__pages_dataTabs_data_data__["a" /* DataPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_langue_langue__["a" /* LanguePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_calcul_calcul__["a" /* CalculPage */],
            __WEBPACK_IMPORTED_MODULE_21__pipes_srvSafeHtml__["a" /* SrvSafeHtml */],
            __WEBPACK_IMPORTED_MODULE_27__pages_favoris_favoris__["a" /* FavorisPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_dataTabs_addData_addData__["a" /* AddDataPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_alimentTabs_aliment_aliment__["a" /* AlimentPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_dataTabs_dataTabs__["a" /* DataTabsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_dataTabs_sendData_sendData__["a" /* SendDataPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_alimentTabs_quantite_quantite__["a" /* QuantitePage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_information_information__["a" /* InformationPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_alimentTabs_alimentTabs__["a" /* AlimentTabsPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_alimentTabs_ajoutAliment_ajoutAliment__["a" /* AjoutAlimentPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_configuration_configuration__["a" /* ConfigurationPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_alimentTabs_familleAliment_familleAliment__["a" /* FamilleAlimentPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_changePassword_changePassword__["a" /* ChangePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_pop_popup__["a" /* PopupPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_Inscription_subscription__["a" /* SubscriptionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {
                mode: 'md',
                tabsPlacement: 'bottom'
            }, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HttpClient */]]
                }
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_28__pages_dataTabs_data_data__["a" /* DataPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_langue_langue__["a" /* LanguePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_calcul_calcul__["a" /* CalculPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_favoris_favoris__["a" /* FavorisPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_dataTabs_addData_addData__["a" /* AddDataPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_alimentTabs_aliment_aliment__["a" /* AlimentPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_dataTabs_dataTabs__["a" /* DataTabsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_dataTabs_sendData_sendData__["a" /* SendDataPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_alimentTabs_quantite_quantite__["a" /* QuantitePage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_information_information__["a" /* InformationPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_alimentTabs_alimentTabs__["a" /* AlimentTabsPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_alimentTabs_ajoutAliment_ajoutAliment__["a" /* AjoutAlimentPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_configuration_configuration__["a" /* ConfigurationPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_alimentTabs_familleAliment_familleAliment__["a" /* FamilleAlimentPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_changePassword_changePassword__["a" /* ChangePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_pop_popup__["a" /* PopupPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_Inscription_subscription__["a" /* SubscriptionPage */]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["v" /* ErrorHandler */],
                useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicErrorHandler */]
            },
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_24__providers_srvGeneral__["a" /* SrvGeneral */],
            __WEBPACK_IMPORTED_MODULE_25__providers_srvAliment__["a" /* SrvAliment */],
            __WEBPACK_IMPORTED_MODULE_16__providers_srvHttp__["a" /* SrvHttp */],
            __WEBPACK_IMPORTED_MODULE_17__providers_srvInit__["a" /* SrvInit */],
            __WEBPACK_IMPORTED_MODULE_18__providers_srvData__["a" /* SrvData */],
            __WEBPACK_IMPORTED_MODULE_19__providers_srvConfig__["a" /* SrvConfig */],
            __WEBPACK_IMPORTED_MODULE_26__providers_srvInscription__["a" /* SrvInscription */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvHttp__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_srvAuth__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_srvInit__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_langue_langue__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_information_information__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_configuration_configuration__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_changePassword_changePassword__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_Inscription_subscription__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MyApp = (function () {
    function MyApp(events, srvHttp, srvInit, srvAuth, keyboard, platform, statusBar, menuCtrl, splashScreen, translate) {
        var _this = this;
        this.events = events;
        this.srvHttp = srvHttp;
        this.srvInit = srvInit;
        this.srvAuth = srvAuth;
        this.keyboard = keyboard;
        this.platform = platform;
        this.statusBar = statusBar;
        this.menuCtrl = menuCtrl;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.user = {};
        // make HomePage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.initMenu = function () {
            /*
            <button ion-button color="primary">Secondary</button>
            <button ion-button color="secondary">Secondary</button>
            <button ion-button color="danger">Danger</button>
            <button ion-button color="light">Light</button>
            <button ion-button color="dark">Dark</button>
            */
            _this.translate.get("menu.information").subscribe(function (value) {
                _this.menuConnect = [
                    { title: _this.translate.instant("menu.deconnexion"), component: 'deconnexion', icon: 'ion-ios-deconnexion', function: true },
                    { title: _this.translate.instant("menu.information"), component: __WEBPACK_IMPORTED_MODULE_12__pages_information_information__["a" /* InformationPage */], icon: '', function: false },
                    { title: _this.translate.instant("msg.connexion.utilisateur"), component: __WEBPACK_IMPORTED_MODULE_15__pages_Inscription_subscription__["a" /* SubscriptionPage */], icon: '', function: false },
                    { title: _this.translate.instant("menu.configuration"), component: __WEBPACK_IMPORTED_MODULE_13__pages_configuration_configuration__["a" /* ConfigurationPage */], icon: '', function: false },
                    { title: _this.translate.instant("menu.chPassword"), component: __WEBPACK_IMPORTED_MODULE_14__pages_changePassword_changePassword__["a" /* ChangePasswordPage */], icon: '', function: false },
                    { title: _this.translate.instant("menu.langue"), component: __WEBPACK_IMPORTED_MODULE_11__pages_langue_langue__["a" /* LanguePage */], icon: '', function: false }
                ];
                _this.menuDisconnect = [
                    { title: _this.translate.instant("menu.connexion"), component: __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */], icon: 'ion-ios-connexion', function: false },
                    { title: _this.translate.instant("menu.information"), component: __WEBPACK_IMPORTED_MODULE_12__pages_information_information__["a" /* InformationPage */], icon: '', function: false },
                    { title: _this.translate.instant("menu.configuration"), component: __WEBPACK_IMPORTED_MODULE_13__pages_configuration_configuration__["a" /* ConfigurationPage */], icon: '', function: false },
                    { title: _this.translate.instant("menu.langue"), component: __WEBPACK_IMPORTED_MODULE_11__pages_langue_langue__["a" /* LanguePage */], icon: '', function: false }
                ];
                //          this.menuCtrl.enable(true, 'menuConnect');
                //          this.menuCtrl.enable(false, 'menuDisconnect');
            });
        };
        this.initializeApp = function () {
            _this.platform.ready().then(function () {
                _this.keyboard.onKeyboardShow().subscribe(function () {
                    document.body.classList.add('keyboard-open');
                });
                _this.keyboard.onKeyboardHide().subscribe(function () {
                    document.body.classList.remove('keyboard-open');
                });
                _this.statusBar.styleDefault();
                _this.splashScreen.hide();
            });
        };
        this.deconnexion = function () {
            _this.srvAuth.deconnexion()
                .timeout(10000)
                .subscribe(function (data) {
                localStorage.removeItem('User');
                localStorage.removeItem("Config");
                localStorage.removeItem("Donnees");
                localStorage.removeItem("mesRepas");
                // affiche le menu disconnect
                _this.menuCtrl.enable(false, 'menuConnect');
                _this.menuCtrl.enable(true, 'menuDisconnect');
            }, function (err) {
                _this.srvHttp.handleError(err);
            });
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
        };
        this.openMenuPage = function (page) {
            // close the menu when clicking a link from the menu
            _this.menuCtrl.close();
            if (page.function) {
                if (page.component === 'deconnexion') {
                    _this.deconnexion();
                }
            }
            else {
                // navigate to the new page if it is not the current page
                _this.nav.setRoot(page.component);
            }
        };
        this.initTranslation = function () {
            var langue = localStorage.getItem("langue");
            if (langue != null) {
                _this.translate.use(langue);
            }
            else {
                var userLang = navigator.language.split('-')[0]; // use navigator lang if available
                userLang = /(fr|en|de)/gi.test(userLang) ? userLang : 'fr';
                // this language will be used as a fallback when a translation isn't found in the current language
                _this.translate.setDefaultLang('fr');
                // the lang to use, if the lang isn't available, it will use the current loader to get them
                _this.translate.use(userLang);
                localStorage.setItem("langue", userLang);
            }
        };
        this.initializeApp();
        //Initialiser le cookie Access
        if (localStorage.getItem('access') == null) {
            localStorage.setItem('access', '0');
        }
        //initialize ng2-translate
        this.initTranslation();
        // Init Menu
        this.initMenu();
        // Init LocalStorage
        this.srvInit.initStorageAliment();
        // Events appelé dans langue.ts lors du changement de langue
        this.events.subscribe('changeMenuLanguage', function () {
            _this.initMenu();
        });
    }
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/app/app.html"*/'<ion-menu [content]="content" id="menuConnect" >\n\n<!--\n  <ion-header>\n    <ion-toolbar>\n    </ion-toolbar>\n  </ion-header>\n-->  \n<ion-header  class="background-color-menu " color="myBg">\n    <ion-toolbar class="background-color-menu paddLigne" color="myBg">\n      <ion-title class="background-color-menu " style="vertical-align:middle" color="myBg" ><ion-icon menuClose detail-none style=" float:right; vertical-align:middle" class="ion-ios-delete"></ion-icon></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <ion-content class="background-color-menu " color="myBg" >\n    <ion-list class="background-color-menu paddLigne paddBlock" color="myBg">\n      <button class="background-color-menu paddLigne" icon-end color="myBg" ion-item *ngFor="let p of menuConnect" (click)="openMenuPage(p)" >\n          {{p.title}}<ion-icon item-right  [class]="p.icon"></ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-menu [content]="content" id="menuDisconnect" >\n\n  <ion-header  class="background-color-menu " color="myBg">\n    <ion-toolbar class="background-color-menu paddLigne" color="myBg">\n      <ion-title class="background-color-menu " style="vertical-align:middle" color="myBg" ><ion-icon menuClose detail-none style=" float:right; vertical-align:middle" class="ion-ios-delete"></ion-icon></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="background-color-menu  " color="myBg">\n    <ion-list class="background-color-menu paddLigne paddBlock" color="myBg">\n      <button  class="background-color-menu  paddLigne item-icon-right"  color="myBg" ion-item *ngFor="let p of menuDisconnect" (click)="openMenuPage(p)" >\n         {{p.title}}<ion-icon item-right  [class]="p.icon"></ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/app/app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_7__providers_srvHttp__["a" /* SrvHttp */], __WEBPACK_IMPORTED_MODULE_8__providers_srvAuth__["a" /* SrvAuth */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_7__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_9__providers_srvInit__["a" /* SrvInit */],
        __WEBPACK_IMPORTED_MODULE_8__providers_srvAuth__["a" /* SrvAuth */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvSafeHtml; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SrvSafeHtml = (function () {
    function SrvSafeHtml(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SrvSafeHtml.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    };
    return SrvSafeHtml;
}());
SrvSafeHtml = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'SafeHtml'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], SrvSafeHtml);

//# sourceMappingURL=srvSafeHtml.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_srvHttp__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvGeneral__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SrvData = (function () {
    function SrvData(http, srvHttp, srvGeneral, translate) {
        var _this = this;
        this.http = http;
        this.srvHttp = srvHttp;
        this.srvGeneral = srvGeneral;
        this.translate = translate;
        this.user = {};
        this.data = [];
        this.config = {};
        this.aliments = {};
        this.lstDataD = {};
        this.calculInjection = function (formCalcul, nbHdc) {
            var msgErr;
            var msgSubTitle;
            var msgInjection;
            var injection = 0;
            var calculInjection = true;
            if (formCalcul.nbHdc == null) {
                formCalcul.nbHdc = 0;
            }
            nbHdc += formCalcul.nbHdc;
            var correction = _this.getCorrection();
            if ((formCalcul.glycemie == null || formCalcul.glycemie == 0) && nbHdc != null && nbHdc > 0) {
                if (_this.config[0].valeur > 0) {
                    formCalcul.glycemie = _this.config[0].valeur; // Glycemie = Valeur recherchee
                    _this.data.glycemieAuto = 1;
                }
                else {
                    calculInjection = false;
                    msgErr = _this.translate.instant("msg.noConfig");
                }
            }
            if (calculInjection) {
                if (formCalcul.unite != null && formCalcul.unite > 0 && formCalcul.hdc != null && formCalcul.hdc > 0) {
                    if (formCalcul.glycemie != null && formCalcul.glycemie > 0) {
                        if (_this.config[0].valeur > 0 && correction > 0) {
                            injection = (nbHdc * formCalcul.unite) / formCalcul.hdc;
                            injection = injection + ((formCalcul.glycemie - _this.config[0].valeur) / correction);
                            injection = _this.srvGeneral.roundNumber(injection);
                            if (injection < 0)
                                injection = 0.0;
                            msgInjection = _this.translate.instant("msg.injecter") + ": " + injection;
                        }
                        else if (nbHdc === 0) {
                            msgInjection = _this.translate.instant("msg.saisieNbHdC");
                            calculInjection = false;
                        }
                        else {
                            injection = (nbHdc * formCalcul.unite) / formCalcul.hdc;
                            injection = _this.srvGeneral.roundNumber(injection);
                            if (injection < 0)
                                injection = 0.0;
                            msgSubTitle = _this.translate.instant("msg.noCorrection");
                            msgInjection = _this.translate.instant("msg.injecter") + ": " + injection;
                        }
                    }
                    else {
                        msgErr = _this.translate.instant("msg.saisieGlycemie");
                        calculInjection = false;
                    }
                }
                else {
                    msgErr = _this.translate.instant("msg.verifyConfig");
                    calculInjection = false;
                }
            }
            if (calculInjection) {
                _this.srvGeneral.setMessageInjection(msgInjection, msgSubTitle);
                // Set Data Injection    
            }
            else {
                _this.srvGeneral.setMessage(msgErr);
            }
        };
        this.getCorrection = function () {
            var correction = 0;
            var d = new Date();
            var hr = d.getHours();
            var mn = d.getMinutes();
            var tps = (hr * 60) + mn;
            if (tps < 420 || tps > 1200) {
                correction = _this.config[0].correctionNuit;
            }
            else {
                correction = _this.config[0].correctionJour;
            }
            return correction;
        };
        this.setDataToServer = function (formData) {
            _this.data.nbHdc = Number.parseFloat(formData.nbHdc);
            _this.data.glycemie = Number.parseFloat(formData.glycemie);
            _this.data.injection = Number.parseFloat(formData.injection);
            _this.data.dateInj = formData.currentDate.substring(0, 10);
            _this.data.timeInj = formData.currentDate.substring(11, 16);
            _this.data.commentaire = formData.commentaire;
            _this.data.glycemieAuto = 0;
            _this.data.glycemieCapteur = 0;
            var tranche = formData.trancheHoraire;
            var numRepas;
            if (tranche === "u1") {
                numRepas = 1;
            }
            else if (tranche === "u2") {
                numRepas = 2;
            }
            else if (tranche === "u3") {
                numRepas = 3;
            }
            else if (tranche === "u4") {
                numRepas = 4;
            }
            else if (tranche === "u5") {
                numRepas = 5;
            }
            else if (tranche === "u6") {
                numRepas = 6;
            }
            _this.data.repas = numRepas;
            _this.srvGeneral.setMessage(_this.dataToString(_this.data));
            _this.savedData(_this.data);
            //localStorage.setItem("Donnees", JSON.stringify(this.dataToJson(this.data))); 
        };
        this.dataToJson = function (data) {
            _this.data.idUti = _this.config[0].idUti;
            _this.lstDataD.idUti = _this.data.idUti;
            _this.lstDataD.timeInj = _this.data.timeInj;
            _this.lstDataD.dateInj = _this.data.dateInj;
            _this.lstDataD.nbHdc = _this.data.nbHdc;
            _this.lstDataD.glycemie = _this.data.glycemie;
            _this.lstDataD.injection = _this.data.injection;
            _this.lstDataD.commentaire = _this.data.commentaire;
            _this.lstDataD.glycemieAuto = _this.data.glycemieAuto;
            _this.lstDataD.glycemieCapteur = _this.data.glycemieCapteur;
            _this.lstDataD.repas = _this.data.repas;
            return _this.lstDataD;
        };
        this.listLocalData = function () {
            var wd = localStorage.getItem("localData");
            if (wd != null && wd.length != 0) {
                return JSON.parse(localStorage.getItem("localData"));
            }
            else {
                return localStorage.setItem("localData", "[]");
            }
        };
        this.listData = function () {
            var wd = localStorage.getItem("lastData");
            if (wd != null && wd.length !== 0) {
                return JSON.parse(localStorage.getItem("lastData"));
            }
            else {
                return localStorage.setItem("listData", "[]");
            }
        };
        this.dataToString = function (data) {
            var str;
            str = data.dateInj + " - " + data.timeInj;
            str += "<br>glycémie:" + data.glycemie;
            str += "<br>nbHdc:" + data.nbHdc;
            str += "<br>injection:" + data.injection;
            str += "<br>commentaire:" + data.commentaire;
            return str;
        };
        this.getMesDonnees = function (options) {
            var lstData = _this.http.get(_this.srvHttp.SERVER_URL + _this.srvHttp.urlData, options);
            return lstData;
        };
        this.storeData = function (display) {
            var _this = this;
            this.user = JSON.parse(localStorage.getItem('User'));
            //    var params = { a: mail };var params = "a="+mail;
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/x-www-form-urlencoded');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.set('user', this.user.num);
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            //var lenData=  localStorage.getItem("localData").length-1;
            var localData = this.listLocalData();
            var params = JSON.stringify(localData);
            var storeData = "n=" + params;
            this.http.post(this.srvHttp.SERVER_URL + this.srvHttp.urlData, storeData, options)
                .timeout(10000)
                .map(function (res) {
                localStorage.setItem("lastData", JSON.stringify(res.json()));
                localStorage.removeItem('localData');
            })
                .subscribe(function (data) {
            }, function (err) {
                _this.srvHttp.handleError(err);
            });
        };
        this.savedData = function (dataT) {
            var d = new Date();
            var yr = dataT.dateInj.substring(0, 4);
            var mh = dataT.dateInj.substring(5, 7);
            var dt = dataT.dateInj.substring(8, 10);
            var hr = dataT.timeInj.substring(0, 2);
            var mn = dataT.timeInj.substring(3, 5);
            if (!dataT.nbHdc)
                dataT.nbHdc = 0;
            if (!dataT.glycemie)
                dataT.glycemie = 0;
            if (!dataT.injection)
                dataT.injection = 0;
            if (!dataT.commentaire)
                dataT.commentaire = "";
            var data = new Object();
            data.dateInj = yr + "-" + mh + "-" + dt;
            data.timeInj = hr + ":" + mn + ":00";
            data.nbHdc = dataT.nbHdc;
            data.repas = dataT.repas;
            data.glycemie = dataT.glycemie;
            data.injection = dataT.injection;
            data.commentaire = dataT.commentaire;
            data.glycemieAuto = 0;
            //data.glycemieCapteur=1;
            var storeDataD = _this.listLocalData();
            if (!storeDataD || storeDataD.length === 0) {
                storeDataD = [];
            }
            storeDataD.push(data);
            localStorage.setItem("localData", JSON.stringify(storeDataD));
            _this.storeData(false);
        };
        this.sendDataMail = function (mail) {
            _this.user = JSON.parse(localStorage.getItem('User'));
            var params = "a=" + mail;
            //    var params = { a: mail };
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.set('user', _this.user.num);
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return _this.http.post(_this.srvHttp.SERVER_URL + _this.srvHttp.urlSendData, params, options)
                .timeout(10000)
                .map(function (res) { return res; })
                .subscribe(function (data) {
                _this.srvGeneral.setMessage(_this.translate.instant("msg.donneesTranferees"));
            }, function (err) { return (console.log("Delay exceeded !")); });
        };
        this.config = JSON.parse(localStorage.getItem("Config"));
    }
    return SrvData;
}());
SrvData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_6__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
], SrvData);

//# sourceMappingURL=srvData.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvAliment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvHttp__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SrvAliment = (function () {
    function SrvAliment(http, events, camera, srvHttp, platform, srvGeneral, translate) {
        var _this = this;
        this.http = http;
        this.events = events;
        this.camera = camera;
        this.srvHttp = srvHttp;
        this.platform = platform;
        this.srvGeneral = srvGeneral;
        this.translate = translate;
        this.MES_ALIMENTS = 14;
        this.ALIMENT_PHOTO = 13;
        this.user = {};
        this.mesAliments = {};
        this.lastImage = null;
        this.lstAlimentAdd = {};
        this.takePicture = function (sourceType) {
            _this.platform.ready().then(function () {
                // Create options for the Camera Dialog
                var options = {
                    quality: 80,
                    targetWidth: 512,
                    targetHeight: 512,
                    sourceType: sourceType,
                    mediaType: _this.camera.MediaType.PICTURE,
                    encodingType: _this.camera.EncodingType.JPEG,
                    destinationType: _this.camera.DestinationType.DATA_URL
                };
                // Get the data of an image
                _this.camera.getPicture(options).then(function (imageData) {
                    var base64Image = null;
                    //get photo from the camera based on platform type
                    base64Image = "data:image/jpeg;base64," + imageData;
                    // Call Events de ajoutAliment.ts afin d'afficher l'image à l'écran
                    _this.events.publish('initImageSrc', base64Image);
                }, function (err) {
                    _this.srvGeneral.presentToast(_this.translate.instant("msg.image.error.select"));
                });
            });
        };
        this.upload = function (dataFile, nom, hdc, unite) {
            _this.platform.ready().then(function () {
                //this.srvGeneral.setLoader(true);
                // Destination URL
                var url = _this.srvHttp.SERVER_URL + _this.srvHttp.urlMesdAliment;
                _this.user = JSON.parse(localStorage.getItem('User'));
                if (_this.user && _this.user.num && _this.user.num.length > 0) {
                    var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
                    headers.append('user', _this.user.num);
                    var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                    _this.mesAliments.idFamille = _this.MES_ALIMENTS;
                    _this.mesAliments.nom = nom;
                    _this.mesAliments.nom_en = nom;
                    _this.mesAliments.nom_de = nom;
                    _this.mesAliments.ordre = 0;
                    _this.mesAliments.description = "";
                    _this.mesAliments.image = dataFile;
                    _this.mesAliments.glucide = hdc;
                    _this.mesAliments.quantite = unite;
                    _this.mesAliments.idUti = 0;
                    var strMesAliments = JSON.stringify(_this.mesAliments);
                    var params = "img=" + strMesAliments;
                    _this.http.post(url, params, options)
                        .subscribe(function (data) {
                        //this.srvGeneral.setLoader(false);
                        _this.srvGeneral.setMessage(_this.translate.instant("msg.image.enreg"));
                        //this.getMesAliments(options);
                    }, function (err) {
                        var data = new Object();
                        data.file = dataFile;
                        data.name = nom;
                        data.nbHdc = hdc;
                        data.unite = unite;
                        _this.lstAlimentAdd = _this.listLstAddAliment();
                        _this.lstAlimentAdd.push(data);
                        localStorage.setItem("addAliment", JSON.stringify(_this.lstAlimentAdd));
                        //this.srvGeneral.setLoader(false);
                        _this.srvHttp.handleError(err);
                    });
                }
            });
        };
        this.listLstAddAliment = function () {
            var wd = localStorage.getItem("addAliment");
            if (wd != null && wd.length !== 0) {
                return JSON.parse(localStorage.getItem("addAliment"));
            }
            else {
                return localStorage.setItem("addAliment", "[]");
            }
        };
        this.getAliments = function () {
            var lstData = _this.http.get(_this.srvHttp.SERVER_URL + _this.srvHttp.urlFamilleAliment)
                .timeout(10000)
                .map(function (res) {
                localStorage.setItem("FamillesAliments", JSON.stringify(res.json()));
                return res.json();
            })
                .subscribe(function (data) { return (data); });
            lstData = _this.http.get(_this.srvHttp.SERVER_URL + _this.srvHttp.urlAliment)
                .timeout(10000)
                .map(function (res) {
                localStorage.setItem("Aliments", JSON.stringify(res.json()));
                return res.json();
            })
                .subscribe(function (data) { return (data); }, function (err) { return (console.log("Delay exceeded !")); });
        };
        this.getImagesAliments = function () {
            _this.http.get(_this.srvHttp.SERVER_URL + _this.srvHttp.urlImageAliment)
                .timeout(10000)
                .map(function (res) {
                localStorage.setItem("imagesAliments", JSON.stringify(res.json()));
                return res.json();
            })
                .subscribe(function (data) { return (data); }, function (err) { return (console.log("Delay exceeded !")); });
        };
        this.getFavoris = function (options) {
            _this.http.get(_this.srvHttp.SERVER_URL + _this.srvHttp.urlFavoris, options)
                .timeout(10000)
                .map(function (res) {
                localStorage.setItem("mesRepas", JSON.stringify(res.json()));
                return res.json();
            })
                .subscribe(function (data) { return (data); }, function (err) { return (console.log("Delay exceeded !")); });
        };
        this.getMesAliments = function (options) {
            _this.http.get(_this.srvHttp.SERVER_URL + _this.srvHttp.urlMesdAliment, options)
                .timeout(10000)
                .map(function (res) {
                localStorage.setItem("Aliments", JSON.stringify(res.json()));
                return res.json();
            })
                .subscribe(function (data) { return (data); }, function (err) { return (console.log("Delay exceeded !")); });
        };
        this.deleteMesAliments = function () {
            _this.user = JSON.parse(localStorage.getItem('User'));
            if (_this.user && _this.user.num && _this.user.num.length > 0) {
                var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                headers.set('user', _this.user.num);
                var options_1 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.delete(_this.srvHttp.SERVER_URL + _this.srvHttp.urlMesdAliment, options_1)
                    .timeout(10000)
                    .map(function (res) {
                    _this.getMesAliments(options_1);
                })
                    .subscribe(function (data) { return (data); }, function (err) { return (console.log("Delay exceeded !")); });
            }
        };
        this.getAlimentsFamille = function (idFamille) {
            var lstAlimentPhoto = [];
            var lstData = JSON.parse(localStorage.getItem("Aliments"));
            if (lstData) {
                if (idFamille === _this.ALIMENT_PHOTO) {
                    var lstImgData = JSON.parse(localStorage.getItem("imagesAliments"));
                    if (lstImgData) {
                        for (var i = 0; i < lstData.length; i++) {
                            for (var j = 0; j < lstImgData.length; j++) {
                                if (lstImgData[j].diaImagealimentPK.idAliment === lstData[i].id) {
                                    lstAlimentPhoto.push({ id: lstData[i].id, nom: lstData[i].nom, nom_en: lstData[i].nom_en, nom_de: lstData[i].nom_de, quantite: lstImgData[j].diaImagealimentPK.quantite });
                                }
                            }
                        }
                    }
                    lstData = JSON.stringify(lstAlimentPhoto);
                }
                else {
                    var aliment = void 0;
                    var listAliment = [];
                    for (var i = 0; i < lstData.length; i++) {
                        aliment = lstData[i];
                        if (aliment.idFamille === idFamille) {
                            listAliment.push(aliment);
                        }
                    }
                    lstData = JSON.stringify(listAliment);
                }
            }
            return JSON.parse(lstData);
        };
    }
    return SrvAliment;
}());
SrvAliment = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_6__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], SrvAliment);

//# sourceMappingURL=srvAliment.js.map

/***/ })

},[242]);
//# sourceMappingURL=main.js.map