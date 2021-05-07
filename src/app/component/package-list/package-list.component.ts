import { Component, OnInit } from "@angular/core";

import { PackageService } from "../../service/package.service";
import { PackageView } from "../../model/package-view";

@Component({
  selector: "app-package-list",
  templateUrl: "./package-list.component.html",
  styleUrls: ["./package-list.component.css"]
})
export class PackageListComponent implements OnInit {
  packages: PackageView[];

  constructor(private packageService: PackageService) {}

  ngOnInit() {
    this.loadPackageViews();
  }

  loadPackageViews(): void {
    this.packageService.getPackageViews().subscribe(v => (this.packages = v));
  }

  share() {
    window.alert("The package has been shared!");
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
