import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppService } from "src/app/service/app-service";
import { SimpleArtefactView } from "../../model/simple-artefact-view";
import { ArtefactService } from "../../service/artefact.service";
@Component({
  selector: "app-artefact-details",
  templateUrl: "./artefact-details.component.html",
  styleUrls: ["./artefact-details.component.css"]
})
export class ArtefactDetailsComponent implements OnInit {
  artefact!: SimpleArtefactView;
  mvnGroup!: string;
  artefactName!: string;

  constructor(
    private route: ActivatedRoute,
    private artefactService: ArtefactService,
    private appService: AppService
  ) {}

  isLoggedIn() {
    return this.appService.checkCredentials();
  }

  ngOnInit() {
    // First get the package id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const artefactIdFromRoute = Number(routeParams.get("artefactId"));

    // Find the product that correspond with the id provided in route.
    if (this.isLoggedIn()) {
      this.artefactService
      .getArtefactView(artefactIdFromRoute)
      .subscribe(v => (this.prepareFinalView(v)));
    } else {
      this.artefactService
      .getPublicArtefactView(artefactIdFromRoute)
      .subscribe(v => (this.prepareFinalView(v)));
    }

  }

  update(): void {
    this.artefactService
      .updateArtefactInfoView(this.artefact.id, this.artefact)
      .subscribe(v => {
        this.artefact.lastInfoUpdateDateTime = v.lastInfoUpdateDateTime;
        window.alert("The artefact has been updated!");
      });
  }

  private prepareFinalView(v: SimpleArtefactView) {
    this.artefact = v;
    this.artefactName = this.artefact.name;
    if (this.artefact && this.artefact.kind == 'mvn') {
      const p = this.artefact.name.lastIndexOf(':')
      if (p >= 0) {
        this.mvnGroup = this.artefact.name.substring(0, p);
        this.artefactName = this.artefact.name.substring(p+1);
      }
    }
  }
}
