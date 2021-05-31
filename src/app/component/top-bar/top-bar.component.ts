import { Component } from '@angular/core';
import { AppService } from 'src/app/service/app-service';

@Component({
  selector: 'app-top-bar',
  providers: [AppService],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  public isLoggedIn = false;

  constructor(
    private service: AppService) { }

  ngOnInit() {
    this.isLoggedIn = this.service.checkCredentials();
    window.alert("top init, is logged in: " + this.isLoggedIn);
    let i = window.location.href.indexOf('code');
    if (!this.isLoggedIn && i != -1) {
      console.log(window.location.href);
      window.alert("top init, have code: " + window.location.href);
      this.service.retrieveToken(window.location.href.substring(i + 5));
    }
  }

  login() {
    window.location.href = this.service.authUri + '?response_type=code&scope=scope%3Dopenid%20https%3A%2F%2F132.145.60.143%2Fread&client_id=' +
      this.service.clientId + '&redirect_uri=' + this.service.redirectUri;
  }

  logout() {
    this.service.logout();
  }

}
