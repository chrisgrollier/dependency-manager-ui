import { SimpleArtefactView } from "./simple-artefact-view";
import { VersionView } from "./version-view";

export interface ArtefactView extends SimpleArtefactView {
  versions: VersionView[];
}
