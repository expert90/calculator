import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {contentHeaders} from './../../common/headers';

declare var module: any

@Component({
  
  templateUrl: './login.html'
})

export class LoginComponent  { 
	constructor(public router: Router, public http: Http) {
  }

  login(event: any, username: string, password: string) {
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

    this.http.get('./data/users.json', { headers: contentHeaders })
    	.subscribe(
    		response => {
    			response.json().forEach((user:any) => {
		    		if (user.username == username && user.password == password) {
		    			authentication = true;
		    			localStorage.setItem('currentUser', user.username);
		    			this.router.navigate(['workspace']);
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
