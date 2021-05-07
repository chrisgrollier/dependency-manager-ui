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
  package: PackageView;

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
      .subscribe(v => (this.package = v));
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
}
