export type ProjectVariant = "coords" | "mirage" | "f1"; // New Type

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl: string;
  variant: ProjectVariant; // Added this field
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  email: string;
}