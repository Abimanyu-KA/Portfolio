// src/types/index.ts

export interface Project {
  title: string;
  description: string;
  tags: string[];
  projectUrl?: string; // Optional (some data science projects might not have a live link)
  githubUrl: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  email: string;
}