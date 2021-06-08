import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AppService {
    private env = environment;
    private clientId = this.env.clientId;
    private redirectUri = this.env.redirectUri;
    private tokenUri = this.env.tokenUri;
    private logoutUri = this.env.logoutUri;
    private authUri = this.env.authUri;
    private scope = this.env.scope;
    private clientSecret = this.env.clientSecret;

    constructor(
        private http: HttpClient) { }

    loginUri() {
        return this.authUri + '?response_type=code&scope=' + this.scope + '&client_id=' +
        this.clientId + '&redirect_uri=' + this.redirectUri;
    }

    retrieveToken(code: any) {
        let params = new URLSearchParams();
        params.append('grant_type', 'authorization_code');
        params.append('client_id', this.clientId);
        params.append('client_secret', this.clientSecret);
        params.append('redirect_uri', this.redirectUri);
        params.append('code', code);
        console.log(code);
        let headers = new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' });
        this.http.post(this.tokenUri, params.toString(), { headers: headers })
            .subscribe(
                data => this.saveToken(data),
                err => this.showError(err)
            );
    }

    saveToken(token: any) {
        var expireDate = new Date().getTime() + (1000 * token.expires_in);
        Cookie.set("access_token", token.access_token, expireDate);
        Cookie.set("id_token", token.id_token, expireDate);
        console.log('Obtained Access token');
        console.log(token);
        window.location.href = this.redirectUri;
    }

    showError(err: any) {
        console.error(err);
        alert(err);
    }

    getPublicResource<T>(resourceUrl: string): Observable<T> {
        var headers = new HttpHeaders({ 'Content-type': 'application/json' ,'Accept': '*/*' });
        return this.http.get<T>(resourceUrl, { headers: headers });
    }

    getResource<T>(resourceUrl: string): Observable<T> {
        var headers = new HttpHeaders({ 'Content-type': 'application/json' ,'Accept': '*/*' ,'Cache-Control': 'nocache', 'Authorization': 'Bearer ' + Cookie.get('access_token') });
        return this.http.get<T>(resourceUrl, { headers: headers });
    }

    patchResource<T, D>(resourceUrl: string, data: D): Observable<T> {
        var headers = new HttpHeaders({ 'Content-type': 'application/json' ,'Accept': '*/*', 'Authorization': 'Bearer ' + Cookie.get('access_token') });
        return this.http.patch<T>(resourceUrl, data, { headers: headers });
    }

    getExcelResource(resourceUrl: string): Observable<Blob> {
        var headers = new HttpHeaders({ Accept: "application/vnd.ms-excel" , Authorization: 'Bearer ' + Cookie.get('access_token') });
        return this.http.get(resourceUrl, 
            { responseType: "blob", 
            headers: new HttpHeaders({ Accept: "application/vnd.ms-excel" , Authorization: 'Bearer ' + Cookie.get('access_token') }) 
        });
    }

    checkCredentials() {
        return Cookie.check('access_token');
    }

    logout() {
        let token = Cookie.get('id_token');
        Cookie.delete('access_token');
        Cookie.delete('id_token');
        let logoutURL = this.logoutUri + "?id_token_hint="
            + token
            + "&post_logout_redirect_uri=" + this.redirectUri;

        window.location.href = logoutURL;
    }
}