import { Mail, Phone, MapPin, Linkedin, Briefcase, FolderOpen, GraduationCap, Award } from "lucide-react";

const ElegantTemplate = ({ data, accentColor = '#3B82F6' }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short"
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 print:text-xs">
      {/* Elegant Header with Side Border */}
      <div className="flex">
        <div className="w-2 print:w-1" style={{ backgroundColor: accentColor }}></div>
        <div className="flex-1 p-10 print:p-7">
          <header className="mb-10 print:mb-4">
            <h1 className="text-4xl font-light tracking-wide mb-2 print:text-2xl print:mb-1.5" style={{ color: accentColor }}>
              {data.personal_info?.full_name || "Your Name"}
            </h1>
            {data.personal_info?.profession && (
              <p className="text-lg text-gray-600 font-light mb-4 print:text-sm print:mb-1.5">{data.personal_info.profession}</p>
            )}
            <div className="flex flex-wrap gap-4 text-sm text-gray-700 items-center print:gap-2 print:text-[10px]">
              {data.personal_info?.email && (
                <span className="flex items-center gap-1.5">
                  <Mail size={14} style={{ color: accentColor }} />
                  {data.personal_info.email}
                </span>
              )}
              {data.personal_info?.phone && (
                <span className="flex items-center gap-1.5">
                  <Phone size={14} style={{ color: accentColor }} />
                  {data.personal_info.phone}
                </span>
              )}
              {data.personal_info?.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} style={{ color: accentColor }} />
                  {data.personal_info.location}
                </span>
              )}
              {data.personal_info?.linkedin && (
                <span className="flex items-center gap-1.5">
                  <Linkedin size={14} style={{ color: accentColor }} />
                  {data.personal_info.linkedin.replace("https://", "")}
                </span>
              )}
            </div>
          </header>

          {/* Professional Summary */}
          {data.professional_summary && (
            <section className="mb-10 print:mb-3">
              <h2 className="text-lg font-light tracking-widest uppercase mb-4 flex items-center gap-2 print:text-sm print:mb-1.5 print:gap-1" style={{ color: accentColor }}>
                <Award size={18} className="print:w-3.5 print:h-3.5" />
                Profile
              </h2>
              <p className="text-gray-800 leading-relaxed font-light text-justify print:text-xs print:leading-snug">
                {data.professional_summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <section className="mb-10 print:mb-3">
              <h2 className="text-lg font-light tracking-widest uppercase mb-6 flex items-center gap-2 print:text-sm print:mb-1.5 print:gap-1" style={{ color: accentColor }}>
                <Briefcase size={18} className="print:w-3.5 print:h-3.5" />
                Professional Experience
              </h2>
              <div className="space-y-8 print:space-y-1.5">
                {data.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-baseline mb-2 print:mb-1">
                      <div>
                        <h3 className="text-xl font-light print:text-sm" style={{ color: accentColor }}>{exp.position}</h3>
                        <p className="text-gray-700 font-light italic print:text-[10px]">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-600 font-light whitespace-nowrap ml-4 print:text-[10px] print:ml-2">
                        {formatDate(exp.start_date)} – {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="text-gray-800 leading-relaxed font-light whitespace-pre-line print:text-xs print:leading-snug">
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.project && data.project.length > 0 && (
            <section className="mb-10 print:mb-3">
              <h2 className="text-lg font-light tracking-widest uppercase mb-6 flex items-center gap-2 print:text-sm print:mb-1.5 print:gap-1" style={{ color: accentColor }}>
                <FolderOpen size={18} className="print:w-3.5 print:h-3.5" />
                Notable Projects
              </h2>
              <div className="space-y-6 print:space-y-1.5">
                {data.project.map((proj, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-light mb-2 print:text-sm print:mb-1" style={{ color: accentColor }}>{proj.name}</h3>
                    <p className="text-gray-800 leading-relaxed font-light print:text-xs print:leading-snug">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="grid grid-cols-2 gap-10 print:gap-4">
            {/* Education */}
            {data.education && data.education.length > 0 && (
              <section>
                <h2 className="text-lg font-light tracking-widest uppercase mb-4 flex items-center gap-2 print:text-sm print:mb-1.5 print:gap-1" style={{ color: accentColor }}>
                  <GraduationCap size={18} className="print:w-3.5 print:h-3.5" />
                  Education
                </h2>
                <div className="space-y-4 print:space-y-1.5">
                  {data.education.map((edu, index) => (
                    <div key={index}>
                      <h3 className="font-light text-gray-900 print:text-xs">{edu.degree}</h3>
                      {edu.field && <p className="text-gray-700 font-light italic print:text-[10px]">{edu.field}</p>}
                      <p className="text-gray-700 font-light print:text-[10px]">{edu.institution}</p>
                      <p className="text-sm text-gray-600 font-light print:text-[10px]">{formatDate(edu.graduation_date)}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
              <section>
                <h2 className="text-lg font-light tracking-widest uppercase mb-4 print:text-sm print:mb-1.5" style={{ color: accentColor }}>
                  Expertise
                </h2>
                <div className="space-y-2 print:space-y-1">
                  {data.skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 print:gap-1.5">
                      <div className="w-8 h-px print:w-5" style={{ backgroundColor: accentColor }}></div>
                      <span className="text-gray-800 font-light print:text-xs">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElegantTemplate;
