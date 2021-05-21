import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { PackageView } from "../model/package-view";
import { PackageInfoView } from "../model/package-info-view";
import { GroupedArtefactView } from "../model/grouped-artefact-view";
import { environment } from '../../environments/environment';
import { AppService } from "./app-service";

@Injectable({ providedIn: "root" })
export class PackageService {
  private env = environment;
  private backPackagesUrl = this.env.apiRoot + "/packages";
  private backApplicationsUrl = this.env.apiRoot + "/applications";

  constructor(private appService: AppService) { }

  getPackageViews(): Observable<PackageView[]> {
    return this.appService.getResource<PackageView[]>(this.backPackagesUrl);
  }

  getApplicationViews(): Observable<GroupedArtefactView[]> {
    return this.appService.getResource<GroupedArtefactView[]>(this.backApplicationsUrl);
  }

  getPackageView(id: number): Observable<PackageView> {
    return this.appService.getResource<PackageView>(this.backPackagesUrl + "/" + id);
  }

  updatePackageInfoView(id: number, info: PackageInfoView): Observable<any> {
    return this.appService.patchResource(
      this.backPackagesUrl + "/" + id,
      info
    );
  }
}
