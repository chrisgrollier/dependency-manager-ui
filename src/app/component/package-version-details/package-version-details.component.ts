import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PackageVersionService } from "../../service/package-version.service";
import { SimpleArtefactVersionView } from "../../model/simple-artefact-version-view";
import { VersionView } from "../../model/version-view";

@Component({
  selector: "app-package-version-details",
  templateUrl: "./package-version-details.component.html",
  styleUrls: ["./package-version-details.component.css"]
})
export class PackageVersionDetailsComponent implements OnInit {
  packageVersion!: SimpleArtefactVersionView;
  version!: VersionView;
  mvnGroup!: string;
  packageName!: string;

  constructor(
    private route: ActivatedRoute,
    private packageVersionService: PackageVersionService
  ) {}

  ngOnInit() {
    // First get the package id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const packageIdFromRoute = Number(routeParams.get("packageId"));
    const versionIdFromRoute = Number(routeParams.get("versionId"));
    this.packageVersionService
      .getSimplePackageVersionView(versionIdFromRoute)
      .subscribe(v => (this.prepareFinalView(v)));
    this.packageVersionService
      .getVersionView(packageIdFromRoute, versionIdFromRoute)
      .subscribe(v => (this.version = v));
  }
  
  private prepareFinalView(v: SimpleArtefactVersionView) {
    this.packageVersion = v;
    this.packageName = this.packageVersion.name;
    if (this.packageVersion && this.packageVersion.kind == 'mvn') {
      const p = this.packageVersion.name.lastIndexOf(':')
      if (p >= 0) {
        this.mvnGroup = this.packageVersion.name.substring(0, p);
        this.packageName = this.packageVersion.name.substring(p+1);
      }
    }
  }
}
