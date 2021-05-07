import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { PackageView } from "../model/package-view";
import { PackageInfoView } from "../model/package-info-view";
import { GroupedArtefactView } from "../model/grouped-artefact-view";
import { environment } from '../../environments/environment';

@Injectable({ providedIn: "root" })
export class PackageService {
  private env = environment;
  private backPackagesUrl = this.env.apiRoot + "/packages";
  private backApplicationsUrl = this.env.apiRoot + "/applications";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  getPackageViews(): Observable<PackageView[]> {
    return this.http.get<PackageView[]>(this.backPackagesUrl);
  }

  getApplicationViews(): Observable<GroupedArtefactView[]> {
    return this.http.get<GroupedArtefactView[]>(this.backApplicationsUrl);
  }

  getPackageView(id: number): Observable<PackageView> {
    return this.http.get<PackageView>(this.backPackagesUrl + "/" + id);
  }

  updatePackageInfoView(id: number, info: PackageInfoView): Observable<any> {
    return this.http.patch(
      this.backPackagesUrl + "/" + id,
      info,
      this.httpOptions
    );
  }
}
