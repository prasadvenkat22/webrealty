webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/LisitngService/listings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__node_modules_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListingsService = /** @class */ (function () {
    ///http.get(originUrl + 'YOUR API URI HERE').subscribe(result => {...});
    //,@Inject('BUILD_URL') originUrl:string
    function ListingsService(http) {
        this.http = http;
        this.thisurl = "";
        //    this.thisurl = originUrl;
        console.log('/Listings.json');
        console.log('inside Listings sevrvice  constructor');
    }
    ListingsService.prototype.handleerror = function (error) {
        console.log(error);
        var message = 'Error status code ${error}';
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(message);
    };
    ListingsService.prototype.getListings = function () {
        console.log('inside listing service');
        return this.http.get('/Listings.json')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7__node_modules_rxjs_operators__["catchError"])(this.handleerror));
    };
    ListingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], ListingsService);
    return ListingsService;
}());



/***/ }),

/***/ "./src/app/Upload/component.upload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_ErrorObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UploadComponent = /** @class */ (function () {
    function UploadComponent(http, rout) {
        this.http = http;
        this.rout = rout;
        this.progress = 0;
        this.message = '';
    }
    UploadComponent.prototype.ngOnInit = function () {
        //this.sub = this.rout.params.subscribe(params => {
        //  this.clientId = +params['id']; // (+) converts string 'id' to a number
        this.clientId = this.rout.snapshot.params['id'];
        // In a real app: dispatch action to load the details here.
        //});
    };
    //ngOnDestroy() {
    //  this.sub.unsubscribe();
    //}
    UploadComponent.prototype.upload = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var formData = new FormData();
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            formData.append(this.clientId.toString(), file.name, file);
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        // DON'T SET THE Content-Type to multipart/form-data, 
        //You'll get the Missing content-type boundary error
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        this.http.post('api/Upload', formData, { reportProgress: true, observe: 'events' })
            ///.map((res: any) => res.json())
            .subscribe(function (resfileupload) {
            //   this.success = res;
            // console.log(this.success.);
            if (resfileupload === __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpEventType */].UploadProgress)
                console.log(Math.round(resfileupload.loaded / resfileupload.total * 100));
            // this.data =
            //   Math.round((resfileupload.loaded / resfileupload.total * 100));
            else if (resfileupload === __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpEventType */].Response)
                console.log(resfileupload);
            _this.fileuploadedinfo = resfileupload;
            _this.submitted = true;
            console.log(_this.fileuploadedinfo);
            _this.success = true;
        }, function (err) {
            console.log("Error occured");
            _this.handleError(err);
        });
    };
    UploadComponent.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error('Backend returned code ${error.status}, ' +
                'body was: ${error.error}');
        }
        // return an ErrorObservable with a user-facing error message
        return new __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */]("Something Went Wrong");
    };
    ;
    UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'UploadComponent',
            template: __webpack_require__("./src/app/Upload/upload.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/Upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "{{clientId}}\r\n<form (ngSubmit)=\"onSubmit(contactsform)\">\r\n\r\n  <input #fileinput style=\"display:none\"\r\n         type=\"file\" multiple (change)=\"upload(file.files)\" />\r\n\r\n  <br />\r\n  <button type=\"button\" (change)=\"fileinput.click() \">\r\n    Add Files\r\n  </button>\r\n  <span style=\"font-weight:bold;color:green;\" *ngIf=\"body > 0 && body < 100\">\r\n    {{body}}%\r\n  </span>\r\n\r\n  <span style=\"font-weight:bold;color:green;\" *ngIf=\"message\">\r\n    {{\r\n    clientID\r\n    }}\r\n\r\n  </span>\r\n  <div [routerLinkActive]='[\"link-active\"]'>\r\n    <a [routerLink]='[\"/upload\"]' (click)='collapse()'>\r\n      <span class='glyphicon glyphicon-upload'></span> Upload\r\n    </a>\r\n  </div>\r\n</form>\r\n\r\n<div *ngIf=\"fileuploadedinfo\">\r\n  <span class=\"badge-dark\"></span>\r\n  Files uploaded: Count / Size:\r\n  {{fileuploadedinfo.count }} /\r\n  {{fileuploadedinfo.filePath }}\r\n  PATH:         {{fileuploadedinfo.size }}\r\n</div>\r\n<input #file type=\"file\" multiple (change)=\"upload(file.files)\" />\r\n<br />\r\n<span style=\"font-weight:bold;color:green;\" *ngIf=\"progress > 0 && progress < 100\">\r\n  {{progress}}%\r\n</span>\r\n\r\n<span style=\"font-weight:bold;color:green;\" *ngIf=\"message\">\r\n  {{message}}\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n  <div class='row'>\r\n    <div class='col-sm-3'>\r\n      <app-nav-menu></app-nav-menu>\r\n    </div>\r\n    <div class='col-sm-9 body-content'>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_menu_nav_menu_component__ = __webpack_require__("./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__LisitngService_listings_service__ = __webpack_require__("./src/app/LisitngService/listings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Upload_component_upload__ = __webpack_require__("./src/app/Upload/component.upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contacts_contacts_component__ = __webpack_require__("./src/app/contacts/contacts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//import { NgxSpinnerModule } from 'ngx-spinner';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nav_menu_nav_menu_component__["a" /* NavMenuComponent */],
                //NgxSpinnerModule,
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__Upload_component_upload__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contacts_contacts_component__["a" /* contactsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'ng-cli-universal' }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                //NgxSpinnerModule,
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
                    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_11__contacts_contacts_component__["a" /* contactsComponent */] },
                    { path: 'Upload/:id', component: __WEBPACK_IMPORTED_MODULE_10__Upload_component_upload__["a" /* UploadComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__LisitngService_listings_service__["a" /* ListingsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<br />\r\n<br />\r\n<br />\r\n\r\n<button (click)=\"toggle()\" id=\"bt\">\r\n  {{buttonName}}\r\n</button>\r\n<h4>User Registration</h4>\r\n<!--<ngx-spinner></ngx-spinner>-->\r\n\r\n<ng-container *ngIf=\"show\">\r\n  <form [formGroup]=\"contactsform\" (ngSubmit)=\"onSubmit(contactsform)\" class=\"form-horizontal\">\r\n\r\n    <fieldset>\r\n      <div class=\"form-group-sm\">\r\n        <label class=\"control-label col-sm-1\">FirstName:</label>\r\n        <input type=\"text\" formControlName=\"firstname\" class=\"form-control\" [(ngModel)]=\"firstname\">\r\n      </div>\r\n      <div class=\"form-group-sm\">\r\n        <label class=\"control-label col-sm-1\">LastName:    </label>\r\n        <input type=\"text\" formControlName=\"lastname\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group-sm\">\r\n\r\n        <label class=\"control-label col-sm-1\">Phone:    </label>\r\n        <input type=\"text\" formControlName=\"phone\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group-sm\">\r\n\r\n        <label class=\"control-label col-sm-1\">Email:</label>\r\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\">\r\n\r\n      </div>\r\n      <div class=\"form-group-sm\">\r\n\r\n        <label class=\"control-label col-sm-1\"> Confirm Email: </label>\r\n        <input type=\"text\" formControlName=\"confirmemail\" class=\"form-control\">\r\n      </div>\r\n\r\n      <!--class=\"form-group\" formGroupName=\"address\"-->\r\n      <div class=\"form-group-sm\">\r\n        <label class=\"control-label col-sm-1\">Street:</label>\r\n        <input type=\"text\" formControlName=\"street\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group-sm\">\r\n        <label class=\"control-label col-sm-1\">City:</label>\r\n        <input type=\"text\" formControlName=\"city\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group-sm\">\r\n        <label class=\"control-label col-sm-1\">State:</label>\r\n        <input type=\"text\" formControlName=\"state\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group-sm\">\r\n        <label class=\"control-label col-sm-1\">Zip:</label>\r\n        <input type=\"text\" formControlName=\"zip\" class=\"form-control\">\r\n      </div>\r\n\r\n    </fieldset>\r\n\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!contactsform.valid\">Add</button>\r\n\r\n\r\n  </form>\r\n</ng-container>\r\n\r\n  Your Registration Details:\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n Id:   {{contact.id}}\r\n  </div>\r\n  <div class=\"row\">\r\n Email:   {{contact.email}}\r\n  </div>\r\n  <div class=\"row\">\r\n FirstName:   {{contact.firstName}}\r\n  </div>\r\n\r\n</div>\r\n\r\n{{firstname}}\r\n<h1>Add Files/Images:</h1>\r\n<span style=\"font-weight:bold;color:green;\" *ngIf=\"progress > 0 && progress < 100\">\r\n  {{progress}}%\r\n</span>\r\n\r\n<input #file type=\"file\" multiple (change)=\"upload(file.files)\" />\r\n\r\n<ng-container>\r\n\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      Count : {{fileuploadedinfo.count }}\r\n    </div>\r\n    <div class=\"row\">\r\n      Size:{{fileuploadedinfo.size }}\r\n    </div>\r\n    <div class=\"row\">\r\n      Path:{{fileuploadedinfo.filePath }}\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ng-container>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_ErrorObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { NgxSpinnerService } from 'ngx-spinner';






var contactsComponent = /** @class */ (function () {
    function contactsComponent(_formBuilder, http, rout
    //, private spinner: NgxSpinnerService
    ) {
        this._formBuilder = _formBuilder;
        this.http = http;
        this.rout = rout;
        this.submitted = false;
        this.show = true;
        this.buttonName = 'Hide';
        this.contactId = '1';
    }
    contactsComponent.prototype.ngOnInit = function () {
        this.contactsform = this._formBuilder.group({
            firstname: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3)]],
            lastname: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            phone: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            confirmemail: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            //address: this._formBuilder.group(
            //    {
            street: [],
            city: [],
            state: [],
            zip: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^[1-9][0-9]{4}$')]]
            //}          // )
        });
    };
    contactsComponent.prototype.toggle = function () {
        this.show = !this.show;
        //change the name of button
        if (this.show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    contactsComponent.prototype.handleerror = function (error) {
        console.log(error);
        var message = 'Error status code ${error}';
        return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].throw(message);
    };
    contactsComponent.prototype.CallFileUploads = function (contact) {
        //JSON.parse(json)
        //['uri/cars'], {queryParams: {'page': 2}}
        // console.log(contactId);
        //  this.router.navigate(['/component-two', 456]);
        //}
        this.rout.navigate(['/Upload', contact.id]);
    };
    contactsComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        console.log(value);
        var body = JSON.stringify(value);
        console.log(body);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        //setting body of the parameters to send via post 
        //this.spinner.show();
        this.http
            .post('/api/contacts/', body, httpOptions)
            ///.map((res: any) => res.json())
            .subscribe(function (res) {
            //  console.log(res);
            _this.contact = res;
            console.log(_this.contact);
            _this.submitted = true;
            _this.buttonName = "Show";
        }, function (err) {
            console.log("Error occured");
            _this.handleerror(err);
            _this.submitted = false;
            _this.buttonName = "Hide";
        }, function () {
            console.log("The POST Upload Files is now completed.");
        });
        //this.spinner.hide();
        this.show = false;
    };
    contactsComponent.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error('Backend returned code ${error.status}, ' +
                'body was: ${error.error}');
        }
        // return an ErrorObservable with a user-facing error message
        return new __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */]("Something Went Wrong");
    };
    ;
    contactsComponent.prototype.upload = function (files, con) {
        var _this = this;
        if (files.length === 0)
            return;
        var formData = new FormData();
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            formData.append(file.name, file);
        }
        var myheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        myheaders.append('Accept', 'application/json');
        // DON'T SET THE Content-Type to multipart/form-data, 
        //You'll get the Missing content-type boundary error
        var myParams = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["e" /* HttpParams */]()
            .append('ID', this.firstname);
        console.log(this.contact);
        // options.headers.append('ID', this.contact.LastName);
        // console.log(options.headers);
        myheaders.append('Accept', 'application/json');
        this.http.post('api/Upload', formData, { reportProgress: true, params: myParams })
            ///.map((res: any) => res.json())
            .subscribe(function (resfileupload) {
            if (resfileupload.type = __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpEventType */].UploadProgress)
                _this.progress = Math.round(100 * resfileupload.loaded / resfileupload.total);
            else if (resfileupload.type === __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpEventType */].Response)
                _this.message = resfileupload.body.toString();
            console.log(_this.success);
            _this.fileuploadedinfo = resfileupload;
            _this.submitted = true;
            console.log(_this.fileuploadedinfo);
            _this.success = true;
        }, function (err) {
            console.log("Error occured");
            _this.handleerror(err);
        });
    };
    contactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'contacts',
            template: __webpack_require__("./src/app/contacts/contacts.component.html"),
            styles: ['input.ng-invalid {border-left: 5px solid red} ']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]
            //, private spinner: NgxSpinnerService
        ])
    ], contactsComponent);
    return contactsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<br />\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body \" > \r\n        <p class=\"card-text  float-sm-right text-primary pull-left \">Web Realty Services: Free Apprisals, credit, background checks and rental applications. We renovate, maintain and lease guest houses and place tenants. </p>\r\n        <div class=\"container-fluid bg-transparent\">\r\n          <button class=\"button btn-outline-primary btn-sm mr-sm\" (click)=\"SellerInfo()\">Buy</button>\r\n          <button class=\"button btn-outline-primary btn-sm mr-sm\" (click)=\"SellerInfo()\">Sell</button>\r\n          <button class=\"button btn-outline-primary btn-sm mr-sm\" (click)=\"RenterInfo()\">Rent</button>\r\n          <button class=\"button btn-outline-primary btn-sm mr-sm\" (click)=\"contacts()\">contacts</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<h6 class=\"card-title bg-transparent text-center font-italic\">Available Listings</h6>\r\n\r\n<div class=\"table\">\r\n  <div class=\"flex-xl-row\" *ngFor=\"let d of alllistings  ;  let i = index \">\r\n    <div class=\"col-xs-6 col-md-4  pull-left\">\r\n      <span class=\"badge badge-info btn-outline-info\">\r\n        Rooms / Baths :\r\n      </span>\r\n      <span class=\"bg-secondary  badge-secondary badge-pill\">\r\n        {{   d.TOTAL_ROOMS   }} /  {{   d.BATHROOMS   }}\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"flex-xl-column col-xs-6 col-md-4  pull-right\" *ngIf=\"d.PRICE?.length > 0\">\r\n      <span class=\"badge badge-info\">\r\n        Price / Sq.foot\r\n      </span>\r\n      <span class=\"badge badge-secondary badge-pill\" style=\"font:italic\">\r\n\r\n        {{   d.PRICE  }} / {{   d.SQUARE_FOOTAGE   }}\r\n      </span>\r\n\r\n    </div>\r\n    <div class=\"flex-xl-column col-xs-6 col-md-4  pull-left\" *ngIf=\"d.STATUS?.length > 0\">\r\n      <!--<button class=\"btn-link btn-group-xs\" name=\"AgntBtn\" (click)=\"GetAgentInfo()\"> Agent Details </button>-->\r\n      <span class=\"badge badge-info\" style=\"font:bold;font-style:italic\">\r\n        Satus / Date Available :\r\n      </span>\r\n      {{   d.STATUS   }} / {{   d.DATE_UPDATE   }}\r\n    </div>\r\n    <div class=\"flex-xl-column col-xs-6 col-md-4 pull-left \">\r\n      <span class=\"badge badge-info\">\r\n\r\n        Address :\r\n      </span>\r\n      <div style=\"font:bold;font-style:italic\">\r\n        {{d.UNIT_NUMBER}}, {{d.STREET_NUMBER}}, {{   d.ADDRESS   }} , {{d.CITY}}  , {{d.ZIP_CODE}}\r\n      </div>\r\n    </div>\r\n    <!--<button class=\"btn-link btn-group-xs\" name=\"AgntBtn\" (click)=\"GetAgentInfo()\"> Description </button>-->\r\n    <!--*ngIf=\"teamMembers?.length > 0\"-->\r\n    <div class=\"flex-xl-column col-xs-6 col-md-4 pull-left \" *ngIf=\"d.DESCRIPTION?.length > 0\">\r\n      <span class=\"badge bg-info\">\r\n        Description:\r\n      </span>\r\n      <div class=\"text-sm-left \" style=\"white-space:pre-wrap;overflow-wrap:break-word;text-overflow:ellipsis\">\r\n        {{d.DESCRIPTION }}\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!--<p *ngIf=\"e.PHOTO_URL.length > 3\"> </p>-->\r\n\r\n    <div class=\"flex-row col-xs-6 col-md-4\">\r\n      <ngb-carousel>\r\n\r\n        <div class=\"flex-column\" *ngFor=\"let e of d.PHOTOS let j= index\">\r\n          <p *ngIf=\"e.PHOTO_URL?.length > 0\"> </p>\r\n\r\n          <ng-template ngbSlide >\r\n            <img src={{e.PHOTO_URL}} class=\"img-responsive center-block\" width=\"300\" height=\"200\">\r\n\r\n            <div class=\"carousel-caption font-weight-bold text-secondary text-sm-left\">\r\n              <h4>Photo  {{j}} </h4>\r\n            </div>j\r\n          </ng-template>\r\n        </div>\r\n\r\n      </ngb-carousel>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LisitngService_listings_service__ = __webpack_require__("./src/app/LisitngService/listings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomeComponent = /** @class */ (function () {
    function HomeComponent(LS, route) {
        this.LS = LS;
        this.route = route;
        this.isIn = false;
        this.isSeller = false; // store state
        this.isRenter = false;
        this.isBuyer = false;
        this.showagent = true;
        this.errorMessage = "";
        this.searchText = "";
        this.btnIsSellerClick = false;
        this.btnIsBuyClick = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.LS.getListings()
            .subscribe(function (data) { _this.alllistings = data; }, function (error) { return _this.handleerror; } // error path
        , function () { return console.log('completed homecomponent listing service call'); } //default path
        );
        // this.btnIsSellerClick = false;
    };
    HomeComponent.prototype.handleerror = function (error) {
        console.log(error);
        var message = 'Error status code ${error}';
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].throw(message);
    };
    HomeComponent.prototype.toggleState = function () {
        // isIn: boolean = false;
        var isIn = false;
        this.isIn = !this.isIn;
    };
    //  this.isIn = bool === false ? true : false;
    //contacts
    HomeComponent.prototype.contacts = function () {
        //  this.isSeller = !this.isSeller;
        //this.route.navigate(['/seller']);
        //;  this.route.navigate(['/seller'])
        //   this.btnIsSellerClick = !this.btnIsSellerClick ;
        // this.route.navigate(['/seller'], { skipLocationChange: true });
        this.route.navigateByUrl('/contacts');
    };
    HomeComponent.prototype.SellerInfo = function () {
        this.isSeller = !this.isSeller;
        //this.route.navigate(['/seller']);
        //;  this.route.navigate(['/seller'])
        //   this.btnIsSellerClick = !this.btnIsSellerClick ;
        // this.route.navigate(['/seller'], { skipLocationChange: true });
        this.route.navigateByUrl('/seller');
    };
    HomeComponent.prototype.BuyerInfo = function () {
        this.isBuyer = !this.isBuyer;
        this.route.navigate(['/buyer'], { skipLocationChange: false });
    };
    HomeComponent.prototype.RenterInfo = function () {
        this.isRenter = !this.isRenter;
        this.route.navigate(['/renter'], { skipLocationChange: false });
        //this.route.navigate(['/AgentDetails'], agent.AGENT_ID)
    };
    HomeComponent.prototype.home = function () {
        this.route.navigate(['/home'], { skipLocationChange: false });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__LisitngService_listings_service__["a" /* ListingsService */], __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- .navbar -->\r\n<nav class=\"navbar fixed-top navbar-expand-sm    navbar-light  bg-light  \">\r\n\r\n  <!--<a class=\"img-thumbnail    mr-auto\" href=\"#\">\r\n    <img src=\"../../../../wwwroot/assets/Logo.png\" height=\"45\" width=\"35\"\r\n         style=\"align-items:flex-start\" class=\"img-fluid\"\r\n         alt=\"logo\" />\r\n  </a>-->\r\n  <div class=\"container-fluid\">\r\n\r\n    <ul class=\"nav nav-pills nav-fill nav-justified mr-auto\" routerLinkActive=\"Active\">\r\n      <li class=\"navbar-brand\" data-toggle=\"pill\" routerLink=\"/contacts\" id=\"contacts\">\r\n        <img src=\"/assets/Logo.jpg\" height=\"50\" width=\"40\"\r\n             style=\"align-items:flex-start\" class=\"img-fluid\"\r\n             alt=\"logo\" />\r\n      </li>\r\n      <li class=\"nav-item nav-fill\">\r\n        <a class=\"nav-link active\" data-toggle=\"pill\" routerLink=\"/home\" id=\"home\">Home</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item nav-fill\">\r\n        <a class=\"nav-link\" data-toggle=\"pill\">Link</a>\r\n      </li>\r\n\r\n    </ul>\r\n    <button class=\"button btn-outline-primary btn-sm mr-xs navbar-toggler-right\" data-toggle=\"collapse\"\r\n            data-target=\"#navbarSupportedContent\" height=\"45\" width=\"35\">\r\n      <span class=\"navbar-toggler-icon align-top\"></span>\r\n\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav    mr-auto\">\r\n\r\n        <li class=\"nav-item  mr-auto\">\r\n          <!--<button class=\"btn btn-primary btn-xs mr-auto\" (click)=\"contacts()\">Log In</button>-->\r\n\r\n          <a class=\"nav-link mr-auto\" href=\"../../contacts\">Log In</a>\r\n        </li>\r\n        <li class=\"nav-item  mr-auto\">\r\n          <a class=\"nav-link\" href=\"#\">Blogs</a>\r\n        </li>\r\n        <li class=\"nav-item  mr-auto\">\r\n          <a class=\"nav-link\" href=\"#\">Contact Us</a>\r\n        </li>\r\n\r\n      </ul>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n   \r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
        this.isExpanded = false;
    }
    NavMenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavMenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-menu',
            template: __webpack_require__("./src/app/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__("./src/app/nav-menu/nav-menu.component.css")]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getBaseUrl"] = getBaseUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])(providers).bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map