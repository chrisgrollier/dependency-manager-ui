import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArtefactVersionService } from "../../service/artefact-version.service";
import { SimpleArtefactVersionView } from "../../model/simple-artefact-version-view";
import { VersionView } from "../../model/version-view";

@Component({
  selector: "app-artefact-version-details",
  templateUrl: "./artefact-version-details.component.html",
  styleUrls: ["./artefact-version-details.component.css"]
})
export class ArtefactVersionDetailsComponent implements OnInit {
  artefactVersion: SimpleArtefactVersionView;
  version: VersionView;

  constructor(
    private route: ActivatedRoute,
    private artefactVersionService: ArtefactVersionService
  ) {}

  ngOnInit() {
    // First get the package id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const artefactIdFromRoute = Number(routeParams.get("artefactId"));
    const versionIdFromRoute = Number(routeParams.get("versionId"));
    this.artefactVersionService
      .getSimpleArtefactVersionView(versionIdFromRoute)
      .subscribe(v => (this.artefactVersion = v));
    this.artefactVersionService
      .getVersionView(artefactIdFromRoute, versionIdFromRoute)
      .subscribe(v => (this.version = v));
  }

  update(): void {
    this.artefactVersionService
      .updateArtefactVersionInfoView(this.version.id, this.artefactVersion)
      .subscribe(v => {
        this.artefactVersion.versionLastInfoUpdateDateTime = v.versionLastInfoUpdateDateTime;
        window.alert("The artefact version has been updated!");
      });
  }
}
