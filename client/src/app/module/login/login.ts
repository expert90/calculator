import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';
import {Http} from 'angular2/http';
import {contentHeaders} from '../common/headers';

declare var module: any

@Component({
  selector: 'login',
  moduleId: module.id,
  templateUrl: './login.html'
})

export class Login {
  constructor(public router: Router, public http: Http) {
  }

  login(event, username, password) {
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

    let authentication = false;

    let $this = this;

    this.http.get('http://localhost:8000/data/users.json', { headers: contentHeaders })
    	.subscribe(
    		response => {
    			response.json().forEach(function (user) {
		    		if (user.username == username && user.password == password) {
		    			authentication = true;
		    			localStorage.setItem('currentUser', user.username);
		    			location.href = './#/workspace';
		    		}
		    	});
		    	if (!authentication) {
		    		alert("Login Failed!");
		    	}
    		},
    		error => {
    			alert(error.text());
    			console.log(error.text());
    		}
    	);
  }

}