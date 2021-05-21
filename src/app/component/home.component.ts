import { Component } from '@angular/core';
import { AppService } from '../service/app-service';
import { environment } from '../../environments/environment';

@Component({
    selector: 'home-header',
    providers: [AppService],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public isLoggedIn = false;

    constructor(
        private _service: AppService) { }

    ngOnInit() {
        this.isLoggedIn = this._service.checkCredentials();
        let i = window.location.href.indexOf('code');
        if (!this.isLoggedIn && i != -1) {
            this._service.retrieveToken(window.location.href.substring(i + 5));
        }
    }

    login() {
        window.location.href = this._service.authUri + '?response_type=code&scope=openid%20write%20read&client_id=' +
            this._service.clientId + '&redirect_uri=' + this._service.redirectUri;
    }

    logout() {
        this._service.logout();
    }
}