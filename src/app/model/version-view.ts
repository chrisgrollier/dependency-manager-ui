import { DependencyView } from "./dependency-view";
import { SimpleArtefactVersionView } from "./simple-artefact-version-view";

export interface VersionView {
  id: number;
  version: string;
  usedBy: SimpleArtefactVersionView[];
  dependencies: DependencyView[];
}
