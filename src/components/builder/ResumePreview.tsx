"use client";

import { useResumeStore } from "@/store/useResumeStore";

export function ResumePreview() {
  const { data } = useResumeStore();

  return (
    <div className="w-full max-w-[800px] mx-auto bg-white shadow-2xl min-h-[1056px] text-zinc-900 p-[1in] font-sans printable-resume">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold uppercase tracking-wider mb-2 text-zinc-900">
          {data.personalInfo.fullName || "YOUR NAME"}
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-2 text-[13px] text-zinc-700">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.email && data.personalInfo.phone && <span>•</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.phone && data.personalInfo.location && <span>•</span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
          {data.personalInfo.location && data.personalInfo.linkedin && <span>•</span>}
          {data.personalInfo.linkedin && <span>{data.personalInfo.linkedin}</span>}
          {data.personalInfo.linkedin && data.personalInfo.website && <span>•</span>}
          {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
          {(data.personalInfo.age || data.personalInfo.gender) && (data.personalInfo.website || data.personalInfo.linkedin || data.personalInfo.location || data.personalInfo.phone || data.personalInfo.email) && <span>•</span>}
          {data.personalInfo.age && <span>{data.personalInfo.age} yrs</span>}
          {data.personalInfo.age && data.personalInfo.gender && <span>•</span>}
          {data.personalInfo.gender && <span>{data.personalInfo.gender}</span>}
        </div>
      </div>

      <div className="space-y-5">
        {/* Summary */}
        {data.summary && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-2 border-b border-zinc-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-[13px] leading-relaxed text-zinc-800 whitespace-pre-wrap">
              {data.summary}
            </p>
          </section>
        )}

        {/* Skills */}
        {(data.technicalSkills || data.coreSkills) && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-2 border-b border-zinc-300 pb-1">
              Skills
            </h2>
            <div className="text-[13px] leading-relaxed text-zinc-800 space-y-1">
              {data.technicalSkills && (
                <div><span className="font-bold">Tools & Technologies:</span> {data.technicalSkills}</div>
              )}
              {data.coreSkills && (
                <div><span className="font-bold">Core Competencies:</span> {data.coreSkills}</div>
              )}
            </div>
          </section>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-3 border-b border-zinc-300 pb-1">
              Work Experience
            </h2>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-[14px] font-bold text-zinc-900">
                      {exp.title} {exp.company && <span className="font-normal">at {exp.company}</span>}
                    </h3>
                    <span className="text-[13px] text-zinc-600 font-medium">{exp.date}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 mt-2">
                    {exp.description.map((bullet, idx) => (
                      bullet ? (
                        <li key={idx} className="text-[13px] text-zinc-800 leading-relaxed pl-1">
                          {bullet}
                        </li>
                      ) : null
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-3 border-b border-zinc-300 pb-1">
              Projects
            </h2>
            <div className="space-y-4">
              {data.projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-[14px] font-bold text-zinc-900">{proj.title}</h3>
                  </div>
                  {proj.tools && (
                    <div className="text-[12px] text-zinc-600 mb-1 italic">
                      Built with: {proj.tools}
                    </div>
                  )}
                  {proj.description && (
                    <p className="text-[13px] text-zinc-800 leading-relaxed mt-1 whitespace-pre-wrap">
                      {proj.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-3 border-b border-zinc-300 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {data.education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-[14px] font-bold text-zinc-900">{edu.school}</h3>
                    <p className="text-[13px] text-zinc-800">
                      {edu.degree} {edu.gpa && <span>(GPA/Percentage: {edu.gpa})</span>}
                    </p>
                  </div>
                  <span className="text-[13px] text-zinc-600 font-medium">{edu.date}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-3 border-b border-zinc-300 pb-1">
              Certifications
            </h2>
            <div className="space-y-2">
              {data.certifications.map((cert) => (
                <div key={cert.id} className="flex justify-between items-baseline">
                  <h3 className="text-[13px] font-bold text-zinc-900">{cert.name}</h3>
                  <span className="text-[13px] text-zinc-600">{cert.platform}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Achievements */}
        {data.achievements.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-3 border-b border-zinc-300 pb-1">
              Achievements
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-1">
              {data.achievements.map((ach) => (
                ach.description ? (
                  <li key={ach.id} className="text-[13px] text-zinc-800 leading-relaxed pl-1">
                    {ach.description}
                  </li>
                ) : null
              ))}
            </ul>
          </section>
        )}

        {/* Empty State placeholder */}
        {!data.summary && data.experience.length === 0 && data.education.length === 0 && !data.technicalSkills && data.projects.length === 0 && (
          <div className="text-center text-sm text-zinc-400 italic py-10">
            Fill out the form on the left to see your resume preview here.
          </div>
        )}
      </div>
    </div>
  );
}
