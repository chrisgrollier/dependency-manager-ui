import { ArtefactInfoView } from "./artefact-info-view";
import { VersionView } from "./version-view";

export interface SimpleArtefactView extends ArtefactInfoView {
  id: number;
  kind: string;
  name: string;
  type: string;
  versions: VersionView[];
}
