import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SimpleArtefactVersionView } from "../model/simple-artefact-version-view";
import { VersionView } from "../model/version-view";
import { environment } from '../../environments/environment';

@Injectable()
export class PackageVersionService {
  private env = environment;
  private backUrl = this.env.apiRoot + "/packages";
  private versionsUrl = "/versions";
  private versionsBackUrl = this.env.apiRoot + "/package_versions";

  constructor(private http: HttpClient) {}

  getVersionView(
    packageId: number,
    versionId: number
  ): Observable<VersionView> {
    return this.http.get<VersionView>(
      this.backUrl + "/" + packageId + this.versionsUrl + "/" + versionId
    );
  }

  getSimplePackageVersionView(
    id: number
  ): Observable<SimpleArtefactVersionView> {
    return this.http.get<SimpleArtefactVersionView>(
      this.versionsBackUrl + "/" + id
    );
  }
}
