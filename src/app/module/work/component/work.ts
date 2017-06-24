import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

declare var module: any

@Component({
  templateUrl: './work.html'
})

export class WorkComponent  { 
	display: boolean = false;

  constructor(public router: Router, public http: Http) {
  }

  showDialog() {
    this.display = true;
  }
}
