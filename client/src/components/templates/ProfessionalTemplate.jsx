import { Mail, Phone, MapPin, Linkedin, Briefcase, FolderOpen, GraduationCap, Award } from "lucide-react";

const ProfessionalTemplate = ({ data, accentColor = '#3B82F6' }) => {
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
      {/* Header Section */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-4 sm:px-6 md:px-10 py-6 sm:py-7 md:py-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        {data.personal_info?.profession && (
          <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 opacity-90">{data.personal_info.profession}</p>
        )}
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm">
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

      <div className="px-4 sm:px-6 md:px-10 py-6 sm:py-7 md:py-8">
        {/* Professional Summary */}
        {data.professional_summary && (
          <section className="mb-6 sm:mb-7 md:mb-8">
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 pb-2 border-b-2" style={{ borderColor: accentColor }}>
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed">{data.professional_summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-6 sm:mb-7 md:mb-8">
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 pb-2 border-b-2" style={{ borderColor: accentColor }}>
              WORK EXPERIENCE
            </h2>
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index} className="relative pl-4 sm:pl-5 md:pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2" style={{ borderColor: accentColor, backgroundColor: "white" }}></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold" style={{ color: accentColor }}>{exp.position}</h3>
                      <p className="text-sm sm:text-base text-gray-700 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600 bg-gray-100 px-2 sm:px-3 py-1 rounded whitespace-nowrap">
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
          <section className="mb-6 sm:mb-7 md:mb-8">
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 pb-2 border-b-2" style={{ borderColor: accentColor }}>
              PROJECTS
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {data.project.map((proj, index) => (
                <div key={index} className="pl-4 sm:pl-5 md:pl-6 relative">
                  <div className="absolute left-0 top-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: accentColor }}></div>
                  <h3 className="text-base sm:text-lg font-bold mb-1">{proj.name}</h3>
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
              <h2 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 pb-2 border-b-2" style={{ borderColor: accentColor }}>
                EDUCATION
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900">{edu.degree}</h3>
                    {edu.field && <p className="text-xs sm:text-sm md:text-base text-gray-700">{edu.field}</p>}
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">{edu.institution}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{formatDate(edu.graduation_date)}</p>
                    {edu.gpa && <p className="text-xs sm:text-sm text-gray-600">GPA: {edu.gpa}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <h2 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 pb-2 border-b-2" style={{ borderColor: accentColor }}>
                SKILLS
              </h2>
              <div className="space-y-1.5 sm:space-y-2">
                {data.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: accentColor }}></div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-800">{skill}</span>
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

export default ProfessionalTemplate;
