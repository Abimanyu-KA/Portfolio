// src/lib/data.ts
import { Project, PersonalInfo } from "@/types";

export const projectsData: Project[] = [
  {
    title: "Coords",
    description:
      "A responsive navigation platform designed for optimal route planning. Features real-time GPS tracking, custom waypoint management, and an intuitive mobile-first interface for seamless travel experiences.",
    tags: ["React", "Maps API", "Node.js", "Geolocation"],
    projectUrl: "https://coords-one.vercel.app/",
    githubUrl: "https://github.com/Abimanyu-KA/Coords",
    variant: "coords",
  },
  {
    title: "Mirage",
    description:
      "A cybersecurity tool focused on steganography. Allows users to securely hide sensitive text data within image files using Least Significant Bit (LSB) encoding, ensuring invisible communication channels.",
    tags: ["Python", "Cryptography", "Steganography", "Flask"],
    projectUrl: "https://mirage-pied.vercel.app/",
    githubUrl: "https://github.com/Abimanyu-KA/Mirage",
    variant: "mirage",
  },
  {
    title: "F1 Predictive Analysis",
    description:
      "Data science project analyzing Formula 1 race statistics. Utilizes machine learning models to predict race outcomes and strategy efficiency based on historical telemetry, weather data, and tire degradation stats.",
    tags: ["Python", "Pandas", "Scikit-Learn", "Data Visualization"],
    projectUrl: "https://f1-predictive-ai.streamlit.app/",
    githubUrl: "https://github.com/Abimanyu-KA/f1-predictive-analytics-strategy-ai",
    variant: "f1",
  },
];

export const personalInfo: PersonalInfo = {
  name: "Abimanyu K A",
  role: "Computer Science Student & Developer",
  bio: "I build web applications and explore data science projects. Passionate about coding, technology, and continuous learning.",
  email: "abimanyuka.official@gmail.com",
};