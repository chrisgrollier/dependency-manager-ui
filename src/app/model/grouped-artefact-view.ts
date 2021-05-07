import { SimpleArtefactVersionView } from "./simple-artefact-version-view";
import { SimpleArtefactView } from "./simple-artefact-view";

export interface GroupedArtefactView extends SimpleArtefactView {
  level: number;
  group: boolean;
  groupName: string;
}
