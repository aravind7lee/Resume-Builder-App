import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const CompactTemplate = ({ data, accentColor = '#3B82F6' }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return `${month}/${year}`;
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-4 sm:p-6 md:p-8">
      {/* Header */}
      <header className="mb-4 sm:mb-5 md:mb-6 pb-3 sm:pb-4 border-b-4" style={{ borderColor: accentColor }}>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <div className="flex flex-wrap gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-700 items-center">
          {data.personal_info?.email && (
            <span className="flex items-center gap-1">
              <Mail className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              {data.personal_info.email}
            </span>
          )}
          {data.personal_info?.phone && <span>|</span>}
          {data.personal_info?.phone && (
            <span className="flex items-center gap-1">
              <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              {data.personal_info.phone}
            </span>
          )}
          {data.personal_info?.location && <span>|</span>}
          {data.personal_info?.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              {data.personal_info.location}
            </span>
          )}
          {data.personal_info?.linkedin && <span>|</span>}
          {data.personal_info?.linkedin && (
            <span className="flex items-center gap-1">
              <Linkedin className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              {data.personal_info.linkedin.replace("https://", "")}
            </span>
          )}
        </div>
      </header>

      {/* Summary */}
      {data.professional_summary && (
        <section className="mb-4 sm:mb-5">
          <h2 className="text-xs sm:text-sm font-bold uppercase mb-1.5 sm:mb-2" style={{ color: accentColor }}>Summary</h2>
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">{data.professional_summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-4 sm:mb-5">
          <h2 className="text-xs sm:text-sm font-bold uppercase mb-2 sm:mb-3" style={{ color: accentColor }}>Experience</h2>
          <div className="space-y-3 sm:space-y-4">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
                  <h3 className="text-xs sm:text-sm font-bold">{exp.position}</h3>
                  <span className="text-[10px] sm:text-xs text-gray-600 whitespace-nowrap">
                    {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-700 font-semibold mb-1">{exp.company}</p>
                {exp.description && (
                  <p className="text-[10px] sm:text-xs text-gray-800 leading-relaxed whitespace-pre-line">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.project && data.project.length > 0 && (
        <section className="mb-4 sm:mb-5">
          <h2 className="text-xs sm:text-sm font-bold uppercase mb-2 sm:mb-3" style={{ color: accentColor }}>Projects</h2>
          <div className="space-y-2 sm:space-y-3">
            {data.project.map((proj, index) => (
              <div key={index}>
                <h3 className="text-xs sm:text-sm font-bold">{proj.name}</h3>
                <p className="text-[10px] sm:text-xs text-gray-800 leading-relaxed">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {/* Education */}
        {data.education && data.education.length > 0 && (
          <section>
            <h2 className="text-xs sm:text-sm font-bold uppercase mb-2 sm:mb-3" style={{ color: accentColor }}>Education</h2>
            <div className="space-y-2 sm:space-y-3">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="text-[10px] sm:text-xs font-bold">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                  <p className="text-[10px] sm:text-xs text-gray-700">{edu.institution}</p>
                  <p className="text-[10px] sm:text-xs text-gray-600">{formatDate(edu.graduation_date)}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <section>
            <h2 className="text-xs sm:text-sm font-bold uppercase mb-2 sm:mb-3" style={{ color: accentColor }}>Skills</h2>
            <div className="flex flex-wrap gap-1">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-[10px] sm:text-xs px-2 py-1 rounded text-white"
                  style={{ backgroundColor: accentColor }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CompactTemplate;
