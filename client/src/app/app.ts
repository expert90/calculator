import {Component} from 'angular2/core';
import {RouteConfig, Router, RouterOutlet} from 'angular2/router';
import {Workspace} from './module/workspace/workspace';
import {Login} from './module/login/login'

declare var module: any

@Component({
  selector: 'app',
  moduleId: module.id,
  templateUrl: './app.html',
  directives: [ RouterOutlet ]
})
@RouteConfig([
  { path: '/', redirectTo: ['Login'] },
  { path: '/workspace/...', component: Workspace, as: 'Workspace' },
  { path: '/login/', component: Login, as: 'Login' }
])

export class App {
  constructor(public router: Router) {
  }
}