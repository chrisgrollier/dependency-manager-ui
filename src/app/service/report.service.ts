import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { AppService } from "./app-service";

@Injectable()
export class ReportService {
  private env = environment;
  private backReportUrl = this.env.apiRoot + "/report";
  constructor(private appService: AppService) { }

  getExcelReportByKindAndName(kind: string, name: string): Observable<Blob> {
    return this.appService.getExcelResource(
      this.backReportUrl + "?kind=" + kind + "&names=" + name
    );
  }

  getExcelReportByKindAndGroup(kind: string, name: string): Observable<Blob> {
    return this.appService.getExcelResource(
      this.backReportUrl + "?kind=" + kind + "&group=" + name
    );
  }

  getExcelReportAllDeployable(): Observable<Blob> {
    return this.appService.getExcelResource(this.backReportUrl);
  }
}
