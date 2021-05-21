import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SimpleArtefactVersionView } from "../model/simple-artefact-version-view";
import { VersionView } from "../model/version-view";
import { environment } from '../../environments/environment';
import { AppService } from "./app-service";

@Injectable()
export class ArtefactVersionService {
  private env = environment;
  private backUrl = this.env.apiRoot + "/artefacts";
  private versionsUrl = "/versions";
  private versionsBackUrl = this.env.apiRoot + "/artefact_versions";
  constructor(private appService: AppService) { }

  getVersionView(
    artefactId: number,
    versionId: number
  ): Observable<VersionView> {
    return this.appService.getResource<VersionView>(
      this.backUrl + "/" + artefactId + this.versionsUrl + "/" + versionId
    );
  }

  getSimpleArtefactVersionView(
    id: number
  ): Observable<SimpleArtefactVersionView> {
    return this.appService.getResource<SimpleArtefactVersionView>(
      this.versionsBackUrl + "/" + id
    );
  }

  updateArtefactVersionInfoView(
    id: number,
    info: SimpleArtefactVersionView
  ): Observable<any> {
    return this.appService.patchResource(
      this.versionsBackUrl + "/" + id,
      info
    );
  }
}
