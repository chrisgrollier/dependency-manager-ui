import { SimpleArtefactVersionView } from "./simple-artefact-version-view";

export interface DependencyView extends SimpleArtefactVersionView {
  depth: number;
  scope: string;
}
