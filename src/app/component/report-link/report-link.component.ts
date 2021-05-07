import { Component, Input, OnInit } from "@angular/core";
import { GroupedArtefactView } from "../../model/grouped-artefact-view";
import { ReportService } from "../../service/report.service";

@Component({
  selector: "app-report-link",
  templateUrl: "./report-link.component.html",
  styleUrls: ["./report-link.component.css"]
})
export class ReportLinkComponent implements OnInit {
  @Input() package: GroupedArtefactView;
  @Input() filter: string;
  constructor(private reportService: ReportService) {}

  ngOnInit() {}
  downloadReport(kind: string, name: string) {
    this.reportService
      .getExcelReportByKindAndGroup(kind, name)
      .subscribe(data => {
        this.download(
          new Blob([data], { type: "application/vnd.ms-excel" }),
          kind + "_" + name + ".xls"
        );
      });
  }

  downloadReportGlobal() {
    this.reportService.getExcelReportAllDeployable().subscribe(data => {
      this.download(
        new Blob([data], { type: "application/vnd.ms-excel" }),
        "all.xls"
      );
    });
  }

  private download(blob: Blob, name: string) {
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob);
      return;
    }
    const downloadURL = URL.createObjectURL(blob);
    var anchor = document.createElement("a");
    anchor.download = name;
    anchor.href = downloadURL;
    anchor.click();
  }
}
