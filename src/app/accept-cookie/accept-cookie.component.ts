import { Component, OnInit } from '@angular/core';
import { CookieHelper } from '../helpers/cookie-helper';
import { Cookie } from '../models/cookie.model';

@Component({
  selector: 'app-accept-cookie',
  templateUrl: './accept-cookie.component.html',
  styleUrls: ['./accept-cookie.component.scss']
})
export class AcceptCookieComponent implements OnInit {
  cookie: Cookie;

  constructor() { }

  ngOnInit(): void {
    this.cookie = CookieHelper.getCookie();
  }

  setAllPermissions() {
    CookieHelper.setAllPermissions();
  }

}
