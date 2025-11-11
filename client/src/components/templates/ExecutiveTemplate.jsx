import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const ExecutiveTemplate = ({ data, accentColor = '#3B82F6' }) => {
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
      {/* Header with Accent Bar */}
      <div className="h-1.5 sm:h-2" style={{ backgroundColor: accentColor }}></div>
      
      <div className="px-4 sm:px-8 md:px-12 py-6 sm:py-7 md:py-8">
        {/* Name and Contact */}
        <header className="mb-6 sm:mb-7 md:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 tracking-tight" style={{ color: accentColor }}>
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <div className="flex flex-wrap gap-x-3 sm:gap-x-4 md:gap-x-6 gap-y-1 text-xs sm:text-sm text-gray-700">
            {data.personal_info?.email && (
              <span className="flex items-center gap-1.5">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                {data.personal_info.email}
              </span>
            )}
            {data.personal_info?.phone && (
              <span className="flex items-center gap-1.5">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                {data.personal_info.phone}
              </span>
            )}
            {data.personal_info?.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                {data.personal_info.location}
              </span>
            )}
            {data.personal_info?.linkedin && (
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                {data.personal_info.linkedin.replace("https://", "")}
              </span>
            )}
          </div>
        </header>

        {/* Executive Summary */}
        {data.professional_summary && (
          <section className="mb-6 sm:mb-7 md:mb-8">
            <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider mb-2 sm:mb-3" style={{ color: accentColor }}>
              Executive Summary
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed text-justify">
              {data.professional_summary}
            </p>
          </section>
        )}

        {/* Professional Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-6 sm:mb-7 md:mb-8">
            <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider mb-3 sm:mb-4" style={{ color: accentColor }}>
              Professional Experience
            </h2>
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">{exp.position}</h3>
                      <p className="text-sm sm:text-base text-gray-700 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                      {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </div>
                  </div>
                  {exp.description && (
                    <div className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed whitespace-pre-line pl-3 sm:pl-4 border-l-2" style={{ borderColor: accentColor }}>
                      {exp.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.project && data.project.length > 0 && (
          <section className="mb-6 sm:mb-7 md:mb-8">
            <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider mb-3 sm:mb-4" style={{ color: accentColor }}>
              Key Projects
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {data.project.map((proj, index) => (
                <div key={index}>
                  <h3 className="text-base sm:text-lg font-semibold">{proj.name}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section>
              <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider mb-3 sm:mb-4" style={{ color: accentColor }}>
                Education
              </h2>
              <div className="space-y-2 sm:space-y-3">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-sm sm:text-base font-semibold">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">{edu.institution}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{formatDate(edu.graduation_date)}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider mb-3 sm:mb-4" style={{ color: accentColor }}>
                Core Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                {data.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }}></div>
                    <span className="text-xs sm:text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveTemplate;
