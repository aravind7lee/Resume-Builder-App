import { Mail, Phone, MapPin, Briefcase, FolderOpen, GraduationCap, Award } from "lucide-react";

const TimelineTemplate = ({ data, accentColor = '#3B82F6' }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short"
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-4 sm:p-6 md:p-10">
      {/* Header */}
      <header className="text-center mb-6 sm:mb-8 md:mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        {data.personal_info?.profession && (
          <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">{data.personal_info.profession}</p>
        )}
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-gray-700 flex-wrap items-center">
          {data.personal_info?.email && (
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              {data.personal_info.email}
            </span>
          )}
          {data.personal_info?.phone && <span>•</span>}
          {data.personal_info?.phone && (
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              {data.personal_info.phone}
            </span>
          )}
          {data.personal_info?.location && <span>•</span>}
          {data.personal_info?.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
              {data.personal_info.location}
            </span>
          )}
        </div>
        <div className="mt-3 sm:mt-4 h-1 w-24 sm:w-32 mx-auto" style={{ backgroundColor: accentColor }}></div>
      </header>

      {/* Professional Summary */}
      {data.professional_summary && (
        <section className="mb-6 sm:mb-8 md:mb-10 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed italic">{data.professional_summary}</p>
        </section>
      )}

      {/* Experience Timeline */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 sm:mb-7 md:mb-8 flex items-center justify-center gap-2" style={{ color: accentColor }}>
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
            Professional Journey
          </h2>
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full" style={{ backgroundColor: accentColor }}></div>
            
            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              {data.experience.map((exp, index) => (
                <div key={index} className={`flex flex-col md:flex-row md:items-center gap-3 sm:gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm">
                      <h3 className="text-base sm:text-lg font-bold" style={{ color: accentColor }}>{exp.position}</h3>
                      <p className="text-sm sm:text-base text-gray-700 font-semibold mb-1 sm:mb-2">{exp.company}</p>
                      {exp.description && (
                        <p className="text-xs sm:text-sm text-gray-800 leading-relaxed whitespace-pre-line">{exp.description}</p>
                      )}
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden md:flex relative items-center justify-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-4 bg-white z-10" style={{ borderColor: accentColor }}></div>
                  </div>

                  {/* Date */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-xs sm:text-sm font-semibold text-gray-600">
                      {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects */}
      {data.project && data.project.length > 0 && (
        <section className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 sm:mb-5 md:mb-6 flex items-center justify-center gap-2" style={{ color: accentColor }}>
            <FolderOpen className="w-5 h-5 sm:w-6 sm:h-6" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {data.project.map((proj, index) => (
              <div key={index} className="bg-gray-50 p-3 sm:p-4 md:p-5 rounded-lg border-l-4" style={{ borderColor: accentColor }}>
                <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{proj.name}</h3>
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
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-center flex items-center justify-center gap-2" style={{ color: accentColor }}>
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
              Education
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="text-center bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="text-sm sm:text-base font-bold">{edu.degree}</h3>
                  {edu.field && <p className="text-xs sm:text-sm md:text-base text-gray-700">{edu.field}</p>}
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">{edu.institution}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{formatDate(edu.graduation_date)}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <section>
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-center flex items-center justify-center gap-2" style={{ color: accentColor }}>
              <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              Skills
            </h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full text-white"
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

export default TimelineTemplate;
