webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__description_description__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalendarioPage = /** @class */ (function () {
    function CalendarioPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.entrada = 'https://www.lyl.com.co/api/calendario';
        this.calendar();
    }
    CalendarioPage.prototype.calendar = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.entrada).subscribe(function (data) {
                _this.calendary = data[0];
                for (var _i = 0, _a = Object.keys(_this.calendary); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (_this.calendary[item].imagen) {
                        _this.calendary[item].imagen = 'https://www.lyl.com.co' + _this.calendary[item].imagen;
                    }
                }
                console.log(_this.calendary);
            }, function (err) {
                console.log(err);
            });
        });
    };
    CalendarioPage.prototype.descripcion = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__description_description__["a" /* DescriptionPage */], {
            data: item
        });
    };
    CalendarioPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.calendar();
            refresher.complete();
        }, 2000);
    };
    CalendarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendario',template:/*ion-inline-start:"C:\Users\cbasz\OneDrive\Documentos\Proyectos\Proyecto Dario\comunidades\src\pages\calendario\calendario.html"*/'<ion-header>\n  <ion-navbar color="negro">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Calendario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Abajo para refrescar" refreshingSpinner="circles"\n      refreshingText="Recargando...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-item-divider><b>Eventos recientes</b></ion-item-divider>\n  <ion-list *ngFor="let item of calendary">\n    <ion-item (click)="descripcion(item)">\n      <div item-start class="square" style="background-color: rgb(8, 163, 58)">\n        <h1><b>{{item.start | date: \'dd\' }}</b></h1>\n        <p>{{item.start | date: \'MMMM\' }}</p>\n      </div>\n      <h2>Evento: {{item.title}}</h2>\n      <h3>{{item.body}}</h3>\n      <p>Inicio: {{item.start | date}}</p>\n      <p>Fin: {{item.end | date}}</p>\n    </ion-item>\n    <br>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\cbasz\OneDrive\Documentos\Proyectos\Proyecto Dario\comunidades\src\pages\calendario\calendario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CalendarioPage);
    return CalendarioPage;
}());

//# sourceMappingURL=calendario.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
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
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DescriptionPage = /** @class */ (function () {
    function DescriptionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = this.navParams.get('data');
    }
    DescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-description',template:/*ion-inline-start:"C:\Users\cbasz\OneDrive\Documentos\Proyectos\Proyecto Dario\comunidades\src\pages\description\description.html"*/'<ion-header>\n  <ion-navbar color="negro">\n    <button ion-button menuToggle style="background-color: rgb(22, 159, 132)">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Descripcion del evento</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item-divider><b>{{data.title}}</b></ion-item-divider>\n  <ion-item>\n      <img *ngIf="data.imagen" [src]="data.imagen" style="width: 100%; height: 100%;">\n      <img *ngIf="!data.imagen" src="../../assets/imgs/logo.png" style="width: 100%; height: 100%;" />\n  </ion-item>\n  <ion-item>\n    <h2>{{data.body}}</h2>\n  </ion-item>\n  <ion-item>\n    <p><b>Lugar:</b>{{data.lugar}}</p>\n  </ion-item>\n  <ion-item>\n    <p><b>Fecha Desde:</b> {{data.start | date}}</p>\n  </ion-item>\n  <ion-item>\n    <p><b>Fecha Hasta:</b> {{data.end | date}}</p>\n  </ion-item>\n  <ion-item>\n    <p><b>Informacion:</b> {{data.url}}</p>\n  </ion-item>\n  <iframe src="https://player.vimeo.com/video/12345" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n\n  <button ion-button color="secondary" full>Asistire</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\cbasz\OneDrive\Documentos\Proyectos\Proyecto Dario\comunidades\src\pages\description\description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DescriptionPage);
    return DescriptionPage;
}());

//# sourceMappingURL=description.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\cbasz\OneDrive\Documentos\Proyectos\Proyecto Dario\comunidades\src\pages\list\list.html"*/'<ion-content class="getstart " padding>\n\n  <h1 text-center style="color: aliceblue; position: relative; top: 10%"><b>Acceso Comunidades</b></h1>\n\n  <div class="buttonCOntainer">\n    <button ion-button>\n      <img src="../../assets/imgs/calendario.png">\n      <label>Calendario</label>\n    </button>\n    <button ion-button>\n      <img src="../../assets/imgs/Carrito.png">\n      <label>Catalogo</label>\n    </button>\n    <button ion-button>\n      <img src="../../assets/imgs/dinamizadores.png">\n      <label>Dinamizadores</label>\n    </button>\n    <button ion-button>\n      <img src="../../assets/imgs/Carrito.png">\n      <label>Catalogo</label>\n    </button>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\cbasz\OneDrive\Documentos\Proyectos\Proyecto Dario\comunidades\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendario_calendario__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, fb, http, alert, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alert = alert;
        this.menuCtrl = menuCtrl;
        //this.menuCtrl.enable(false, 'myMenu');
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var data = this.loginForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            username: data.email,
            password: data.password
        };
        return new Promise(function (resolve) {
            _this.http.post('https://evadevback.lyl.com.co:8000/api/ws/evaauthservice', { username: credentials.username, password: credentials.password }, { headers: { 'Content-Type': 'application/json' } })
                .map(function (response) { return response; })
                .subscribe(function (response) {
                if (response) {
                    console.log(response);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__calendario_calendario__["a" /* CalendarioPage */]);
                    resolve(response);
                }
                else {
                    console.log(response);
                    resolve(false);
                }
            }, function (error) {
                _this.presentAlert();
                resolve(false);
            });
        });
    };
    LoginPage.prototype.presentAlert = function () {
        var alert = this.alert.create({
            title: 'Error',
            subTitle: 'Error En Usuario Y Contraseña',
            buttons: ['Aceptar']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\cbasz\OneDrive\Documentos\Proyectos\Proyecto Dario\comunidades\src\pages\login\login.html"*/'<ion-content class="getstart" padding>\n\n  <h1 text-center style="color: aliceblue; position: relative; top: 10%;"><b>Acceso Comunidades</b></h1>\n\n  <form (ngSubmit)="login()" [formGroup]="loginForm" style="position: relative; top: 30%;">\n    <ion-list>\n      <ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n        <ion-icon name="md-people" color="secondary" item-start></ion-icon>\n        <ion-input type="text" placeholder="Email" class="placeholder-text" formControlName="email"></ion-input>\n      </ion-item>\n\n      <div ngxErrors="email" #emailErrors="ngxErrors">\n        <div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">\n          <p style="color: aliceblue;">Tiene que ser un email valido</p>\n        </div>\n      </div>\n\n      <ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n        <ion-icon name="md-lock" color="secondary" item-start></ion-icon>\n        <ion-input type="password" placeholder="Password" class="placeholder-text" formControlName="password"></ion-input>\n      </ion-item>\n\n      <div ngxErrors="password" #passwordErrors="ngxErrors">\n        <div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">\n          <p style="color: aliceblue;">Tu contraseña tiene menos de 5 caracteres</p>\n        </div>\n      </div>\n\n    </ion-list>\n\n    <div style="margin-top:20%;">\n      <!-- <div class="form-error">{{loginError}}</div> -->\n\n      <div text-center style="color: aliceblue;">\n        <p style="text-align: end">¿Olvido <b>Contraseña</b>?</p>\n      </div>\n\n      <div text-center>\n        <button ion-button full type="submit" [disabled]="!loginForm.valid" color="secondary" round>Ingresar</button>\n      </div>\n\n      <div text-center style="color: aliceblue; ">\n        <p>Registrar <b>nuevo usuario</b></p>\n      </div>\n    </div>\n  </form>\n  <ion-footer text-center style="color: aliceblue; font-size: 0.8em;">\n    <p>Desarrolado por <b style="color: rgb(22, 159, 132);">Site Digital</b></p>\n  </ion-footer>\n</ion-content>'/*ion-inline-end:"C:\Users\cbasz\OneDrive\Documentos\Proyectos\Proyecto Dario\comunidades\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"C:\Users\cbasz\OneDrive\Documentos\Proyectos\Proyecto Dario\comunidades\src\pages\cart\cart.html"*/'<ion-header>\n  <ion-navbar color="negro">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Carrito de compras</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"C:\Users\cbasz\OneDrive\Documentos\Proyectos\Proyecto Dario\comunidades\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DinaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__descriptiondina_descriptiondina__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DinaPage = /** @class */ (function () {
    function DinaPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.dina = [];
        this.img = [];
        this.entrada = 'https://www.lyl.com.co/api/dinamizadores';
        this.dinamizadores();
    }
    DinaPage.prototype.dinamizadores = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.entrada).subscribe(function (data) {
                console.log(data[0]);
                _this.dina = data[0];
                for (var _i = 0, _a = Object.keys(_this.dina); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (_this.dina[item].imagen) {
                        _this.dina[item].imagen = 'https://www.lyl.com.co' + _this.dina[item].imagen;
                    }
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    DinaPage.prototype.descripcion = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__descriptiondina_descriptiondina__["a" /* DescriptiondinaPage */], {
            data: item
        });
    };
    DinaPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.dinamizadores();
            refresher.complete();
        }, 2000);
    };
    DinaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dina',template:/*ion-inline-start:"C:\Users\cbasz\OneDrive\Documentos\Proyectos\Proyecto Dario\comunidades\src\pages\dina\dina.html"*/'<ion-header>\n  <ion-navbar color="negro">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dinamizadores</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Abajo para refrescar" refreshingSpinner="circles"\n      refreshingText="Recargando...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngFor="let item of dina">\n    <div style="background-color: #f2f2f2">\n      <p><b>Area: {{item.area}}</b></p>\n    </div>\n    <div>\n      <img [src]="item.imagen">\n    </div>\n    <ion-item>\n      <div item-start class="square" style="background-color: #f2f2f2">\n        <p><b>{{item.parametro_id}}</b></p>\n        <p>Grado</p>\n      </div>\n      <h2>{{item.titulo}}</h2>\n      <p>{{item.descripcion}}</p>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button icon-start clear item-end (click)="descripcion(item)">\n        <ion-icon name="md-eye"></ion-icon>\n        Ver más\n      </button>\n    </ion-item>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\cbasz\OneDrive\Documentos\Proyectos\Proyecto Dario\comunidades\src\pages\dina\dina.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DinaPage);
    return DinaPage;
}());

//# sourceMappingURL=dina.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptiondinaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DescriptiondinaPage = /** @class */ (function () {
    function DescriptiondinaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = this.navParams.get('data');
        console.log(this.data);
    }
    DescriptiondinaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DescriptiondinaPage');
    };
    DescriptiondinaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-descriptiondina',template:/*ion-inline-start:"C:\Users\cbasz\OneDrive\Documentos\Proyectos\Proyecto Dario\comunidades\src\pages\descriptiondina\descriptiondina.html"*/'<ion-header>\n  <ion-navbar color="negro">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Descripcion del dinamizador</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <div>\n      <img [src]="data.imagen">\n    </div>\n    <ion-item>\n      <h2 text-center>{{data.titulo}}</h2>\n      <p>{{data.descripcion}}</p>\n    </ion-item>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\cbasz\OneDrive\Documentos\Proyectos\Proyecto Dario\comunidades\src\pages\descriptiondina\descriptiondina.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DescriptiondinaPage);
    return DescriptiondinaPage;
}());

//# sourceMappingURL=descriptiondina.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calendario_calendario__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_description_description__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dina_dina__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_descriptiondina_descriptiondina__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ultimate_ngxerrors__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_description_description__["a" /* DescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dina_dina__["a" /* DinaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_descriptiondina_descriptiondina__["a" /* DescriptiondinaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_description_description__["a" /* DescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dina_dina__["a" /* DinaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_descriptiondina_descriptiondina__["a" /* DescriptiondinaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calendario_calendario__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dina_dina__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Calendario', component: __WEBPACK_IMPORTED_MODULE_4__pages_calendario_calendario__["a" /* CalendarioPage */] },
            { title: 'Dinamizadores', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.pageCalendario = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_calendario_calendario__["a" /* CalendarioPage */]);
    };
    MyApp.prototype.pageCarrito = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.pageDina = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_dina_dina__["a" /* DinaPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\cbasz\OneDrive\Documentos\Proyectos\Proyecto Dario\comunidades\src\app\app.html"*/'<ion-menu [content]="content"  id="myMenu">\n  <ion-content class="getstart" padding>\n    <h1 text-center style="color: aliceblue; position: relative; top: 10%"><b>Acceso Comunidades</b></h1>\n    <div class="buttonCOntainer">\n      <button ion-button menuClose (click)="pageCalendario()">\n        <img src="../../assets/imgs/calendario.png">\n        <label>Calendario</label>\n      </button>\n      <button ion-button menuClose (click)="pageCarrito()" disabled="true">\n        <img src="../../assets/imgs/Carrito.png">\n        <label>Catalogo</label>\n      </button>\n      <button ion-button menuClose (click)="pageDina()">\n        <img src="../../assets/imgs/dinamizadores.png">\n        <label>Dinamizadores</label>\n      </button>\n      <button ion-button menuClose (click)="pageCarrito()" disabled="true">\n        <img src="../../assets/imgs/Carrito.png">\n        <label>Catalogo</label>\n      </button>\n    </div>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>'/*ion-inline-end:"C:\Users\cbasz\OneDrive\Documentos\Proyectos\Proyecto Dario\comunidades\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map