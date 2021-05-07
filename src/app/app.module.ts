import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./component/app.component";
import { TopBarComponent } from "./component/top-bar/top-bar.component";
import { PackageListComponent } from "./component/package-list/package-list.component";
import { PackageAlertsComponent } from "./component/package-alerts/package-alerts.component";
import { PackageDetailsComponent } from "./component/package-details/package-details.component";
import { PackageService } from "./service/package.service";
import { ArtefactListComponent } from "./component/artefact-list/artefact-list.component";
import { ArtefactService } from "./service/artefact.service";
import { ArtefactDetailsComponent } from "./component/artefact-details/artefact-details.component";
import { ArtefactVersionDetailsComponent } from "./component/artefact-version-details/artefact-version-details.component";
import { ArtefactVersionService } from "./service/artefact-version.service";
import { PackageVersionDetailsComponent } from "./component/package-version-details/package-version-details.component";
import { PackageVersionService } from "./service/package-version.service";
import { ArtefactLinksComponent } from "./component/artefact-links/artefact-links.component";
import { ApplicationListComponent } from "./component/application-list/application-list.component";
import { ReportService } from "./service/report.service";
import { ReportLinkComponent } from "./component/report-link/report-link.component";
import { SpacesComponent } from "./component/spaces/spaces.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: ApplicationListComponent },
      { path: "packages", component: PackageListComponent },
      { path: "artefacts", component: ArtefactListComponent },
      { path: "packages/:packageId", component: PackageDetailsComponent },
      { path: "artefacts/:artefactId", component: ArtefactDetailsComponent },
      {
        path: "artefacts/:artefactId/versions/:versionId",
        component: ArtefactVersionDetailsComponent
      },
      {
        path: "packages/:packageId/versions/:versionId",
        component: PackageVersionDetailsComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    PackageListComponent,
    PackageAlertsComponent,
    PackageDetailsComponent,
    ArtefactListComponent,
    ArtefactDetailsComponent,
    ArtefactVersionDetailsComponent,
    PackageVersionDetailsComponent,
    ArtefactLinksComponent,
    ApplicationListComponent,
    ReportLinkComponent,
    SpacesComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    PackageService,
    ArtefactService,
    ArtefactVersionService,
    PackageVersionService,
    ReportService
  ]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
