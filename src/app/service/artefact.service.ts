import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { SimpleArtefactView } from "../model/simple-artefact-view";
import { ArtefactView } from "../model/artefact-view";
import { ArtefactInfoView } from "../model/artefact-info-view";
import { environment } from '../../environments/environment';

@Injectable()
export class ArtefactService {
  private env = environment;
  private backUrl = this.env.apiRoot + "/artefacts";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) {}

  getArtefactViews(): Observable<SimpleArtefactView[]> {
    return this.http.get<SimpleArtefactView[]>(this.backUrl + "/simple");
  }

  getArtefactView(id: number): Observable<ArtefactView> {
    return this.http.get<ArtefactView>(this.backUrl + "/" + id);
  }

  updateArtefactInfoView(id: number, info: ArtefactInfoView): Observable<any> {
    return this.http.patch(this.backUrl + "/" + id, info, this.httpOptions);
  }
}
