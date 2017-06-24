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
require("chart.js");
var calculation_1 = require("../../common/calculation");
var WorkComponent = (function () {
    function WorkComponent(router, http) {
        this.router = router;
        this.http = http;
        this.display = false;
    }
    WorkComponent.prototype.showDialog = function () {
        var input = {
            "B2": 100, "B3": 5, "B4": 75000, "B5": 15, "B6": 0, "B7": 1, "B8": 10, "B9": 20, "B10": 50, "B11": 0.5, "B12": 150, "B13": 30, "B16": 72, "B17": 15, "B18": 60, "B19": 10000, "B20": 0.0001, "C112": 0.5, "C113": 0.4
        };
        var calc = new calculation_1.Calculation();
        var data1_1_siemplify = calc.data1_1_siemplify();
        var data1_1_siem = calc.data1_1_siem(input);
        this.data1_1 = {
            labels: data1_1_siemplify["xData"],
            datasets: [
                {
                    label: 'Siemplify',
                    data: data1_1_siemplify["yData"],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'SIEM',
                    data: data1_1_siem["yData"],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        };
        this.data1_2 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        };
        this.display = true;
    };
    return WorkComponent;
}());
WorkComponent = __decorate([
    core_1.Component({
        templateUrl: './work.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], WorkComponent);
exports.WorkComponent = WorkComponent;
//# sourceMappingURL=work.js.map