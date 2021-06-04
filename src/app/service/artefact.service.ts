import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SimpleArtefactView } from "../model/simple-artefact-view";
import { ArtefactView } from "../model/artefact-view";
import { ArtefactInfoView } from "../model/artefact-info-view";
import { environment } from '../../environments/environment';
import { AppService } from "./app-service";

@Injectable()
export class ArtefactService {
  private env = environment;
  private backUrl = this.env.apiRoot + "/artefacts";
  private publicBackUrl = this.env.apiRoot + "/public/artefacts";
  constructor(private appService: AppService) { }

  getPublicArtefactViews(): Observable<SimpleArtefactView[]> {
    return this.appService.getResource<SimpleArtefactView[]>(this.publicBackUrl);
  }

  getArtefactViews(): Observable<SimpleArtefactView[]> {
    return this.appService.getResource<SimpleArtefactView[]>(this.backUrl + "/simple");
  }

  getArtefactView(id: number): Observable<ArtefactView> {
    return this.appService.getResource<ArtefactView>(this.backUrl + "/" + id);
  }

  updateArtefactInfoView(id: number, info: ArtefactInfoView): Observable<any> {
    return this.appService.patchResource(this.backUrl + "/" + id, info);
  }
}
