import { InfoView } from "./info-view";

export interface ArtefactInfoView extends InfoView {
  roadmapInfo: string;
  vulnerabilityLevel: number;
  obsolescenceLevel: number;
  lastReleaseDate: Date;
}
