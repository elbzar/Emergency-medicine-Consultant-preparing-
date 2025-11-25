
export interface Topic {
  id: number;
  title: string;
  pathophysiology: string;
  drugsAndEvidence: string;
  consultantManagement: string;
  verbalBoardScript: string;
  logisticsAndPitfalls: string;
  atypicalPresentations: string;
}

export interface Category {
  name: string;
  topics: Topic[];
}
