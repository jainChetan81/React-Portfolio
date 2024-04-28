export type Project = {
  name: string;
  slug: string;
  startDate: string;
  endDate: string;
  rank: number;
  externalUrl: string;
  githubUrl: string;
  summary: string;
  technologies: { name: string; icon: string }[];
  description: string;
  displayImage: string;
};
