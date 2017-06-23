import {Component, Injectable} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';
import {Http} from 'angular2/http';
import {contentHeaders} from '../common/headers';
import {DialogModule} from 'primeng/primeng';

declare var module: any

@Component({
  selector: 'cinput',
  moduleId: module.id,
  templateUrl: './cinput.html'
})

@Injectable()

export class Cinput {

	display: boolean = false;

  constructor(public router: Router, public http: Http) {
  }

  showDialog() {
  	alert("show dialog");
    this.display = true;
  }

}