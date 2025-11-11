import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ModernTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 shadow-lg rounded-md overflow-hidden">
      {/* Header */}
      <header
        className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-white"
        style={{ backgroundColor: accentColor }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-3 tracking-wide">
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 md:gap-x-6 gap-y-2 text-xs sm:text-sm">
          {data.personal_info?.email && (
            <div className="flex items-center gap-2">
              <Mail className="size-4" />
              <span>{data.personal_info.email}</span>
            </div>
          )}
          {data.personal_info?.phone && (
            <div className="flex items-center gap-2">
              <Phone className="size-4" />
              <span>{data.personal_info.phone}</span>
            </div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <span>{data.personal_info.location}</span>
            </div>
          )}
          {data.personal_info?.linkedin && (
            <a
              href={data.personal_info.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Linkedin className="size-4" />
              <span className="truncate max-w-[180px]">
                {data.personal_info.linkedin
                  .replace("https://www.", "")
                  .replace("https://", "")
                  .replace("http://", "")}
              </span>
            </a>
          )}
          {data.personal_info?.website && (
            <a
              href={data.personal_info.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Globe className="size-4" />
              <span className="truncate max-w-[180px]">
                {data.personal_info.website
                  .replace("https://", "")
                  .replace("http://", "")}
              </span>
            </a>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
        {/* Professional Summary */}
        {data.professional_summary && (
          <section className="mb-6 sm:mb-8 md:mb-10">
            <h2
              className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 pb-2 border-b"
              style={{ borderColor: accentColor }}
            >
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-gray-700 leading-relaxed">
              {data.professional_summary}
            </p>
          </section>
        )}

        {/* Experience Section */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-6 sm:mb-8 md:mb-10">
            <h2
              className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6 pb-2 border-b"
              style={{ borderColor: accentColor }}
            >
              Experience
            </h2>

            <div className="space-y-5 sm:space-y-6 md:space-y-8 relative">
              {data.experience.map((exp, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3 relative">
                  {/* Dot */}
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: accentColor }}
                  ></div>

                  {/* Experience Details */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:flex-wrap items-start mb-1 gap-1">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                          {exp.position}
                        </h3>
                        <p
                          className="font-medium text-xs sm:text-sm"
                          style={{ color: accentColor }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 sm:px-3 py-1 rounded-md whitespace-nowrap">
                        {formatDate(exp.start_date)} -{" "}
                        {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </div>
                    </div>
                    {exp.description && (
                      <p className="text-xs sm:text-sm md:text-[15px] text-gray-700 leading-relaxed mt-2 whitespace-pre-line">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.project && data.project.length > 0 && (
          <section className="mb-6 sm:mb-8 md:mb-10">
            <h2
              className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6 pb-2 border-b"
              style={{ borderColor: accentColor }}
            >
              Projects
            </h2>
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {data.project.map((proj, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3 relative">
                  {/* Dot */}
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: accentColor }}
                  ></div>

                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      {proj.name}
                    </h3>
                    {proj.description && (
                      <p className="text-xs sm:text-sm md:text-[15px] text-gray-700 leading-relaxed mt-2 whitespace-pre-line">
                        {proj.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 pb-2 border-b"
                style={{ borderColor: accentColor }}
              >
                Education
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </h3>
                    <p
                      className="text-xs sm:text-sm font-medium"
                      style={{ color: accentColor }}
                    >
                      {edu.institution}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm text-gray-600">
                      <span>{formatDate(edu.graduation_date)}</span>
                      {edu.gpa && <span>GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 pb-2 border-b"
                style={{ borderColor: accentColor }}
              >
                Skills
              </h2>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-white rounded-full"
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
    </div>
  );
};

export default ModernTemplate;
