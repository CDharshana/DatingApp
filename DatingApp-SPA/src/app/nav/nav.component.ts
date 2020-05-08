import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}; /*Empty object ekak hadanne mehemai*/

  constructor(public authService: AuthService, private alertify: AlertifyService ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in Successfully');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn() {
     return this.authService.loggedIn();
  }
  /*token variable eka empty nan false return karanawa.variable ekata value ekak thiyei
  nan true return karanawa */

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }

}
