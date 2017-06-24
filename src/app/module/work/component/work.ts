import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

import 'chart.js';

import {Calculation} from '../../common/calculation';

@Component({
  templateUrl: './work.html'
})

export class WorkComponent  { 
	
	display: boolean = false;
	data1_1: any;
	data1_2: any;

  constructor(public router: Router, public http: Http) {
  }

  showDialog() {
  	let input = {
  		"B2" : 100, "B3" : 5, "B4" : 75000, "B5" : 15, "B6" : 0, "B7" : 1, "B8" : 10, "B9" : 20, "B10" : 50, "B11" : 0.5, "B12" : 150, "B13" : 30, "B16" : 72, "B17" : 15, "B18" : 60, "B19" : 10000, "B20" : 0.0001, "C112" : 0.5, "C113" : 0.4
  	};

  	let calc = new Calculation();

  	let data1_1_siemplify = calc.data1_1_siemplify();
  	let data1_1_siem = calc.data1_1_siem(input);

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
    }

    this.display = true;
  }

}
