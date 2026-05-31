"use client";

import { useResumeStore } from "@/store/useResumeStore";
import { Plus, Trash2, Sparkles, GripVertical } from "lucide-react";
import { useState } from "react";

export function ResumeForm() {
  const { 
    data, 
    updatePersonalInfo, 
    updateSummary, 
    updateTargetJob,
    updateTechnicalSkills,
    updateCoreSkills,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    addProject,
    updateProject,
    removeProject,
    addCertification,
    updateCertification,
    removeCertification,
    addAchievement,
    updateAchievement,
    removeAchievement
  } = useResumeStore();

  const [isGenerating, setIsGenerating] = useState(false);

  // Mock AI Generator
  const handleGenerateSummary = async () => {
    setIsGenerating(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    updateSummary(`Marketing professional with 3+ years of experience in digital campaigns, increasing lead generation by 40% through data-driven strategies targeting ${data.targetJob || 'the industry'}.`);
    setIsGenerating(false);
  };

  const handleRewriteBullet = async (expId: string, index: number) => {
    setIsGenerating(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const exp = data.experience.find(e => e.id === expId);
    if (exp) {
      const newBullets = [...exp.description];
      newBullets[index] = "Handled sales operations, contributing to a 25% increase in monthly revenue by optimizing client outreach.";
      updateExperience(expId, { description: newBullets });
    }
    setIsGenerating(false);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto w-full space-y-12 pb-32">
      {/* Personal Info */}
      <section>
        <h2 className="text-2xl font-outfit font-bold mb-6">Identity + Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Full Name</label>
            <input
              type="text"
              value={data.personalInfo.fullName}
              onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
              className="w-full px-4 py-2 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:bg-zinc-900"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Phone</label>
            <input
              type="tel"
              value={data.personalInfo.phone}
              onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
              className="w-full px-4 py-2 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:bg-zinc-900"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Professional Email</label>
            <input
              type="email"
              value={data.personalInfo.email}
              onChange={(e) => updatePersonalInfo({ email: e.target.value })}
              className="w-full px-4 py-2 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:bg-zinc-900"
              placeholder="john@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Location (Optional)</label>
            <input
              type="text"
              value={data.personalInfo.location}
              onChange={(e) => updatePersonalInfo({ location: e.target.value })}
              className="w-full px-4 py-2 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:bg-zinc-900"
              placeholder="New York, NY"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">LinkedIn Profile</label>
            <input
              type="text"
              value={data.personalInfo.linkedin}
              onChange={(e) => updatePersonalInfo({ linkedin: e.target.value })}
              className="w-full px-4 py-2 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:bg-zinc-900"
              placeholder="linkedin.com/in/johndoe"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Portfolio / Website (Optional)</label>
            <input
              type="text"
              value={data.personalInfo.website}
              onChange={(e) => updatePersonalInfo({ website: e.target.value })}
              className="w-full px-4 py-2 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:bg-zinc-900"
              placeholder="johndoe.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Age (Optional)</label>
            <input
              type="text"
              value={data.personalInfo.age}
              onChange={(e) => updatePersonalInfo({ age: e.target.value })}
              className="w-full px-4 py-2 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:bg-zinc-900"
              placeholder="25"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Gender (Optional)</label>
            <input
              type="text"
              value={data.personalInfo.gender}
              onChange={(e) => updatePersonalInfo({ gender: e.target.value })}
              className="w-full px-4 py-2 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:bg-zinc-900"
              placeholder="Female"
            />
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-outfit font-bold">Professional Summary</h2>
            <p className="text-sm text-zinc-500 mt-1">First impression—don't waste it with generic lines.</p>
          </div>
          <button 
            onClick={handleGenerateSummary}
            disabled={isGenerating}
            className="text-xs flex items-center gap-1 font-medium bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 px-3 py-1.5 rounded-full hover:bg-brand-100 dark:hover:bg-brand-900/50 transition-colors disabled:opacity-50"
          >
            <Sparkles className="w-3 h-3" />
            {isGenerating ? "Generating..." : "AI Generate"}
          </button>
        </div>
        <div className="mb-4">
          <label className="text-xs font-medium text-brand-600 dark:text-brand-400 mb-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Target Job Title / Keywords for AI
          </label>
          <input
            type="text"
            value={data.targetJob}
            onChange={(e) => updateTargetJob(e.target.value)}
            className="w-full px-4 py-2 bg-brand-50/50 dark:bg-brand-900/10 border border-brand-200 dark:border-brand-800/50 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all text-sm"
            placeholder="e.g. Marketing Professional, Digital Campaigns, Lead Gen"
          />
        </div>
        <textarea
          value={data.summary}
          onChange={(e) => updateSummary(e.target.value)}
          className="w-full h-32 px-4 py-3 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all resize-none dark:bg-zinc-900"
          placeholder="e.g. Marketing professional with 3+ years of experience in digital campaigns, increasing lead generation by 40% through data-driven strategies."
        />
      </section>

      {/* Skills */}
      <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mb-4">
          <h2 className="text-2xl font-outfit font-bold">Skills (ATS Gold Section)</h2>
          <p className="text-sm text-zinc-500 mt-1">This is where ATS systems scan heavily.</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 block mb-1">Technical Skills / Tools</label>
            <input
              type="text"
              value={data.technicalSkills}
              onChange={(e) => updateTechnicalSkills(e.target.value)}
              className="w-full px-4 py-2 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:bg-zinc-900"
              placeholder="e.g. Excel, Figma, Google Analytics, React"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 block mb-1">Core Skills (Soft Skills / Expertise)</label>
            <input
              type="text"
              value={data.coreSkills}
              onChange={(e) => updateCoreSkills(e.target.value)}
              className="w-full px-4 py-2 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:bg-zinc-900"
              placeholder="e.g. SEO, Campaign Strategy, Data Analysis, Leadership"
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-2xl font-outfit font-bold text-red-600 dark:text-red-400">Work Experience (MOST IMPORTANT)</h2>
            <p className="text-sm text-zinc-500 mt-1">Each bullet should follow: 👉 Action + Task + Result</p>
          </div>
          <button 
            onClick={() => addExperience({
              id: Date.now().toString(),
              title: "",
              company: "",
              date: "",
              description: [""]
            })}
            className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1 shrink-0"
          >
            <Plus className="w-4 h-4" /> Add Experience
          </button>
        </div>
        
        <div className="space-y-6 mt-6">
          {data.experience.map((exp) => (
            <div key={exp.id} className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl relative group">
              <button 
                onClick={() => removeExperience(exp.id)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-xs font-medium text-zinc-500">Job Title</label>
                  <input
                    type="text"
                    value={exp.title}
                    onChange={(e) => updateExperience(exp.id, { title: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-transparent border-b focus:border-brand-500 outline-none"
                    placeholder="Software Engineer"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-500">Company Name</label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-transparent border-b focus:border-brand-500 outline-none"
                    placeholder="Google"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-medium text-zinc-500">Duration</label>
                  <input
                    type="text"
                    value={exp.date}
                    onChange={(e) => updateExperience(exp.id, { date: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-transparent border-b focus:border-brand-500 outline-none"
                    placeholder="Jan 2021 - Present"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-xs font-medium text-zinc-500 mb-2 block">Bullet Points (3-5 Recommended)</label>
                <div className="space-y-3">
                  {exp.description.map((bullet, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <GripVertical className="w-5 h-5 text-zinc-300 mt-2 shrink-0 cursor-move" />
                      <div className="flex-1 relative">
                        <textarea
                          value={bullet}
                          onChange={(e) => {
                            const newBullets = [...exp.description];
                            newBullets[idx] = e.target.value;
                            updateExperience(exp.id, { description: newBullets });
                          }}
                          className="w-full px-3 py-2 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm min-h-[60px] focus:ring-2 focus:ring-brand-500 outline-none resize-y"
                          placeholder="e.g. Worked on sales..."
                        />
                        <button 
                          onClick={() => handleRewriteBullet(exp.id, idx)}
                          disabled={isGenerating}
                          className="absolute bottom-2 right-2 p-1.5 bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-md hover:bg-brand-100 transition-colors"
                          title="AI Convert weak lines → strong lines"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button 
                        onClick={() => {
                          const newBullets = exp.description.filter((_, i) => i !== idx);
                          updateExperience(exp.id, { description: newBullets });
                        }}
                        className="p-2 text-zinc-400 hover:text-red-500 mt-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => updateExperience(exp.id, { description: [...exp.description, ""] })}
                  className="mt-3 text-xs font-medium text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 ml-7"
                >
                  + Add Bullet Point
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-2xl font-outfit font-bold">Projects</h2>
            <p className="text-sm text-zinc-500 mt-1">Very Important for Freshers & Tech Roles.</p>
          </div>
          <button 
            onClick={() => addProject({
              id: Date.now().toString(),
              title: "",
              description: "",
              tools: "",
              link: ""
            })}
            className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1 shrink-0"
          >
            <Plus className="w-4 h-4" /> Add Project
          </button>
        </div>
        <div className="space-y-4 mt-6">
          {data.projects.map((proj) => (
            <div key={proj.id} className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl relative group">
               <button 
                onClick={() => removeProject(proj.id)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-zinc-500">Project Name</label>
                  <input
                    type="text"
                    value={proj.title}
                    onChange={(e) => updateProject(proj.id, { title: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-transparent border-b focus:border-brand-500 outline-none"
                    placeholder="Loan Eligibility Calculator"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-500">Tools Used</label>
                  <input
                    type="text"
                    value={proj.tools}
                    onChange={(e) => updateProject(proj.id, { tools: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-transparent border-b focus:border-brand-500 outline-none"
                    placeholder="JavaScript, React"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-medium text-zinc-500">What it does / Outcome</label>
                  <textarea
                    value={proj.description}
                    onChange={(e) => updateProject(proj.id, { description: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 outline-none resize-y"
                    placeholder="e.g. Developed a loan eligibility calculator, improving accuracy and reducing manual calculation time by 80%"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-outfit font-bold">Education</h2>
          <button 
            onClick={() => addEducation({
              id: Date.now().toString(),
              degree: "",
              school: "",
              date: "",
              gpa: ""
            })}
            className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1"
          >
            <Plus className="w-4 h-4" /> Add Education
          </button>
        </div>
        <div className="space-y-4">
          {data.education.map((edu) => (
            <div key={edu.id} className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl relative group">
               <button 
                onClick={() => removeEducation(edu.id)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-zinc-500">Degree</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-transparent border-b focus:border-brand-500 outline-none"
                    placeholder="B.S. Computer Science"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-500">Institution</label>
                  <input
                    type="text"
                    value={edu.school}
                    onChange={(e) => updateEducation(edu.id, { school: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-transparent border-b focus:border-brand-500 outline-none"
                    placeholder="Stanford University"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-500">Year</label>
                  <input
                    type="text"
                    value={edu.date}
                    onChange={(e) => updateEducation(edu.id, { date: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-transparent border-b focus:border-brand-500 outline-none"
                    placeholder="2020"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-500">Percentage / CGPA (Optional)</label>
                  <input
                    type="text"
                    value={edu.gpa || ""}
                    onChange={(e) => updateEducation(edu.id, { gpa: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-transparent border-b focus:border-brand-500 outline-none"
                    placeholder="3.8 / 4.0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-outfit font-bold">Certifications (Optional)</h2>
          <button 
            onClick={() => addCertification({
              id: Date.now().toString(),
              name: "",
              platform: "",
              year: ""
            })}
            className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1"
          >
            <Plus className="w-4 h-4" /> Add Cert
          </button>
        </div>
        <div className="space-y-4">
          {data.certifications.map((cert) => (
            <div key={cert.id} className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl relative group">
               <button 
                onClick={() => removeCertification(cert.id)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="text-xs font-medium text-zinc-500">Course Name</label>
                  <input
                    type="text"
                    value={cert.name}
                    onChange={(e) => updateCertification(cert.id, { name: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-transparent border-b focus:border-brand-500 outline-none"
                    placeholder="AWS Certified Solutions Architect"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-500">Platform & Year</label>
                  <input
                    type="text"
                    value={cert.platform}
                    onChange={(e) => updateCertification(cert.id, { platform: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-transparent border-b focus:border-brand-500 outline-none"
                    placeholder="Coursera, 2023"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-2xl font-outfit font-bold">Achievements (Optional)</h2>
            <p className="text-sm text-zinc-500 mt-1">Awards, Rankings, Measurable success.</p>
          </div>
          <button 
            onClick={() => addAchievement({
              id: Date.now().toString(),
              description: ""
            })}
            className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1 shrink-0"
          >
            <Plus className="w-4 h-4" /> Add Achievement
          </button>
        </div>
        <div className="space-y-4 mt-6">
          {data.achievements.map((ach) => (
            <div key={ach.id} className="flex gap-2 items-start group relative">
              <input
                type="text"
                value={ach.description}
                onChange={(e) => updateAchievement(ach.id, { description: e.target.value })}
                className="w-full px-4 py-2 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                placeholder="e.g. Ranked Top 10% in Global Hackathon 2023"
              />
              <button 
                onClick={() => removeAchievement(ach.id)}
                className="p-2 text-zinc-400 hover:text-red-500 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
