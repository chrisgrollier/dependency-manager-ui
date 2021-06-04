import { Component, OnInit } from "@angular/core";

import { ArtefactService } from "../../service/artefact.service";
import { SimpleArtefactView } from "../../model/simple-artefact-view";

@Component({
  selector: "app-artefact-public-list",
  templateUrl: "./artefact-public-list.component.html",
  styleUrls: ["./artefact-public-list.component.css"]
})
export class ArtefactPublicListComponent implements OnInit {
  artefacts!: SimpleArtefactView[];

  constructor(private artefactService: ArtefactService) {}

  ngOnInit() {
    this.loadArtefactViews();
  }

  loadArtefactViews(): void {
    this.artefactService
      .getPublicArtefactViews()
      .subscribe(v => (this.artefacts = v));
  }
}
