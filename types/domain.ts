export type UserRole = "developer" | "company";

export type Project = {
  id: string;
  title: string;
  client: string;
  summary: string;
  description: string;
  fit: number;
  tags: string[];
  rate: string;
  location: string;
  workType: string;
  period: string;
  reasons: string[];
};

export type DeveloperProfile = {
  id: string;
  name: string;
  careerSummary: string;
  yearsExp: number;
  location: string;
  availableNow: boolean;
  preferredRate: string;
};
