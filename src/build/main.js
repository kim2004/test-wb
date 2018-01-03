webpackJsonp([0],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_srvAuth__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvHttp__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvInit__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_srvGeneral__ = __webpack_require__(13);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon name="home"></ion-icon>        \n      </button>\n    </ion-buttons>\n    <ion-title>\n      <div class="title center" style="padding-top: 10px;">\n        {{"frm.login.titre"|translate}}\n      </div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form (submit)="validateLogin()" [formGroup]="formLogin">\n\n    <ion-list>\n\n      <ion-item>\n<!--        <ion-input formControlName="email" autofocus type="text" placeholder=\'{{"msg.inscription.email"|translate}}\' (keyup)="onChangeNom($event.target.value)"></ion-input>-->\n        <ion-input formControlName="email" autofocus type="text" placeholder=\'{{"msg.inscription.email"|translate}}\'></ion-input>\n      </ion-item>\n\n      <ion-item>\n<!--        <ion-input formControlName="password" type="password" placeholder=\'{{"msg.connexion.mot_de_passe"|translate}}\' (keyup)="onChangePassword($event.target.value)"></ion-input>-->\n        <ion-input formControlName="password" type="password" placeholder=\'{{"msg.connexion.mot_de_passe"|translate}}\'></ion-input>\n      </ion-item>\n\n      <ion-grid>\n        <ion-row>  \n          <ion-col>\n            <ion-item class="center">\n              <button ion-button color="dark" round (click)="forgetPassword()">{{"frm.login.oublieMotdepasse"|translate}}</button>                           \n            </ion-item>      \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n            <div class="dividerBlock"></div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n<!--            <button disabled={{buttonDisabled}} ion-button color="primary" type="submit" block>{{"button.ok"|translate}}</button>-->\n            <button ion-button color="primary" type="submit" block>{{"button.ok"|translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> \n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n \n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/login/login.html"*/,
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

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_srvHttp__ = __webpack_require__(17);
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

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvInit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_srvHttp__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_srvData__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_srvConfig__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvAliment__ = __webpack_require__(63);
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
    function SrvInit(http, srvHttp, srvData, srvConfig, srvAliment) {
        var _this = this;
        this.http = http;
        this.srvHttp = srvHttp;
        this.srvData = srvData;
        this.srvConfig = srvConfig;
        this.srvAliment = srvAliment;
        this.user = {};
        this.initStorageAliment = function () {
            _this.srvAliment.getAliments();
            _this.srvAliment.getImagesAliments();
            // Gestion des Favoris
            _this.user = JSON.parse(localStorage.getItem('User'));
            console.log(_this.user);
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
            }
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
        __WEBPACK_IMPORTED_MODULE_6__providers_srvAliment__["a" /* SrvAliment */]])
], SrvInit);

//# sourceMappingURL=srvInit.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvData__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_srvQuantite__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_alimentTabs_quantite_quantite__ = __webpack_require__(125);
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
        this.initTrancheHoraire(this.srvGeneral.getTrancheHoraire());
        this.events.subscribe('afficheHdC', function (data) {
            _this.afficheHdC(data);
        });
    }
    return CalculPage;
}());
CalculPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calcul',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/calcul/calcul.html"*/'<ion-header *ngIf="!display">\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon name="home"></ion-icon>        \n      </button>\n    </ion-buttons>\n    \n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n        <img alt="webDia" src="assets/img/logo_hug.png" height="20">&nbsp;&nbsp;<span style="position:absolute; top: 7px">webDia</span>\n      </div> \n    </ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-color-aliment">\n  <div style="height:30px;">\n    <span class="txt-title">{{"frm.aliments.titre" | translate}}</span>\n  </div>\n\n  <form (submit)="validateCalcul(formCalcul.value)" [formGroup]="formCalcul">\n\n      <ion-grid class="vertical-align-content">\n\n        <ion-row *ngIf="display">\n          <ion-col>\n            <ion-list >\n              <ion-list-header>\n                <span (click)="displayList=!displayList">{{nbAllHdc}}</span>\n                <ion-icon name="add-circle" item-right (click)="displayList=!displayList"></ion-icon>\n<!--remove-circle-->                \n              </ion-list-header>\n              <ion-list *ngIf="displayList">\n                <ion-item *ngFor="let aliment of lstRepas">\n                  <span (click)="getQuantite(aliment.idAliment);">{{aliment.nom}}</span>\n                  <ion-icon name="apps" item-right (click)="getQuantite(aliment.idAliment);"></ion-icon>\n                </ion-item>\n              </ion-list>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-input type="number" formControlName="nbHdc" placeholder=\'{{"frm.monAliment.nbHdc"|translate}}\'></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class="center"><p>{{"frm.config.rapport"|translate}}</p></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n\n            <ion-grid class="vertical-align-content" style="background-color: #fff">\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-select #C formControlName="trancheHoraire" class="selectOption" (ionChange)="initTrancheHoraire(C.value)" cancelText="{{\'button.annuler\'|translate}}" okText="{{\'button.ok\'|translate}}">      \n                      <ion-option *ngFor="let item of repasHoraire" value="{{item.value}}">{{item.text}}</ion-option>\n                    </ion-select> \n                  </ion-item>         \n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col width-45>\n                  <ion-item>\n                    <ion-input type="number" formControlName="unite" placeholder=\'{{"msg.xUnite"|translate}}\'></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col width-10 class="center">/</ion-col>\n                <ion-col width-45>\n                  <ion-item>\n                    <ion-input type="number" formControlName="hdc" placeholder=\'{{"msg.xHdC"|translate}}\'></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n        \n      <ion-grid class="vertical-align-content">\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-input type="number" formControlName="glycemie" placeholder="{{\'msg.glycemie\'|translate}}" showFooter></ion-input>\n            </ion-item>\n        </ion-col>\n      </ion-row>\n      \n      </ion-grid>\n\n      <ion-grid>\n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n            <button ion-button class="button-ok" type="submit" block>{{"button.ok"|translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> \n\n  </form>\n\n</ion-content>\n \n<ion-footer *ngIf="!display" class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/calcul/calcul.html"*/,
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

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvQuantite; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_srvGeneral__ = __webpack_require__(13);
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
    function SrvQuantite(srvGeneral) {
        var _this = this;
        this.srvGeneral = srvGeneral;
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_srvGeneral__["a" /* SrvGeneral */]])
], SrvQuantite);

//# sourceMappingURL=srvQuantite.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuantitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_srvQuantite__ = __webpack_require__(124);
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
    function QuantitePage(events, params, navCtrl, sanitizer, srvQuantite, viewCtrl, translate) {
        var _this = this;
        this.events = events;
        this.params = params;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.srvQuantite = srvQuantite;
        this.viewCtrl = viewCtrl;
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
            _this.imageBase64 = _this.srvQuantite.getImageAliment(_this.idAliment);
            if (_this.imageBase64) {
                _this.imageMonAliment = _this.imageBase64;
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
        selector: 'page-quantite',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/quantite/quantite.html"*/'<ion-content padding>\n\n    <ion-grid class="vertical-align-content">\n      <ion-row>\n          <ion-col width-100 class="center"><span [innerHTML]="quantiteAliment"></span></ion-col>        \n      </ion-row>\n\n      <ion-row>\n        <ion-col width-100>\n          <ion-item>\n            <ion-input type="number" [value]="quantite" placeholder=\'{{"frm.quantite.saisieQuantite"|translate}}\' (change)="getQuantite($event.target.value)"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>      \n    </ion-grid>\n\n    <ion-grid>\n      <ion-row class="center">  \n        <ion-col width-90 class="center-col">\n          <div class="dividerBlock"></div>\n        </ion-col>\n      </ion-row>\n      <ion-row class="center">  \n        <ion-col width-50 class="center-col">\n          <button ion-button full color="light" (click)="calculHdc()">{{"button.ok"|translate}}</button>\n        </ion-col>\n        <ion-col width-50 class="center-col">\n          <button ion-button full color="light" (click)="returnAliment();">{{"button.annuler"|translate}}</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n\n    <ion-grid>\n      <ion-row class="center">\n        <ion-col width-90 class="center-col">\n          <img src="{{imageAliment_1}}" class="imgAliment" [hidden]="(imageAliment_1 === null || alimentAffiche !== 1)">\n          <img src="{{imageAliment_2}}" class="imgAliment" [hidden]="(imageAliment_2 === null || alimentAffiche !== 2)">\n          <img src="{{imageAliment_3}}" class="imgAliment" [hidden]="(imageAliment_3 === null || alimentAffiche !== 3)">\n          <img [src]="sanitizer.bypassSecurityTrustUrl(\'data:image/jpg;base64,\' + imageMonAliment)" class="imgAliment" [hidden]="(imageMonAliment === null)"> \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class="button-quantite" [hidden]="imageAliment === 0">\n      <ion-row class="center">\n        <ion-col width-33 class="center-col" (click)=\'setQuantite(1)\'>\n            <span>{{quantite_1}}</span>\n        </ion-col>\n        <ion-col width-33 class="center-col col-border" (click)=\'setQuantite(2)\'>\n            <span>{{quantite_2}}</span>\n        </ion-col>\n        <ion-col width-33 class="center-col" (click)=\'setQuantite(3)\'>\n            <span>{{quantite_3}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/quantite/quantite.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_srvQuantite__["a" /* SrvQuantite */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_4__providers_srvQuantite__["a" /* SrvQuantite */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], QuantitePage);

//# sourceMappingURL=quantite.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlimentTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_calcul_calcul__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_srvGeneral__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alimentTabs_ajoutAliment_ajoutAliment__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alimentTabs_familleAliment_familleAliment__ = __webpack_require__(127);
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
        this.hideSave = 0;
        this.calculPage = __WEBPACK_IMPORTED_MODULE_3__pages_calcul_calcul__["a" /* CalculPage */];
        this.ajoutAlimentPage = __WEBPACK_IMPORTED_MODULE_5__alimentTabs_ajoutAliment_ajoutAliment__["a" /* AjoutAlimentPage */];
        this.familleAlimentPage = __WEBPACK_IMPORTED_MODULE_6__alimentTabs_familleAliment_familleAliment__["a" /* FamilleAlimentPage */];
        /*
          ionViewDidLoad() {
              this.tabBarElement = document.querySelector('#idAlimentsTabs div');
          }
        */
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/alimentTabs.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon name="home"></ion-icon>        \n      </button>\n    </ion-buttons>\n    \n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n        <img alt="webDia" src="assets/img/logo_hug.png" height="20">&nbsp;&nbsp;<span style="position:absolute; top: 7px">webDia</span>\n      </div> \n    </ion-title>\n    \n    <ion-buttons right>\n      <button ion-button [hidden]="hideSave === 0" (click)="saveFavoris()">\n        <ion-icon name="download"></ion-icon>        \n      </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-tabs id="idAlimentsTabs" [selectedIndex]=\'tabIndex\' [color]=\'danger\'>\n      <ion-tab [root]="familleAlimentPage" tabTitle="{{\'button.liste\'|translate}}" tabIcon="list" (ionSelect)="selectTab($event)"></ion-tab>\n      <ion-tab [root]="ajoutAlimentPage" tabTitle="{{\'button.monAliment\'|translate}}" tabIcon="add" (ionSelect)="selectTab($event)"></ion-tab>\n      <ion-tab [root]="calculPage" tabTitle="{{\'button.calcul\'|translate}}" tabIcon="calcul"(ionSelect)="selectTab($event)"></ion-tab>\n    </ion-tabs>\n</ion-content>\n\n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/alimentTabs.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__alimentTabs_ajoutAliment_ajoutAliment__["a" /* AjoutAlimentPage */], __WEBPACK_IMPORTED_MODULE_6__alimentTabs_familleAliment_familleAliment__["a" /* FamilleAlimentPage */], __WEBPACK_IMPORTED_MODULE_4__providers_srvGeneral__["a" /* SrvGeneral */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
], AlimentTabsPage);

//# sourceMappingURL=alimentTabs.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilleAlimentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aliment_aliment__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvHttp__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_srvGeneral__ = __webpack_require__(13);
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
        selector: 'page-familleAliment',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/familleAliment/familleAliment.html"*/'<ion-content padding class="background-color-aliment">\n  <div style="height:30px;">\n    <span class="txt-title">{{"frm.aliments.titre" | translate}}</span>\n  </div>\n  <ion-list>\n    <button ion-item *ngFor="let famille of listFamille | OrderBy : [\'ordre\']" (click)="callAlimentFamille(famille)">\n      {{famille.nom}}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/familleAliment/familleAliment.html"*/,
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

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__ = __webpack_require__(13);
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
    function ConfigurationPage(http, navCtrl, srvGeneral, formBuilder, translate) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.srvGeneral = srvGeneral;
        this.formBuilder = formBuilder;
        this.translate = translate;
        this.config = {};
        this.validateConfig = function (formConfig) {
            if (_this.formConfig.valid) {
                _this.srvGeneral.setMessage("Validation !!!");
            }
        };
        this.initConfig = function () {
            _this.config = JSON.parse(localStorage.getItem("Config"));
            _this.formConfig = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
                unite: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null ? "" : _this.config[0].unite, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                valeur: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null ? "" : _this.config[0].valeur, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                correctionJour: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null ? "" : _this.config[0].correctionJour, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                correctionNuit: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null ? "" : _this.config[0].correctionNuit, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                dureeAction: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null ? "" : _this.config[0].dureeAction, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                unite1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null ? "" : _this.config[0].unite1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                hdc1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null ? "" : _this.config[0].hdc1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                unite2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null ? "" : _this.config[0].unite2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                hdc2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null ? "" : _this.config[0].hdc2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                unite3: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null ? "" : _this.config[0].unite3, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                hdc3: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null ? "" : _this.config[0].hdc3, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                unite4: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null ? "" : _this.config[0].unite4, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                hdc4: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null ? "" : _this.config[0].hdc4, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                unite5: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null ? "" : _this.config[0].unite5, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                hdc5: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null ? "" : _this.config[0].hdc5, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                unite6: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null ? "" : _this.config[0].unite6, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                hdc6: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](_this.config == null ? "" : _this.config[0].hdc6, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required)
            });
        };
        this.goHome = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
            //    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
        };
        this.translate = translate;
        this.initConfig();
    }
    return ConfigurationPage;
}());
ConfigurationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-configuration',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/configuration/configuration.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon name="home"></ion-icon>        \n      </button>\n    </ion-buttons>\n\n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n        <img alt="webDia" src="assets/img/logo_hug.png" height="20">&nbsp;&nbsp;<span style="position:absolute; top: 7px">webDia</span>\n      </div> \n    </ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-color-configuration">\n  <div style="padding-bottom:10px;">\n    <span class="txt-title">{{"frm.config.titre" | translate}}</span>\n    <br>\n    <span style="color:#000;">{{"frm.config.unit"|translate}}</span>\n  </div>\n\n  <form (submit)="validateConfig(formConfig.value)" [formGroup]="formConfig">\n\n    <ion-list> \n\n      <ion-list radio-group formControlName="unite">\n        <ion-item>\n          <ion-label>mmol/l</ion-label>\n          <ion-radio item-left checked value="1">mmol/l</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>mg/dl</ion-label>\n          <ion-radio item-left value="2">mg/dl</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>g/l</ion-label>\n          <ion-radio item-left value="3">g/l</ion-radio>\n        </ion-item>\n\n      </ion-list>\n\n      <ion-grid class="vertical-align-content">\n        <ion-row>\n          <ion-col width-60><p>{{"frm.config.valeurRecherche"|translate}}</p></ion-col>\n          <ion-col width-40>\n            <ion-item>\n              <ion-input type="number" formControlName="valeur" placeholder="mmol/l"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col width-60><p>{{"frm.config.correctionJour"|translate}}</p></ion-col>\n          <ion-col width-40>\n            <ion-item>\n              <ion-input type="number" formControlName="correctionJour" placeholder="mmol/l"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col width-60><p>{{"frm.config.correctionNuit"|translate}}</p></ion-col>\n          <ion-col width-40>\n            <ion-item>\n              <ion-input type="number" formControlName="correctionNuit" placeholder="mmol/l"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col width-60><p>{{"frm.config.dureeInsuline"|translate}}</p></ion-col>\n          <ion-col width-40>\n            <ion-item>\n              <ion-input type="number" formControlName="dureeAction" placeholder="min."></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div class="roundRect-configuration center">\n        <ion-title>{{"frm.config.rapport"|translate}}</ion-title>\n\n        <ion-grid class="vertical-align-content">\n          <ion-row class="center">\n            <p>{{"msg.petitdejeuner"|translate}}</p>\n          </ion-row>\n          <ion-row>\n            <ion-col width-50><ion-item><ion-input type="number" formControlName="unite1" placeholder=\'{{"msg.xUnite"|translate}}\'></ion-input></ion-item></ion-col>\n            <ion-col width-50><ion-item><ion-input type="number" formControlName="hdc1" placeholder=\'{{"msg.xHdC"|translate}}\'></ion-input></ion-item></ion-col>\n          </ion-row>\n          <ion-row>\n            <p>{{"msg.collation10"|translate}}</p>\n          </ion-row>\n          <ion-row>\n            <ion-col width-50><ion-item><ion-input type="number" formControlName="unite2" placeholder=\'{{"msg.xUnite"|translate}}\'></ion-input></ion-item></ion-col>\n\n            <ion-col width-50><ion-item><ion-input type="number" formControlName="hdc2" placeholder=\'{{"msg.xHdC"|translate}}\'></ion-input></ion-item></ion-col>\n          </ion-row>\n          <ion-row>\n            <p>{{"msg.midi"|translate}}</p>\n          </ion-row>\n          <ion-row>\n            <ion-col width-50><ion-item><ion-input type="number" formControlName="unite3" placeholder=\'{{"msg.xUnite"|translate}}\'></ion-input></ion-item></ion-col>\n\n            <ion-col width-50><ion-item><ion-input type="number" formControlName="hdc3" placeholder=\'{{"msg.xHdC"|translate}}\'></ion-input></ion-item></ion-col>\n          </ion-row>\n          <ion-row>\n            <p>{{"msg.collation16"|translate}}</p>\n          </ion-row>\n          <ion-row>\n            <ion-col width-50><ion-item><ion-input type="number" formControlName="unite4" placeholder=\'{{"msg.xUnite"|translate}}\'></ion-input></ion-item></ion-col>\n\n            <ion-col width-50><ion-item><ion-input type="number" formControlName="hdc4" placeholder=\'{{"msg.xHdC"|translate}}\'></ion-input></ion-item></ion-col>\n          </ion-row>\n          <ion-row>\n            <p>{{"msg.diner"|translate}}</p>\n          </ion-row>\n          <ion-row>\n            <ion-col width-50><ion-item><ion-input type="number" formControlName="unite5" placeholder=\'{{"msg.xUnite"|translate}}\'></ion-input></ion-item></ion-col>\n\n            <ion-col width-50><ion-item><ion-input type="number" formControlName="hdc5" placeholder=\'{{"msg.xHdC"|translate}}\'></ion-input></ion-item></ion-col>\n          </ion-row>\n          <ion-row>\n            <p>{{"msg.collationSoir"|translate}}</p>\n          </ion-row>\n          <ion-row>\n            <ion-col width-50><ion-item><ion-input type="number" formControlName="unite6" placeholder=\'{{"msg.xUnite"|translate}}\'></ion-input></ion-item></ion-col>\n\n            <ion-col width-50><ion-item><ion-input type="number" formControlName="hdc6" placeholder=\'{{"msg.xHdC"|translate}}\'></ion-input></ion-item></ion-col>\n          </ion-row>\n        </ion-grid>\n        \n      </div>\n\n      <ion-grid>\n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n            <button ion-button class="button-ok" type="submit" block>{{"button.ok"|translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> \n\n    </ion-list>    \n\n  </form>\n\n</ion-content>\n\n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/configuration/configuration.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__["a" /* SrvGeneral */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
], ConfigurationPage);

//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvGeneral; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_index__ = __webpack_require__(7);
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
                    cssClass: css,
                    subTitle: text,
                    buttons: ['Ok'],
                    enableBackdropDismiss: false
                };
            }
            else {
                options = {
                    title: titre,
                    subTitle: text,
                    buttons: ['Ok'],
                    enableBackdropDismiss: false
                };
            }
            alert = _this.alertCtrl.create(options);
            alert.present();
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

/***/ 137:
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
webpackEmptyAsyncContext.id = 137;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calcul_calcul__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favoris_favoris__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dataTabs_dataTabs__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_alimentTabs_alimentTabs__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_configuration_configuration__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_srvQuantite__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(events, navCtrl, srvQuantite, menuCtrl, translate) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.srvQuantite = srvQuantite;
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
        }
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button>\n        <ion-icon name="home"></ion-icon>        \n      </button>\n    </ion-buttons>\n    \n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n        <img alt="webDia" src="assets/img/logo_hug.png" height="20">&nbsp;&nbsp;<span style="position:absolute; top: 7px">webDia</span>\n      </div> \n    </ion-title>\n    \n    <ion-buttons right>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<!--<ion-content padding class="background-image">-->\n<ion-content padding>  \n\n  <div class="title" style="text-align: center">\n    <img style=" margin-top: 5px;max-width:500px;width: 80%" alt="WebDia" src="assets/img/bandeau.png">\n  </div>\n  <hr>\n\n  <button (click)="setMenu(\'aliment\')" class="button-aliment button-menu" ion-button block >           \n      {{"button.aliments"|translate}}\n      <ion-icon name="arrow-dropright" class="icon-button"></ion-icon>          \n  </button>\n\n  <button [disabled]="!isConnect()" (click)="setMenu(\'favoris\')" class="button-favoris button-menu" ion-button block >           \n      {{"button.MesFavoris"|translate}}\n      <ion-icon name="arrow-dropright" class="icon-button"></ion-icon>          \n  </button>\n\n  <button [disabled]="!isConnect()" (click)="setMenu(\'data\')" class="button-donnees button-menu" ion-button block >           \n      {{"button.donnees"|translate}}\n      <ion-icon name="arrow-dropright" class="icon-button"></ion-icon>          \n  </button>\n\n  <button (click)="setMenu(\'config\')" class="button-configuration button-menu" ion-button block >           \n      {{"button.configuration"|translate}}\n      <ion-icon name="arrow-dropright" class="icon-button"></ion-icon>          \n  </button>\n\n  <button (click)="setMenu(\'calcul\')" class="button-bolus button-menu" ion-button block >           \n      {{"button.bolus"|translate}}\n      <div class="icon-button">\n        <ion-icon name="calcul"></ion-icon>\n      </div>\n      \n  </button>\n\n  <p class="center">{{"msg.site.citation.texte" | translate}}</p>\n  <p class="right" style="color:dimgrey;font-size: 0.9em;">{{"msg.site.citation.nom" | translate}}</p>\n\n</ion-content>\n\n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_9__providers_srvQuantite__["a" /* SrvQuantite */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_9__providers_srvQuantite__["a" /* SrvQuantite */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_srvGeneral__ = __webpack_require__(13);
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
    //  SERVER_URL = 'http://localhost:8084//webdia/';
    function SrvHttp(srvGeneral, translate) {
        var _this = this;
        this.srvGeneral = srvGeneral;
        this.translate = translate;
        this.SERVER_URL = 'http://www.kmconcept.net/webdia/';
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

/***/ 183:
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
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_srvHttp__ = __webpack_require__(17);
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
    function SrvConfig(http, srvHttp) {
        var _this = this;
        this.http = http;
        this.srvHttp = srvHttp;
        this.getConfiguration = function (options) {
            _this.http.get(_this.srvHttp.SERVER_URL + _this.srvHttp.urlProfil, options)
                .timeout(10000)
                .map(function (res) {
                localStorage.setItem("Config", JSON.stringify(res.json()));
                return res.json();
            })
                .subscribe(function (data) { return (data); }, function (err) { return (console.log("Delay exceeded !")); });
        };
    }
    return SrvConfig;
}());
SrvConfig = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_srvHttp__["a" /* SrvHttp */]])
], SrvConfig);

//# sourceMappingURL=srvConfig.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_srvHttp__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvGeneral__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_alimentTabs_alimentTabs__ = __webpack_require__(126);
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
        selector: 'page-favoris',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/favoris/favoris.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon name="home"></ion-icon>        \n      </button>\n    </ion-buttons>\n\n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n        <img alt="webDia" src="assets/img/logo_hug.png" height="20">&nbsp;&nbsp;<span style="position:absolute; top: 7px">webDia</span>\n      </div> \n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-color-favoris">\n  <div style="height:30px;">\n    <span class="txt-title">{{"frm.favoris.titre" | translate}}</span>\n  </div>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let favoris of listFavoris" (click)="callFavoris(favoris)">\n      <ion-item>\n        {{favoris.nom}}\n      </ion-item>\n\n      <ion-item-options>\n        <button ion-button icon-only (click)="deleteFavoris(favoris)" [color]="\'danger\'">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/favoris/favoris.html"*/,
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

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjoutAlimentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_srvAliment__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvGeneral__ = __webpack_require__(13);
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
        this.base64Image = null;
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
            _this.platform.ready().then(function () {
                if (_this.nom && _this.nom.length > 0) {
                    if (_this.nbHdc && _this.nbHdc.length > 0) {
                        _this.srvAliment.upload(_this.base64Image, _this.nom, _this.nbHdc, _this.unite);
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
        /* ---------------------------------------------------------------------------------------------------------------- */
        this.goHome = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], {}, { animate: true, direction: 'back' });
        };
        // Permet d'initialiser l'image "lastImage", appelé dans le provider srvAliment.ts
        this.events.subscribe('initImageSrc', function (dataImage) {
            //        this.base64Image = 'data:image/jpeg;base64,' + dataImage; 
            _this.base64Image = dataImage;
        });
    }
    return AjoutAlimentPage;
}());
AjoutAlimentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ajoutAliment',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/ajoutAliment/ajoutAliment.html"*/'<ion-content padding class="background-color-aliment">\n    <div style="height:30px;">\n      <span class="txt-title">{{"frm.aliments.titre" | translate}}</span>\n    </div>\n    \n    <ion-grid>\n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n            <button ion-button block color="dark" class="button-selectImage" (click)="selectImage()">\n              <ion-icon name="camera"></ion-icon>&nbsp;&nbsp;&nbsp;{{"msg.image.select"|translate}}    \n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n     \n<!--      \n      <button ion-button icon-left (click)="uploadImage()" [disabled]="lastImage === null">\n        <ion-icon name="cloud-upload"></ion-icon>Upload\n      </button>\n-->      \n    <ion-list> \n\n      <ion-grid>\n        <ion-row class="center">\n          <ion-col width-100 class="center-col">\n            <ion-item>\n              <ion-input name="nom" required autofocus type="text" placeholder=\'{{"msg.nom.aliment"|translate}}\' (keyup)="onChangeNom($event.target.value)"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row class="center">\n          <ion-col width-50 class="center-col">\n            <ion-item>\n              <ion-input name="nbHdc" required type="number" placeholder=\'{{"frm.monAliment.nbHdc"|translate}}\' (keyup)="onChangeHdc($event.target.value)"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col width-50 class="center-col">\n            <ion-item>\n              <ion-select [(ngModel)]="select" (ionChange)="onChangeUnite($event, select)" class="selectOption" cancelText="{{\'button.annuler\'|translate}}" okText="{{\'button.ok\'|translate}}">\n                <ion-option value=100 selected="true">100 gr.</ion-option>\n                <ion-option value=1>unité</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>    \n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n            <img [src]="\'data:image/jpg;base64,\' + base64Image" style="width: 100%" [hidden]="(base64Image === null)">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n<!--            <button class="button-ok" disabled={{buttonDisabled}} ion-button block (click)="setRepas()">{{"button.ok"|translate}}</button>-->\n            <button class="button-ok" ion-button block (click)="setRepas()">{{"button.ok"|translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> \n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/ajoutAliment/ajoutAliment.html"*/,
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

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlimentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_srvSort__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quantite_quantite__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_srvHttp__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_srvAliment__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_srvGeneral__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__familleAliment_familleAliment__ = __webpack_require__(127);
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
    return AlimentPage;
}());
AlimentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-aliment',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/aliment/aliment.html"*/'<ion-content padding class="background-color-aliment">\n  <div style="height:30px;">\n    <span class="txt-title">{{"frm.aliments.titre" | translate}}</span>\n  </div>\n  \n  <ion-searchbar (ionInput)="setFilteredItems($event)" placeholder=\'{{"msg.rechercheAliments"|translate}}\'></ion-searchbar>\n  <ion-list>\n\n    <div [hidden]="(isMesAliments === 0)">\n      <ion-item-sliding *ngFor="let aliment of listAliment | OrderBy : [\'nom\']" (click)="getQuantite(aliment.id)">\n        <ion-item>\n          {{aliment.nom}}        \n        </ion-item>\n\n        <ion-item-options>\n          <button ion-button icon-only (click)="deleteMesAliments(aliment.id)" [color]="\'danger\'">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n    </div>\n\n    <div [hidden]="(isMesAliments !== 0)">\n      <ion-item *ngFor="let aliment of listAliment | OrderBy : [\'nom\']" (click)="getQuantite(aliment.id)">\n          {{aliment.nom}}\n      </ion-item>\n    </div>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/alimentTabs/aliment/aliment.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_8__providers_srvHttp__["a" /* SrvHttp */], __WEBPACK_IMPORTED_MODULE_10__providers_srvGeneral__["a" /* SrvGeneral */], __WEBPACK_IMPORTED_MODULE_9__providers_srvAliment__["a" /* SrvAliment */], __WEBPACK_IMPORTED_MODULE_6__pipes_srvSort__["a" /* SrvSort */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_9__providers_srvAliment__["a" /* SrvAliment */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_10__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular_index__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], AlimentPage);

//# sourceMappingURL=aliment.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvSort; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(327);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: "OrderBy"
    })
], SrvSort);

//# sourceMappingURL=srvSort.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dataTabs_data_data__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvHttp__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvData__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_srvGeneral__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dataTabs_addData_addData__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dataTabs_sendData_sendData__ = __webpack_require__(234);
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
    function DataTabsPage(appCtrl, srvHttp, srvdata, srvGeneral, navCtrl, translate) {
        var _this = this;
        this.appCtrl = appCtrl;
        this.srvHttp = srvHttp;
        this.srvdata = srvdata;
        this.srvGeneral = srvGeneral;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.valueforngif = true;
        this.dataPage = __WEBPACK_IMPORTED_MODULE_4__dataTabs_data_data__["a" /* DataPage */];
        this.tabIndex = 0;
        this.addDataPage = __WEBPACK_IMPORTED_MODULE_9__dataTabs_addData_addData__["a" /* AddDataPage */];
        this.sendDataPage = __WEBPACK_IMPORTED_MODULE_10__dataTabs_sendData_sendData__["a" /* SendDataPage */];
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
                    .subscribe(function (data) {
                    _this.appCtrl.getRootNav().setRoot(DataTabsPage_1);
                    _this.srvGeneral.setLoader(false);
                }, function (err) {
                    _this.appCtrl.getRootNav().setRoot(DataTabsPage_1);
                    _this.srvGeneral.setLoader(false);
                    _this.srvHttp.handleError(err);
                });
            }
        };
        this.goHome = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], {}, { animate: true, direction: 'back' });
        };
    }
    return DataTabsPage;
}());
DataTabsPage = DataTabsPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/dataTabs/dataTabs.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon name="home"></ion-icon>        \n      </button>\n    </ion-buttons>\n\n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n        <img alt="webDia" src="assets/img/logo_hug.png" height="20">&nbsp;&nbsp;<span style="position:absolute; top: 7px">webDia</span>\n      </div> \n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-tabs>\n      <ion-tab [root]="dataPage" tabTitle="{{\'menu.data\'|translate}}" tabIcon="list"></ion-tab>\n      <ion-tab [root]="addDataPage" tabTitle="{{\'msg.ajout\'|translate}}" tabIcon="add"></ion-tab>\n      <ion-tab tabTitle="{{\'msg.synchronisation\'|translate}}" tabIcon="refresh" (ionSelect)="refreshData()"></ion-tab>\n      <ion-tab [root]="sendDataPage" tabTitle="{{\'msg.envoyer\'|translate}}" tabIcon="share"></ion-tab>\n    </ion-tabs>\n\n</ion-content>\n \n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/dataTabs/dataTabs.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_8__providers_srvGeneral__["a" /* SrvGeneral */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Tabs */], __WEBPACK_IMPORTED_MODULE_4__dataTabs_data_data__["a" /* DataPage */], __WEBPACK_IMPORTED_MODULE_10__dataTabs_sendData_sendData__["a" /* SendDataPage */], __WEBPACK_IMPORTED_MODULE_9__dataTabs_addData_addData__["a" /* AddDataPage */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_6__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_7__providers_srvData__["a" /* SrvData */],
        __WEBPACK_IMPORTED_MODULE_8__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], DataTabsPage);

var DataTabsPage_1;
//# sourceMappingURL=dataTabs.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(15);
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
            _this.lstData = JSON.parse(localStorage.getItem("Donnees"));
        };
        this.goHome = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
            //    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
        };
        this.affData();
    }
    return DataPage;
}());
DataPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-data',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/dataTabs/data/data.html"*/'<ion-content padding class="background-color-donnees">\n  <div style="padding-bottom:10px;">\n    <span class="txt-title">{{"frm.data.titre" | translate}}</span>\n    <br>\n    <span style="color:#000;">{{"msg.data.dernieresDonnees"|translate}}</span>\n  </div>\n\n    <div *ngFor="let data of lstData">\n      <div  class="roundRect" style="margin-bottom:10px;">\n        {{data.dateInj}} - {{ data.timeInj }}\n        <br>\n        {{"msg.hdc"|translate}}: {{ data.nbHdc }}\n        <br>\n        {{"msg.glycemie"|translate}}: {{ data.glycemie }}\n        <br>\n        {{"msg.injection"|translate}}: {{ data.injection }}     \n      </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/dataTabs/data/data.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], DataPage);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_srvData__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_srvGeneral__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddDataPage = (function () {
    function AddDataPage(srvData, platform, srvGeneral, formBuilder) {
        var _this = this;
        this.srvData = srvData;
        this.platform = platform;
        this.srvGeneral = srvGeneral;
        this.formBuilder = formBuilder;
        this.data = {};
        this.trancheHoraire = 'u1';
        this.repas = [];
        this.ionViewDidLoad = function () {
            // Permet d'attendre la fin du chargement de la page et de la traduction
            _this.platform.ready().then(function () {
                _this.initForm();
            });
        };
        this.validateAddData = function (formData) {
            if (_this.formData.valid) {
                _this.srvData.setDataToServer(formData);
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
AddDataPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-addData',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/dataTabs/addData/addData.html"*/'<ion-content padding class="background-color-donnees">\n  <div>\n    <span class="txt-title">{{"frm.data.titre" | translate}}</span>\n  </div>\n\n  <form (submit)="validateAddData(formData.value)" [formGroup]="formData">\n\n    <ion-list>\n\n      <ion-grid>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-select formControlName="trancheHoraire" class="selectOption" cancelText="{{\'button.annuler\'|translate}}" okText="{{\'button.ok\'|translate}}">      \n                <ion-option *ngFor="let item of repas" value="{{item.value}}">{{item.text}}</ion-option>           \n              </ion-select>          \n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>Date</ion-label>\n              <ion-datetime formControlName="currentDate" displayFormat="DD MMM YYYY - HH:mm" pickerFormat="DD MMM YYYY - HH:mm" cancelText="{{\'button.annuler\'|translate}}" doneText="{{\'button.ok\'|translate}}"></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-input type="number" autofocus formControlName="nbHdc" placeholder=\'{{"frm.monAliment.nbHdc"|translate}}\'></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-input type="number" formControlName="glycemie" placeholder=\'{{"msg.glycemie"|translate}}\'></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-input type="number" formControlName="injection" placeholder=\'{{"msg.injection"|translate}}\'></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-textarea formControlName="commentaire" placeholder=\'{{"frm.data.commentaire"|translate}}\'></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n      <ion-grid>\n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n            <button ion-button class="button-ok" type="submit" block>{{"button.ok"|translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> \n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/dataTabs/addData/addData.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_srvGeneral__["a" /* SrvGeneral */], __WEBPACK_IMPORTED_MODULE_4__providers_srvData__["a" /* SrvData */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_srvData__["a" /* SrvData */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], AddDataPage);

//# sourceMappingURL=addData.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvData__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_srvHttp__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_srvGeneral__ = __webpack_require__(13);
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
                    _this.srvData.sendDataMail(frmSendMail.mail)
                        .subscribe(function (data) {
                        _this.srvGeneral.setMessage(_this.translate.instant("msg.donneesTranferees"));
                    }, function (err) { return _this.srvHttp.handleError(err); });
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
        selector: 'page-sendData',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/dataTabs/sendData/sendData.html"*/'<ion-content padding class="background-color-donnees">\n  <div>\n    <span class="txt-title">{{"frm.data.titre" | translate}}</span>\n  </div>\n\n  <div class="roundRect">\n    <span>{{"frm.transfert.envoi"|translate}}</span>\n  </div>\n  <br>\n\n  <form (submit)="validateSendMail(true, formSendMail.value)" [formGroup]="formSendMail">\n\n    <ion-list> \n      <ion-item>\n        <ion-input type="text" formControlName="mail" placeholder=\'{{"msg.inscription.email"|translate}}\'></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-grid>\n      <ion-row class="center">  \n        <ion-col width-90 class="center-col">\n          <button ion-button class="button-ok" type="submit" block>{{"button.ok"|translate}}</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>  \n\n  </form>\n\n</ion-content>\n '/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/dataTabs/sendData/sendData.html"*/,
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

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(15);
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
            // this.navCtrl.setRoot( HomePage, {}, { animate: true, direction: 'back' });
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
        selector: 'page-langue',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/langue/langue.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon name="home"></ion-icon>        \n      </button>\n    </ion-buttons>\n\n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n        <img alt="webDia" src="assets/img/logo_hug.png" height="20">&nbsp;&nbsp;<span style="position:absolute; top: 7px">webDia</span>\n      </div> \n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-color-favoris">\n    <div style="height:30px;">\n      <span class="txt-title">{{"frm.langue.titre" | translate}}</span>\n    </div>\n\n    <ion-list> \n\n      <ion-list radio-group>\n        <ion-item>\n          <ion-label>{{"frm.langue.francais"|translate}}</ion-label>\n          <ion-radio item-left value="fr" [checked]="langue==\'fr\'" (click)="changeLangue(\'fr\')"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>{{"frm.langue.anglais"|translate}}</ion-label>\n          <ion-radio item-left value="en" [checked]="langue==\'en\'" (click)="changeLangue(\'en\')"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>{{"frm.langue.allemand"|translate}}</ion-label>\n          <ion-radio item-left value="de" [checked]="langue==\'de\'" (click)="changeLangue(\'de\')"></ion-radio>\n        </ion-item>\n      </ion-list>\n\n    </ion-list>    \n\n    <ion-grid>\n      <ion-row class="center">  \n        <ion-col width-90 class="center-col">\n          <button ion-button class="button-ok" block (click)="goHome()">{{"button.ok"|translate}}</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n\n</ion-content>\n \n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/langue/langue.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], LanguePage);

//# sourceMappingURL=langue.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(15);
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
        selector: 'page-information',template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/information/information.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon name="home"></ion-icon>        \n      </button>\n    </ion-buttons>\n\n    <ion-title>\n      <div class="title left" style="padding-top: 10px;">\n        <img alt="webDia" src="assets/img/logo_hug.png" height="20">&nbsp;&nbsp;<span style="position:absolute; top: 7px">webDia</span>\n      </div> \n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-color-app">\n  <div style="height:30px;">\n    <h3>{{"frm.info.titre" | translate}}</h3>\n  </div>\n\n  <div class="roundRect">\n    <span [innerHtml]="\'msg.conditionUtilisation1\'|translate"></span>\n  </div>\n  <br>\n  <div class="roundRect">\n    <span [innerHtml]="\'msg.conditionUtilisation2\'|translate"></span>\n  </div>\n  <br>\n  <div class="roundRect">\n    <span [innerHtml]="\'msg.conditionUtilisation3\'|translate"></span>\n  </div>\n  <br>\n  <div class="roundRect">\n    <span [innerHtml]="\'msg.conditionUtilisation4\'|translate"></span>\n  </div>\n  <br>\n  <div class="roundRect">\n    <span [innerHtml]="\'msg.conditionUtilisation5\'|translate"></span>\n  </div>\n  <br>\n  <div class="roundRect">\n    <span [innerHtml]="\'msg.conditionUtilisation6\'|translate"></span>\n  </div>\n  <br>\n  <div class="dividerBlock"></div>\n  <br>\n  <div>\n    <h3>{{"msg.conditionGenerales" | translate}}</h3>\n  </div>\n  <div class="roundRect">\n    <span [innerHtml]="\'msg.conditionUtilisation7\'|translate"></span>\n  </div>\n  <br>\n  <div class="roundRect">\n    <span [innerHtml]="\'msg.conditionUtilisation8\'|translate"></span>\n  </div>\n  <br>\n  <div class="roundRect">\n    <span [innerHtml]="\'msg.conditionUtilisation9\'|translate"></span>\n  </div> \n  \n  <ion-grid>\n    <ion-row class="center">  \n      <ion-col width-90 class="center-col">\n        <button ion-button class="button-ok" block (click)="goHome()">{{"button.ok"|translate}}</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid> \n\n</ion-content>\n\n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/information/information.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], InformationPage);

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_srvHttp__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvAuth__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__ = __webpack_require__(13);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/changePassword/changePassword.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button (click)="goHome()">\n        <ion-icon name="home"></ion-icon>        \n      </button>\n    </ion-buttons>\n    <ion-title>\n      <div class="title center" style="padding-top: 10px;">\n        {{"frm.motdepasse.titre"|translate}}\n      </div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form (submit)="validateChangePassword()" [formGroup]="formChangePassword">\n\n    <ion-list>\n\n      <ion-item>        \n        <ion-input type="password" autofocus formControlName="oldPassword" placeholder=\'{{"msg.motdepasse"|translate}}\' (keyup)="onChangeOldPassword($event.target.value)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password" formControlName="newPassword1" placeholder=\'{{"msg.newMotdepasse"|translate}}\' (keyup)="onChangeNewPassword1($event.target.value)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password" formControlName="newPassword2" placeholder=\'{{"msg.reNewMotdepasse"|translate}}\' (keyup)="onChangeNewPassword2($event.target.value)"></ion-input>\n      </ion-item>\n\n      <ion-grid>\n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n            <div class="dividerBlock"></div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="center">  \n          <ion-col width-90 class="center-col">\n            <button disabled={{buttonDisabled}} ion-button color="primary" type="submit" block>{{"button.ok"|translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> \n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n \n<ion-footer class="title center footer">\n  <div class="txt-footer">{{"msg.footer" | translate}}</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/pages/changePassword/changePassword.html"*/,
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

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(253);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_srvSort__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_srvHttp__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_srvInit__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_srvData__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_srvConfig__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_srvSafeHtml__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_langue_langue__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_calcul_calcul__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_srvGeneral__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_srvAliment__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_favoris_favoris__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_dataTabs_data_data__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_dataTabs_dataTabs__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_dataTabs_addData_addData__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_dataTabs_sendData_sendData__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_information_information__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_configuration_configuration__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_changePassword_changePassword__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_alimentTabs_alimentTabs__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_alimentTabs_aliment_aliment__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_alimentTabs_quantite_quantite__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_alimentTabs_ajoutAliment_ajoutAliment__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_alimentTabs_familleAliment_familleAliment__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';


























function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pipes_srvSort__["a" /* SrvSort */],
            __WEBPACK_IMPORTED_MODULE_24__pages_dataTabs_data_data__["a" /* DataPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_langue_langue__["a" /* LanguePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_calcul_calcul__["a" /* CalculPage */],
            __WEBPACK_IMPORTED_MODULE_18__pipes_srvSafeHtml__["a" /* SrvSafeHtml */],
            __WEBPACK_IMPORTED_MODULE_23__pages_favoris_favoris__["a" /* FavorisPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_dataTabs_addData_addData__["a" /* AddDataPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_alimentTabs_aliment_aliment__["a" /* AlimentPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_dataTabs_dataTabs__["a" /* DataTabsPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_dataTabs_sendData_sendData__["a" /* SendDataPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_alimentTabs_quantite_quantite__["a" /* QuantitePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_information_information__["a" /* InformationPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_alimentTabs_alimentTabs__["a" /* AlimentTabsPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_alimentTabs_ajoutAliment_ajoutAliment__["a" /* AjoutAlimentPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_configuration_configuration__["a" /* ConfigurationPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_alimentTabs_familleAliment_familleAliment__["a" /* FamilleAlimentPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_changePassword_changePassword__["a" /* ChangePasswordPage */]
        ],
        imports: [
            //    IonicModule.forRoot(MyApp, {tabsPlacement: 'bottom'}),
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {
                mode: 'md',
                tabsPlacement: 'bottom'
            }, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* HttpModule */],
            /*
                IonicModule.forRoot(MyApp,
                  {
                    tabsPlacement: 'bottom',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    pageTransition: 'ios'
                  }),
            */
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]]
                }
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_24__pages_dataTabs_data_data__["a" /* DataPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_langue_langue__["a" /* LanguePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_calcul_calcul__["a" /* CalculPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_favoris_favoris__["a" /* FavorisPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_dataTabs_addData_addData__["a" /* AddDataPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_alimentTabs_aliment_aliment__["a" /* AlimentPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_dataTabs_dataTabs__["a" /* DataTabsPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_dataTabs_sendData_sendData__["a" /* SendDataPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_alimentTabs_quantite_quantite__["a" /* QuantitePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_information_information__["a" /* InformationPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_alimentTabs_alimentTabs__["a" /* AlimentTabsPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_alimentTabs_ajoutAliment_ajoutAliment__["a" /* AjoutAlimentPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_configuration_configuration__["a" /* ConfigurationPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_alimentTabs_familleAliment_familleAliment__["a" /* FamilleAlimentPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_changePassword_changePassword__["a" /* ChangePasswordPage */]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["v" /* ErrorHandler */],
                useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* IonicErrorHandler */]
            },
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_21__providers_srvGeneral__["a" /* SrvGeneral */],
            __WEBPACK_IMPORTED_MODULE_22__providers_srvAliment__["a" /* SrvAliment */],
            __WEBPACK_IMPORTED_MODULE_13__providers_srvHttp__["a" /* SrvHttp */],
            __WEBPACK_IMPORTED_MODULE_14__providers_srvInit__["a" /* SrvInit */],
            __WEBPACK_IMPORTED_MODULE_15__providers_srvData__["a" /* SrvData */],
            __WEBPACK_IMPORTED_MODULE_16__providers_srvConfig__["a" /* SrvConfig */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvHttp__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_srvAuth__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_srvInit__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_langue_langue__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_information_information__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_configuration_configuration__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_changePassword_changePassword__ = __webpack_require__(237);
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
                    { title: _this.translate.instant("menu.information"), component: __WEBPACK_IMPORTED_MODULE_12__pages_information_information__["a" /* InformationPage */], color: 'light', function: false },
                    { title: _this.translate.instant("menu.configuration"), component: __WEBPACK_IMPORTED_MODULE_13__pages_configuration_configuration__["a" /* ConfigurationPage */], color: 'light', function: false },
                    { title: _this.translate.instant("menu.deconnexion"), component: 'deconnexion', color: 'danger', function: true },
                    { title: _this.translate.instant("menu.chPassword"), component: __WEBPACK_IMPORTED_MODULE_14__pages_changePassword_changePassword__["a" /* ChangePasswordPage */], color: 'light', function: false },
                    { title: _this.translate.instant("menu.langue"), component: __WEBPACK_IMPORTED_MODULE_11__pages_langue_langue__["a" /* LanguePage */], color: 'light', function: false }
                ];
                _this.menuDisconnect = [
                    { title: _this.translate.instant("menu.information"), component: __WEBPACK_IMPORTED_MODULE_12__pages_information_information__["a" /* InformationPage */], color: 'light', function: false },
                    { title: _this.translate.instant("menu.configuration"), component: __WEBPACK_IMPORTED_MODULE_13__pages_configuration_configuration__["a" /* ConfigurationPage */], color: 'light', function: false },
                    { title: _this.translate.instant("menu.connexion"), component: __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */], color: 'secondary', function: false },
                    { title: _this.translate.instant("menu.langue"), component: __WEBPACK_IMPORTED_MODULE_11__pages_langue_langue__["a" /* LanguePage */], color: 'light', function: false }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/app/app.html"*/'<ion-menu [content]="content" id="menuConnect">\n\n<!--\n  <ion-header>\n    <ion-toolbar>\n    </ion-toolbar>\n  </ion-header>\n-->  \n\n  <ion-content class="background-color-menu">\n    <ion-list>\n      <button ion-item *ngFor="let p of menuConnect" (click)="openMenuPage(p)" [color]="p.color">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-menu [content]="content" id="menuDisconnect">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="background-color-menu">\n    <ion-list>\n      <button ion-item *ngFor="let p of menuDisconnect" (click)="openMenuPage(p)" [color]="p.color">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n'/*ion-inline-end:"/Users/patrickribeiroamaral/Ionic/myfirstapp/src/app/app.html"*/,
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

/***/ 329:
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'SafeHtml'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], SrvSafeHtml);

//# sourceMappingURL=srvSafeHtml.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_srvHttp__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_srvGeneral__ = __webpack_require__(13);
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
                    _this.data.glycemieAuto = true;
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
            _this.data.nbHdc = formData.nbHdc;
            _this.data.glycemie = formData.glycemie;
            _this.data.injection = formData.injection;
            _this.data.dateInj = formData.currentDate.substring(0, 10);
            _this.data.timeInj = formData.currentDate.substring(11, 16);
            _this.data.commentaire = formData.commentaire;
            _this.data.glycemieAuto = false;
            _this.data.glycemieCapteur = false;
            _this.srvGeneral.setMessage(_this.dataToString(_this.data));
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
                .subscribe(function (err) { return (console.log("Delay exceeded !")); });
        };
        this.config = JSON.parse(localStorage.getItem("Config"));
    }
    return SrvData;
}());
SrvData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__providers_srvHttp__["a" /* SrvHttp */],
        __WEBPACK_IMPORTED_MODULE_5__providers_srvGeneral__["a" /* SrvGeneral */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
], SrvData);

//# sourceMappingURL=srvData.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvAliment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_srvHttp__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_srvGeneral__ = __webpack_require__(13);
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
                    // Call Events de ajoutAliment.ts afin d'afficher l'image à l'écran
                    _this.events.publish('initImageSrc', imageData);
                }, function (err) {
                    _this.srvGeneral.presentToast(_this.translate.instant("msg.image.error.select"));
                });
            });
        };
        this.upload = function (dataFile, nom, hdc, unite) {
            _this.platform.ready().then(function () {
                _this.srvGeneral.setLoader(true);
                // Destination URL
                var url = _this.srvHttp.SERVER_URL + _this.srvHttp.urlMesdAliment;
                _this.user = JSON.parse(localStorage.getItem('User'));
                if (_this.user && _this.user.num && _this.user.num.length > 0) {
                    var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
                    headers.append('user', _this.user.num);
                    var options_1 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                    _this.mesAliments.idFamille = _this.MES_ALIMENTS;
                    _this.mesAliments.nom = nom;
                    _this.mesAliments.nom_en = nom;
                    _this.mesAliments.nom_de = nom;
                    _this.mesAliments.ordre = 0;
                    _this.mesAliments.description = "";
                    _this.mesAliments.image = dataFile;
                    _this.mesAliments.glucide = +hdc;
                    _this.mesAliments.quantite = unite;
                    _this.mesAliments.idUti = 0;
                    var strMesAliments = JSON.stringify(_this.mesAliments);
                    var params = "img=" + strMesAliments;
                    _this.http.post(url, params, options_1)
                        .subscribe(function (data) {
                        _this.srvGeneral.setLoader(false);
                        _this.srvGeneral.setMessage(_this.translate.instant("msg.image.enreg"));
                        _this.getMesAliments(options_1);
                    }, function (err) {
                        _this.srvGeneral.setLoader(false);
                        _this.srvHttp.handleError(err);
                    });
                }
            });
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
                var options_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.delete(_this.srvHttp.SERVER_URL + _this.srvHttp.urlMesdAliment, options_2)
                    .timeout(10000)
                    .map(function (res) {
                    _this.getMesAliments(options_2);
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

},[238]);
//# sourceMappingURL=main.js.map