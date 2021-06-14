import { Component, Input, OnInit } from "@angular/core";
import { SimpleArtefactView } from "../../model/simple-artefact-view";

@Component({
  selector: "app-artefact-links",
  templateUrl: "./artefact-links.component.html",
  styleUrls: ["./artefact-links.component.css"]
})
export class ArtefactLinksComponent implements OnInit {
  @Input()
  artefact!: SimpleArtefactView;
  @Input()
  scope!: string;
  mvnGroup!: string;
  artefactName!: string;

  constructor() {}

  ngOnInit() {
    this.prepareFinalView();
  }

  private prepareFinalView() {
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
