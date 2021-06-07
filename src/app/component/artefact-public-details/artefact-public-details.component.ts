import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppService } from "src/app/service/app-service";
import { SimpleArtefactView } from "../../model/simple-artefact-view";
import { ArtefactService } from "../../service/artefact.service";
@Component({
  selector: "app-artefact-public-details",
  templateUrl: "./artefact-public-details.component.html",
  styleUrls: ["./artefact-public-details.component.css"]
})
export class ArtefactPublicDetailsComponent implements OnInit {
  artefact!: SimpleArtefactView;

  constructor(
    private route: ActivatedRoute,
    private artefactService: ArtefactService,
    private appService: AppService
  ) {}

  ngOnInit() {
    // First get the package id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const artefactIdFromRoute = Number(routeParams.get("artefactId"));

    // Find the product that correspond with the id provided in route.
    this.artefactService
      .getPublicArtefactView(artefactIdFromRoute)
      .subscribe(v => (this.artefact = v));
  }
}
