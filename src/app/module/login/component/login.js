"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var headers_1 = require("./../../common/headers");
var LoginComponent = (function () {
    function LoginComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    LoginComponent.prototype.login = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        /*let body = JSON.stringify({ username, password });
        this.http.post('http://localhost:8000/sessions/create', body, { headers: contentHeaders })
          .subscribe(
            response => {
              localStorage.setItem('id_token', response.json().id_token);
              this.router.navigate(['home']);
            },
            error => {
              alert(error.text());
              console.log(error.text());
            }
          );*/
        var authentication = false;
        this.http.get('./data/users.json', { headers: headers_1.contentHeaders })
            .subscribe(function (response) {
            response.json().forEach(function (user) {
                if (user.username == username && user.password == password) {
                    authentication = true;
                    localStorage.setItem('currentUser', user.username);
                    _this.router.navigate(['workspace']);
                }
            });
            if (!authentication) {
                alert("Login Failed!");
            }
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: './login.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map