import { create } from "zustand";

export interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string[]; // Bullets
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  date: string;
  gpa?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string;
  link?: string;
}

export interface Certification {
  id: string;
  name: string;
  platform: string;
  year: string;
}

export interface Achievement {
  id: string;
  description: string;
}


export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    website?: string;
    age?: string;
    gender?: string;
  };
  summary: string;
  targetJob: string;
  technicalSkills: string;
  coreSkills: string;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  achievements: Achievement[];
}

interface ResumeState {
  data: ResumeData;
  updatePersonalInfo: (info: Partial<ResumeData["personalInfo"]>) => void;
  updateSummary: (summary: string) => void;
  updateTargetJob: (job: string) => void;
  updateTechnicalSkills: (skills: string) => void;
  updateCoreSkills: (skills: string) => void;
  addExperience: (exp: Experience) => void;
  updateExperience: (id: string, exp: Partial<Experience>) => void;
  removeExperience: (id: string) => void;
  addEducation: (edu: Education) => void;
  updateEducation: (id: string, edu: Partial<Education>) => void;
  removeEducation: (id: string) => void;
  addProject: (proj: Project) => void;
  updateProject: (id: string, proj: Partial<Project>) => void;
  removeProject: (id: string) => void;
  addCertification: (cert: Certification) => void;
  updateCertification: (id: string, cert: Partial<Certification>) => void;
  removeCertification: (id: string) => void;
  addAchievement: (ach: Achievement) => void;
  updateAchievement: (id: string, ach: Partial<Achievement>) => void;
  removeAchievement: (id: string) => void;
}

const initialData: ResumeData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    website: "",
    age: "",
    gender: "",
  },
  summary: "",
  targetJob: "",
  technicalSkills: "",
  coreSkills: "",
  experience: [],
  education: [],
  projects: [],
  certifications: [],
  achievements: [],
};

export const useResumeStore = create<ResumeState>((set) => ({
  data: initialData,
  updatePersonalInfo: (info) =>
    set((state) => ({
      data: { ...state.data, personalInfo: { ...state.data.personalInfo, ...info } },
    })),
  updateSummary: (summary) =>
    set((state) => ({ data: { ...state.data, summary } })),
  updateTargetJob: (targetJob) =>
    set((state) => ({ data: { ...state.data, targetJob } })),
  updateTechnicalSkills: (technicalSkills) =>
    set((state) => ({ data: { ...state.data, technicalSkills } })),
  updateCoreSkills: (coreSkills) =>
    set((state) => ({ data: { ...state.data, coreSkills } })),
  addExperience: (exp) =>
    set((state) => ({ data: { ...state.data, experience: [...state.data.experience, exp] } })),
  updateExperience: (id, updatedExp) =>
    set((state) => ({
      data: {
        ...state.data,
        experience: state.data.experience.map((e) => (e.id === id ? { ...e, ...updatedExp } : e)),
      },
    })),
  removeExperience: (id) =>
    set((state) => ({
      data: {
        ...state.data,
        experience: state.data.experience.filter((e) => e.id !== id),
      },
    })),
  addEducation: (edu) =>
    set((state) => ({ data: { ...state.data, education: [...state.data.education, edu] } })),
  updateEducation: (id, updatedEdu) =>
    set((state) => ({
      data: {
        ...state.data,
        education: state.data.education.map((e) => (e.id === id ? { ...e, ...updatedEdu } : e)),
      },
    })),
  removeEducation: (id) =>
    set((state) => ({
      data: {
        ...state.data,
        education: state.data.education.filter((e) => e.id !== id),
      },
    })),
  addProject: (proj) =>
    set((state) => ({ data: { ...state.data, projects: [...state.data.projects, proj] } })),
  updateProject: (id, updatedProj) =>
    set((state) => ({
      data: {
        ...state.data,
        projects: state.data.projects.map((p) => (p.id === id ? { ...p, ...updatedProj } : p)),
      },
    })),
  removeProject: (id) =>
    set((state) => ({
      data: {
        ...state.data,
        projects: state.data.projects.filter((p) => p.id !== id),
      },
    })),
  addCertification: (cert) =>
    set((state) => ({ data: { ...state.data, certifications: [...state.data.certifications, cert] } })),
  updateCertification: (id, updatedCert) =>
    set((state) => ({
      data: {
        ...state.data,
        certifications: state.data.certifications.map((c) => (c.id === id ? { ...c, ...updatedCert } : c)),
      },
    })),
  removeCertification: (id) =>
    set((state) => ({
      data: {
        ...state.data,
        certifications: state.data.certifications.filter((c) => c.id !== id),
      },
    })),
  addAchievement: (ach) =>
    set((state) => ({ data: { ...state.data, achievements: [...state.data.achievements, ach] } })),
  updateAchievement: (id, updatedAch) =>
    set((state) => ({
      data: {
        ...state.data,
        achievements: state.data.achievements.map((a) => (a.id === id ? { ...a, ...updatedAch } : a)),
      },
    })),
  removeAchievement: (id) =>
    set((state) => ({
      data: {
        ...state.data,
        achievements: state.data.achievements.filter((a) => a.id !== id),
      },
    })),
}));
