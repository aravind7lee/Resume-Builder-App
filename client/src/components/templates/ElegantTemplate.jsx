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
        <div className="w-1.5 sm:w-2" style={{ backgroundColor: accentColor }}></div>
        <div className="flex-1 p-4 sm:p-6 md:p-10">
          <header className="mb-6 sm:mb-8 md:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide mb-2" style={{ color: accentColor }}>
              {data.personal_info?.full_name || "Your Name"}
            </h1>
            {data.personal_info?.profession && (
              <p className="text-base sm:text-lg text-gray-600 font-light mb-3 sm:mb-4">{data.personal_info.profession}</p>
            )}
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-gray-700">
              {data.personal_info?.email && (
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: accentColor }} />
                  {data.personal_info.email}
                </span>
              )}
              {data.personal_info?.phone && (
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: accentColor }} />
                  {data.personal_info.phone}
                </span>
              )}
              {data.personal_info?.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: accentColor }} />
                  {data.personal_info.location}
                </span>
              )}
              {data.personal_info?.linkedin && (
                <span className="flex items-center gap-1.5">
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: accentColor }} />
                  {data.personal_info.linkedin.replace("https://", "")}
                </span>
              )}
            </div>
          </header>

          {/* Professional Summary */}
          {data.professional_summary && (
            <section className="mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-base sm:text-lg font-light tracking-widest uppercase mb-3 sm:mb-4 flex items-center gap-2" style={{ color: accentColor }}>
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                Profile
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed font-light text-justify">
                {data.professional_summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <section className="mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-base sm:text-lg font-light tracking-widest uppercase mb-4 sm:mb-5 md:mb-6 flex items-center gap-2" style={{ color: accentColor }}>
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                Professional Experience
              </h2>
              <div className="space-y-5 sm:space-y-6 md:space-y-8">
                {data.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1">
                      <div>
                        <h3 className="text-lg sm:text-xl font-light" style={{ color: accentColor }}>{exp.position}</h3>
                        <p className="text-sm sm:text-base text-gray-700 font-light italic">{exp.company}</p>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-600 font-light whitespace-nowrap">
                        {formatDate(exp.start_date)} – {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed font-light whitespace-pre-line">
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
            <section className="mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-base sm:text-lg font-light tracking-widest uppercase mb-4 sm:mb-5 md:mb-6 flex items-center gap-2" style={{ color: accentColor }}>
                <FolderOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                Notable Projects
              </h2>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {data.project.map((proj, index) => (
                  <div key={index}>
                    <h3 className="text-base sm:text-lg font-light mb-1 sm:mb-2" style={{ color: accentColor }}>{proj.name}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed font-light">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {/* Education */}
            {data.education && data.education.length > 0 && (
              <section>
                <h2 className="text-base sm:text-lg font-light tracking-widest uppercase mb-3 sm:mb-4 flex items-center gap-2" style={{ color: accentColor }}>
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                  Education
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {data.education.map((edu, index) => (
                    <div key={index}>
                      <h3 className="text-sm sm:text-base font-light text-gray-900">{edu.degree}</h3>
                      {edu.field && <p className="text-xs sm:text-sm md:text-base text-gray-700 font-light italic">{edu.field}</p>}
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 font-light">{edu.institution}</p>
                      <p className="text-xs sm:text-sm text-gray-600 font-light">{formatDate(edu.graduation_date)}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
              <section>
                <h2 className="text-base sm:text-lg font-light tracking-widest uppercase mb-3 sm:mb-4" style={{ color: accentColor }}>
                  Expertise
                </h2>
                <div className="space-y-1.5 sm:space-y-2">
                  {data.skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 sm:w-8 h-px" style={{ backgroundColor: accentColor }}></div>
                      <span className="text-xs sm:text-sm md:text-base text-gray-800 font-light">{skill}</span>
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
