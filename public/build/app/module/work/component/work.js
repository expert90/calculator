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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
require("chart.js");
var calculation_1 = require("../../common/calculation");
var WorkComponent = (function () {
    function WorkComponent(router, http) {
        this.router = router;
        this.http = http;
        this.input = {
            /*"B2" : "", "B3" : "", "B4" : "", "B5" : "", "B6" : "", "B7" : "", "B8" : "", "B9" : "", "B10" : "", "B11" : "", "B12" : "", "B13" : "", "B16" : "", "B17" : "", "B18" : "", "B19" : "", "B20" : "", "C112" : "", "C113" : ""*/
            "B2": "100", "B3": "5", "B4": "75000", "B5": "15", "B6": "0", "B7": "1", "B8": "10", "B9": "20", "B10": "50", "B11": "0.5", "B12": "150", "B13": "30", "B16": "72", "B17": "15", "B18": "60", "B19": "10000", "B20": "0.0001", "C112": "0.5", "C113": "0.4"
        };
        this.msgs = [];
        this.display = false;
        this.data1_1_options = {
            title: {
                display: true,
                text: 'LEARNING CURVE FOR NEW ANALYSTS',
                fontSize: 16
            }
        };
        this.data1_2_options = {
            title: {
                display: true,
                text: 'AVERAGE TIME SPENT ON ALERTS/CASES',
                fontSize: 16
            },
            scales: {
                xAxes: [{
                        stacked: true
                    }],
                yAxes: [{
                        stacked: true
                    }]
            }
        };
        this.data2_1_options = {
            title: {
                display: true,
                text: 'PLAYBOOKS',
                fontSize: 16
            }
        };
        this.data2_2_options = {
            title: {
                display: true,
                text: 'HOURS SPENT CREATING REPORTS - MONTHLY',
                fontSize: 16
            }
        };
        this.data3_1_options = {
            title: {
                display: true,
                text: 'HOURS SPENT HUNTING THREATS',
                fontSize: 16
            }
        };
        this.data3_2_options = {
            title: {
                display: true,
                text: 'ANALYST (VIRTUAL) AMOUNT',
                fontSize: 16
            }
        };
        this.data4_1_options = {
            title: {
                display: true,
                text: 'ANALYST SHIFT CHANGE',
                fontSize: 16
            }
        };
        this.data4_2_options = {
            title: {
                display: true,
                text: 'TIME TO UPDATE POLICIES FROM OTHER SOCS (WORKFLOW)',
                fontSize: 16
            }
        };
        this.data5_1_options = {
            title: {
                display: true,
                text: 'INCIDENT REPORT TIME',
                fontSize: 16
            }
        };
        this.data5_2_options = {
            title: {
                display: true,
                text: 'SLA AVERAGE MONTHLY PENALTY',
                fontSize: 16
            }
        };
        this.data6_1_options = {
            title: {
                display: true,
                text: 'NIGHT SHIFT',
                fontSize: 16
            }
        };
        this.data6_2_options = {
            title: {
                display: true,
                text: 'ALERT CAPACITY',
                fontSize: 16
            }
        };
    }
    WorkComponent.prototype._keyPress = function (event) {
        /*let currentStr = event.target.value + String.fromCharCode(event.charCode);
    
        let anchor = RegExp('^' + require('float-regex').source + '$');
        if (!anchor.test(currentStr)) {
            event.preventDefault();
        }*/
    };
    WorkComponent.prototype.showDialog = function () {
        for (var key in this.input) {
            if (this.input[key] == '') {
                document.getElementById(key).focus();
                this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'All inputs are required.' });
                return;
            }
        }
        this.msgs = [];
        var calc = new calculation_1.Calculation();
        var data1_1_siemplify = calc.data1_1_siemplify();
        var data1_1_siem = calc.data1_1_siem(this.input);
        this.data1_1 = {
            labels: data1_1_siemplify["xData"],
            datasets: [
                {
                    label: 'Siemplify',
                    data: data1_1_siemplify["yData"],
                    fill: false,
                    backgroundColor: '#4472c4',
                    borderColor: '#4472c4'
                },
                {
                    label: 'SIEM',
                    data: data1_1_siem["yData"],
                    fill: false,
                    backgroundColor: '#ed7d31',
                    borderColor: '#ed7d31'
                }
            ]
        };
        var data1_2_dataGathering = calc.data1_2_dataGathering(this.input);
        var data1_2_triage = calc.data1_2_triage(this.input);
        var data1_2_investigation = calc.data1_2_investigation(this.input);
        this.data1_2 = {
            labels: ['', 'SIEMPLIFY', 'SIEM', ''],
            datasets: [
                {
                    label: 'Data gathering',
                    backgroundColor: '#4472c4',
                    borderColor: '#4472c4',
                    data: data1_2_dataGathering
                },
                {
                    label: 'Triage',
                    backgroundColor: '#ed7d31',
                    borderColor: '#ed7d31',
                    data: data1_2_triage
                },
                {
                    label: 'Investigation',
                    backgroundColor: '#70ad47',
                    borderColor: '#70ad47',
                    data: data1_2_investigation
                }
            ]
        };
        var data2_1 = calc.data2_1(this.input);
        this.data2_1 = {
            labels: ['', 'SIEMPLIFY', 'SIEM', ''],
            datasets: [
                {
                    label: 'Playbooks',
                    backgroundColor: '#4472c4',
                    borderColor: '#4472c4',
                    data: data2_1
                }
            ]
        };
        var data2_2 = calc.data2_2(this.input);
        this.data2_2 = {
            labels: ['', 'SIEMPLIFY - AUTOMATIC', 'SIEM', ''],
            datasets: [
                {
                    label: 'Hours spent creating reports - monthly',
                    backgroundColor: '#4472c4',
                    borderColor: '#4472c4',
                    data: data2_2
                }
            ]
        };
        var data3_1 = calc.data3_1(this.input);
        this.data3_1 = {
            labels: ['', 'SIEMPLIFY', 'SIEM', ''],
            datasets: [
                {
                    label: 'Hours spent hunting threats',
                    backgroundColor: '#4472c4',
                    borderColor: '#4472c4',
                    data: data3_1
                }
            ]
        };
        var data3_2 = calc.data3_2(this.input);
        this.data3_2 = {
            labels: ['', 'SIEMPLIFY', 'SIEM', ''],
            datasets: [
                {
                    label: 'Analyst (virtual) amount',
                    backgroundColor: '#4472c4',
                    borderColor: '#4472c4',
                    data: data3_2
                }
            ]
        };
        var data4_1 = calc.data4_1(this.input);
        this.data4_1 = {
            labels: ['', 'SIEMPLIFY', 'SIEM', ''],
            datasets: [
                {
                    label: 'Analyst shift change',
                    backgroundColor: '#4472c4',
                    borderColor: '#4472c4',
                    data: data4_1
                }
            ]
        };
        var data4_2 = calc.data4_2(this.input);
        this.data4_2 = {
            labels: ['', 'SIEMPLIFY', 'SIEM', ''],
            datasets: [
                {
                    label: 'Time to update policies from other SOCS (workflow)',
                    backgroundColor: '#4472c4',
                    borderColor: '#4472c4',
                    data: data4_2
                }
            ]
        };
        var data5_1_government = calc.data5_1_government(this.input);
        var data5_1_customer = calc.data5_1_customer(this.input);
        var data5_1_average = calc.data5_1_average(this.input);
        this.data5_1 = {
            labels: ['SIEMPLIFY', 'SIEM'],
            datasets: [
                {
                    label: 'Time to report to government',
                    backgroundColor: '#ff0000',
                    borderColor: '#ff0000',
                    data: data5_1_government
                },
                {
                    label: 'Time to report to customer',
                    backgroundColor: '#ed7d31',
                    borderColor: '#ed7d31',
                    data: data5_1_customer
                },
                {
                    label: 'Average time untill after triage',
                    backgroundColor: '#70ad47',
                    borderColor: '#70ad47',
                    data: data5_1_average
                }
            ]
        };
        var data5_2 = calc.data5_2(this.input);
        this.data5_2 = {
            labels: ['', 'SIEMPLIFY', 'SIEM', ''],
            datasets: [
                {
                    label: 'SLA Average Monthly penalty',
                    backgroundColor: '#4472c4',
                    borderColor: '#4472c4',
                    data: data5_2
                }
            ]
        };
        var data6_1 = calc.data6_1(this.input);
        this.data6_1 = {
            labels: ['', 'SIEMPLIFY', 'SIEM', ''],
            datasets: [
                {
                    label: 'Night shift',
                    backgroundColor: '#4472c4',
                    borderColor: '#4472c4',
                    data: data6_1
                }
            ]
        };
        var data6_2 = calc.data6_2(this.input);
        this.data6_2 = {
            labels: ['', 'SIEMPLIFY', 'SIEM', ''],
            datasets: [
                {
                    label: 'Alert capacity',
                    backgroundColor: '#4472c4',
                    borderColor: '#4472c4',
                    data: data6_2
                }
            ]
        };
        this.display = true;
    };
    WorkComponent.prototype.generatePDF = function () {
        /*var doc = new jsPDF('p', 'pt', 'a3');
    
        html2canvas(document.getElementById('calculator1'), {
          onrendered: function(canvas) {
            var cal1 = canvas.toDataURL('image/png');
            doc.addImage(cal1, 'PNG', 0, 0);
            
            html2canvas(document.getElementById('calculator2'), {
              onrendered: function(canvas) {
                var cal2 = canvas.toDataURL('image/png');
                doc.addImage(cal2, 'PNG', 0, 250);
                
                html2canvas(document.getElementById('calculator3'), {
                  onrendered: function(canvas) {
                    var cal3 = canvas.toDataURL('image/png');
                    doc.addImage(cal3, 'PNG', 0, 500);
                    
                    html2canvas(document.getElementById('calculator4'), {
                      onrendered: function(canvas) {
                        var cal4 = canvas.toDataURL('image/png');
                        doc.addImage(cal4, 'PNG', 0, 750);
    
                        html2canvas(document.getElementById('calculator5'), {
                          onrendered: function(canvas) {
                            var cal5 = canvas.toDataURL('image/png');
                            doc.addImage(cal5, 'PNG', 0, 1000);
    
                            html2canvas(document.getElementById('calculator6'), {
                              onrendered: function(canvas) {
                                var cal6 = canvas.toDataURL('image/png');
                                doc.addImage(cal6, 'PNG', 0, 1250);
    
                                doc.save('calculation.pdf');
                                
                              }
                            });
                            
                          }
                        });
                        
                      }
                    });
    
                  }
                });
    
              }
            });
    
          }
        });*/
        //doc.save('calculation.pdf');
    };
    WorkComponent = __decorate([
        core_1.Component({
            templateUrl: './work.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, http_1.Http])
    ], WorkComponent);
    return WorkComponent;
}());
exports.WorkComponent = WorkComponent;
