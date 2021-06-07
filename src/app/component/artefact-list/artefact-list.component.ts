import { Component, OnInit } from "@angular/core";

import { ArtefactService } from "../../service/artefact.service";
import { SimpleArtefactView } from "../../model/simple-artefact-view";
import { AppService } from "src/app/service/app-service";

@Component({
  selector: "app-artefact-list",
  templateUrl: "./artefact-list.component.html",
  styleUrls: ["./artefact-list.component.css"]
})
export class ArtefactListComponent implements OnInit {
  artefacts!: SimpleArtefactView[];

  constructor(private artefactService: ArtefactService, private appService: AppService) {

  }

  isLoggedIn() {
    return this.appService.checkCredentials();
  }

  ngOnInit() {
    this.loadArtefactViews();
  }

  loadArtefactViews(): void {
    if (this.isLoggedIn()) {
      this.artefactService
      .getArtefactViews()
      .subscribe(v => (this.artefacts = v));
    } else {
      this.artefactService
      .getPublicArtefactViews()
      .subscribe(v => (this.artefacts = v));
    }
  }
}
