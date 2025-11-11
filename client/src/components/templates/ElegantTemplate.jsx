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
    <div className="max-w-4xl mx-auto bg-white text-gray-900">
      {/* Elegant Header with Side Border */}
      <div className="flex">
        <div className="w-2" style={{ backgroundColor: accentColor }}></div>
        <div className="flex-1 p-10">
          <header className="mb-10">
            <h1 className="text-4xl font-light tracking-wide mb-2" style={{ color: accentColor }}>
              {data.personal_info?.full_name || "Your Name"}
            </h1>
            {data.personal_info?.profession && (
              <p className="text-lg text-gray-600 font-light mb-4">{data.personal_info.profession}</p>
            )}
            <div className="flex flex-wrap gap-4 text-sm text-gray-700 items-center">
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
            <section className="mb-10">
              <h2 className="text-lg font-light tracking-widest uppercase mb-4 flex items-center gap-2" style={{ color: accentColor }}>
                <Award size={18} />
                Profile
              </h2>
              <p className="text-gray-800 leading-relaxed font-light text-justify">
                {data.professional_summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <section className="mb-10">
              <h2 className="text-lg font-light tracking-widest uppercase mb-6 flex items-center gap-2" style={{ color: accentColor }}>
                <Briefcase size={18} />
                Professional Experience
              </h2>
              <div className="space-y-8">
                {data.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-baseline mb-2">
                      <div>
                        <h3 className="text-xl font-light" style={{ color: accentColor }}>{exp.position}</h3>
                        <p className="text-gray-700 font-light italic">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-600 font-light whitespace-nowrap ml-4">
                        {formatDate(exp.start_date)} – {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="text-gray-800 leading-relaxed font-light whitespace-pre-line">
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
            <section className="mb-10">
              <h2 className="text-lg font-light tracking-widest uppercase mb-6 flex items-center gap-2" style={{ color: accentColor }}>
                <FolderOpen size={18} />
                Notable Projects
              </h2>
              <div className="space-y-6">
                {data.project.map((proj, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-light mb-2" style={{ color: accentColor }}>{proj.name}</h3>
                    <p className="text-gray-800 leading-relaxed font-light">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="grid grid-cols-2 gap-10">
            {/* Education */}
            {data.education && data.education.length > 0 && (
              <section>
                <h2 className="text-lg font-light tracking-widest uppercase mb-4 flex items-center gap-2" style={{ color: accentColor }}>
                  <GraduationCap size={18} />
                  Education
                </h2>
                <div className="space-y-4">
                  {data.education.map((edu, index) => (
                    <div key={index}>
                      <h3 className="font-light text-gray-900">{edu.degree}</h3>
                      {edu.field && <p className="text-gray-700 font-light italic">{edu.field}</p>}
                      <p className="text-gray-700 font-light">{edu.institution}</p>
                      <p className="text-sm text-gray-600 font-light">{formatDate(edu.graduation_date)}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
              <section>
                <h2 className="text-lg font-light tracking-widest uppercase mb-4" style={{ color: accentColor }}>
                  Expertise
                </h2>
                <div className="space-y-2">
                  {data.skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-px" style={{ backgroundColor: accentColor }}></div>
                      <span className="text-gray-800 font-light">{skill}</span>
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
