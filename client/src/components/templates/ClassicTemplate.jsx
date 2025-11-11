import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ClassicTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed print:min-h-[11in] print:p-12 print:leading-relaxed">
      {/* Header */}
      <header
        className="text-center mb-8 pb-6 border-b-2 print:mb-10 print:pb-8"
        style={{ borderColor: accentColor }}
      >
        <h1 className="text-3xl font-bold mb-2 print:text-4xl print:mb-3" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 print:gap-5 print:text-base">
          {data.personal_info?.email && (
            <div className="flex items-center gap-1">
              <Mail className="size-4 print:size-5" />
              <span>{data.personal_info.email}</span>
            </div>
          )}
          {data.personal_info?.phone && (
            <div className="flex items-center gap-1">
              <Phone className="size-4 print:size-5" />
              <span>{data.personal_info.phone}</span>
            </div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-1">
              <MapPin className="size-4 print:size-5" />
              <span>{data.personal_info.location}</span>
            </div>
          )}
          {data.personal_info?.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin className="size-4 print:size-5" />
              <span className="break-all">{data.personal_info.linkedin}</span>
            </div>
          )}
          {data.personal_info?.website && (
            <div className="flex items-center gap-1">
              <Globe className="size-4 print:size-5" />
              <span className="break-all">{data.personal_info.website}</span>
            </div>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {data.professional_summary && (
        <section className="mb-6 print:mb-8">
          <h2
            className="text-xl font-semibold mb-3 print:text-2xl print:mb-4"
            style={{ color: accentColor }}
          >
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed print:text-base print:leading-relaxed">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-6 print:mb-8">
          <h2
            className="text-xl font-semibold mb-4 print:text-2xl print:mb-5"
            style={{ color: accentColor }}
          >
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="space-y-4 print:space-y-5">
            {data.experience.map((exp, index) => (
              <div
                key={index}
                className="border-l-3 pl-4 print:pl-5"
                style={{ borderColor: accentColor }}
              >
                <div className="flex justify-between items-start mb-2 print:mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 print:text-lg">
                      {exp.position}
                    </h3>
                    <p className="text-gray-700 font-medium print:text-base">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-gray-600 print:text-base">
                    <p>
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </p>
                  </div>
                </div>
                {exp.description && (
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line print:text-base print:leading-relaxed">
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
        <section className="mb-6 print:mb-8">
          <h2
            className="text-xl font-semibold mb-4 print:text-2xl print:mb-5"
            style={{ color: accentColor }}
          >
            PROJECTS
          </h2>

          <ul className="space-y-3 print:space-y-4">
            {data.project.map((proj, index) => (
              <div
                key={index}
                className="flex justify-between items-start border-l-3 border-gray-300 pl-6 print:pl-7"
              >
                <div>
                  <li className="font-semibold text-gray-800 print:text-lg">{proj.name}</li>
                  <p className="text-gray-600 print:text-base">{proj.description}</p>
                </div>
              </div>
            ))}
          </ul>
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-6 print:mb-8">
          <h2
            className="text-xl font-semibold mb-4 print:text-2xl print:mb-5"
            style={{ color: accentColor }}
          >
            EDUCATION
          </h2>

          <div className="space-y-3 print:space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 print:text-lg">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-gray-700 print:text-base">{edu.institution}</p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-600 print:text-base">GPA: {edu.gpa}</p>
                  )}
                </div>
                <div className="text-sm text-gray-600 print:text-base">
                  <p>{formatDate(edu.graduation_date)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-6 print:mb-8">
          <h2
            className="text-xl font-semibold mb-4 print:text-2xl print:mb-5"
            style={{ color: accentColor }}
          >
            CORE SKILLS
          </h2>

          <div className="flex gap-4 flex-wrap print:gap-5">
            {data.skills.map((skill, index) => (
              <div key={index} className="text-gray-700 print:text-base">
                • {skill}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;
