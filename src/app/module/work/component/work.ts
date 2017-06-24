import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

import 'chart.js';

@Component({
  templateUrl: './work.html'
})

export class WorkComponent  { 
	
	display: boolean = false;
	data: any;

  constructor(public router: Router, public http: Http) {
  }

  showDialog() {
  	this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
    this.display = true;
  }
}
