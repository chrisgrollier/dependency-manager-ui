import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SimpleArtefactVersionView } from "../model/simple-artefact-version-view";
import { VersionView } from "../model/version-view";
import { environment } from '../../environments/environment';

@Injectable()
export class ArtefactVersionService {
  private env = environment;
  private backUrl = this.env.apiRoot + "/artefacts";
  private versionsUrl = "/versions";
  private versionsBackUrl = this.env.apiRoot + "/artefact_versions";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) {}

  getVersionView(
    artefactId: number,
    versionId: number
  ): Observable<VersionView> {
    return this.http.get<VersionView>(
      this.backUrl + "/" + artefactId + this.versionsUrl + "/" + versionId
    );
  }

  getSimpleArtefactVersionView(
    id: number
  ): Observable<SimpleArtefactVersionView> {
    return this.http.get<SimpleArtefactVersionView>(
      this.versionsBackUrl + "/" + id
    );
  }

  updateArtefactVersionInfoView(
    id: number,
    info: SimpleArtefactVersionView
  ): Observable<any> {
    return this.http.patch(
      this.versionsBackUrl + "/" + id,
      info,
      this.httpOptions
    );
  }
}
