import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PackageView } from "../../model/package-view";
import { PackageService } from "../../service/package.service";

@Component({
  selector: "app-package-details",
  templateUrl: "./package-details.component.html",
  styleUrls: ["./package-details.component.css"]
})
export class PackageDetailsComponent implements OnInit {
  package!: PackageView;
  mvnGroup!: string;
  packageName!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private packageService: PackageService
  ) {}

  ngOnInit() {
    // First get the package id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const packageIdFromRoute = Number(routeParams.get("packageId"));

    // Find the product that correspond with the id provided in route.
    this.packageService
      .getPackageView(packageIdFromRoute)
      .subscribe(v => (this.prepareFinalView(v)));
  }

  update(): void {
    this.packageService
      .updatePackageInfoView(this.package.id, this.package)
      .subscribe(v => {
        this.package.lastInfoUpdateDateTime = v.lastInfoUpdateDateTime;
        window.alert("The package has been updated!");
      });
  }
  
  gotoList() {
    this.router.navigate(["/"]);
  }

  private prepareFinalView(v: PackageView) {
    this.package = v;
    this.packageName = this.package.name;
    if (this.package && this.package.kind == 'mvn') {
      const p = this.package.name.lastIndexOf(':')
      if (p >= 0) {
        this.mvnGroup = this.package.name.substring(0, p);
        this.packageName = this.package.name.substring(p+1);
      }
    }
  }

}
