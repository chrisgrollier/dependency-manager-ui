import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SimpleArtefactVersionView } from "../model/simple-artefact-version-view";
import { VersionView } from "../model/version-view";
import { environment } from '../../environments/environment';
import { AppService } from "./app-service";

@Injectable()
export class PackageVersionService {
  private env = environment;
  private backUrl = this.env.apiRoot + "/packages";
  private versionsUrl = "/versions";
  private versionsBackUrl = this.env.apiRoot + "/package_versions";

  constructor(private appService: AppService) {}

  getVersionView(
    packageId: number,
    versionId: number
  ): Observable<VersionView> {
    return this.appService.getResource<VersionView>(
      this.backUrl + "/" + packageId + this.versionsUrl + "/" + versionId
    );
  }

  getSimplePackageVersionView(
    id: number
  ): Observable<SimpleArtefactVersionView> {
    return this.appService.getResource<SimpleArtefactVersionView>(
      this.versionsBackUrl + "/" + id
    );
  }
}
