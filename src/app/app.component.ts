import { Component } from '@angular/core';
import { CookieHelper } from './helpers/cookie-helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-playground';

  checkCookies() {
    return CookieHelper.checkCookie();
  }
}
