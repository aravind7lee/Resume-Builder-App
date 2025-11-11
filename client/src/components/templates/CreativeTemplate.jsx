import { Mail, Phone, MapPin, Briefcase, FolderOpen, GraduationCap, Award } from "lucide-react";

const CreativeTemplate = ({ data, accentColor = '#3B82F6' }) => {
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
      {/* Creative Header */}
      <header className="relative mb-6 sm:mb-7 md:mb-8">
        <div className="absolute top-0 left-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 opacity-10" style={{ backgroundColor: accentColor }}></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 opacity-10" style={{ backgroundColor: accentColor }}></div>
        
        <div className="relative p-6 sm:p-8 md:p-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3" style={{ color: accentColor }}>
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          {data.personal_info?.profession && (
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-3 sm:mb-4">{data.personal_info.profession}</p>
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
        </div>
      </header>

      <div className="px-4 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-12">
        {/* About Me */}
        {data.professional_summary && (
          <section className="mb-6 sm:mb-8 md:mb-10">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 sm:w-10 md:w-12 h-1" style={{ backgroundColor: accentColor }}></div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2" style={{ color: accentColor }}>
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                About Me
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed pl-0 sm:pl-13 md:pl-15">{data.professional_summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-6 sm:mb-8 md:mb-10">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 sm:w-10 md:w-12 h-1" style={{ backgroundColor: accentColor }}></div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2" style={{ color: accentColor }}>
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                Experience
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-5 md:space-y-6 pl-0 sm:pl-13 md:pl-15">
              {data.experience.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="hidden sm:block absolute -left-13 md:-left-15 top-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: accentColor }}></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold">{exp.position}</h3>
                      <p className="text-sm sm:text-base text-gray-700 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                      {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed whitespace-pre-line">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.project && data.project.length > 0 && (
          <section className="mb-6 sm:mb-8 md:mb-10">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 sm:w-10 md:w-12 h-1" style={{ backgroundColor: accentColor }}></div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2" style={{ color: accentColor }}>
                <FolderOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:gap-4 pl-0 sm:pl-13 md:pl-15">
              {data.project.map((proj, index) => (
                <div key={index} className="p-3 sm:p-4 border-l-4" style={{ borderColor: accentColor }}>
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
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-6 sm:w-8 h-1" style={{ backgroundColor: accentColor }}></div>
                <h2 className="text-base sm:text-lg md:text-xl font-bold flex items-center gap-2" style={{ color: accentColor }}>
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                  Education
                </h2>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-sm sm:text-base font-bold">{edu.degree}</h3>
                    {edu.field && <p className="text-xs sm:text-sm md:text-base text-gray-700">{edu.field}</p>}
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
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-6 sm:w-8 h-1" style={{ backgroundColor: accentColor }}></div>
                <h2 className="text-base sm:text-lg md:text-xl font-bold" style={{ color: accentColor }}>Skills</h2>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full border-2"
                    style={{ borderColor: accentColor, color: accentColor }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
