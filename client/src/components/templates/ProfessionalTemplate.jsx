import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

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
    <div className="max-w-[8.5in] mx-auto bg-white text-gray-900">
      {/* Header Section */}
      <header className="text-white px-8 py-6" style={{ backgroundColor: accentColor || '#1F2937' }}>
        <h1 className="text-2xl font-bold mb-2">
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        {data.personal_info?.profession && (
          <p className="text-sm mb-2 opacity-90">{data.personal_info.profession}</p>
        )}
        <div className="flex flex-wrap gap-2 text-xs items-center">
          {data.personal_info?.email && (
            <span className="flex items-center gap-1">
              <Mail size={12} />
              {data.personal_info.email}
            </span>
          )}
          {data.personal_info?.phone && (
            <span className="flex items-center gap-1">
              <Phone size={12} />
              {data.personal_info.phone}
            </span>
          )}
          {data.personal_info?.location && (
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              {data.personal_info.location}
            </span>
          )}
          {data.personal_info?.linkedin && (
            <span className="flex items-center gap-1">
              <Linkedin size={12} />
              {data.personal_info.linkedin.replace("https://", "")}
            </span>
          )}
        </div>
      </header>

      <div className="px-8 py-6">
        {/* Professional Summary */}
        {data.professional_summary && (
          <section className="mb-5">
            <h2 className="text-base font-bold mb-2 pb-1 border-b-2 uppercase tracking-wide" style={{ borderColor: accentColor }}>
              Professional Summary
            </h2>
            <p className="text-sm text-gray-800 leading-relaxed">{data.professional_summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-5">
            <h2 className="text-base font-bold mb-2 pb-1 border-b-2 uppercase tracking-wide" style={{ borderColor: accentColor }}>
              Work Experience
            </h2>
            <div className="space-y-3">
              {data.experience.map((exp, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-sm text-gray-700 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-xs text-gray-600 whitespace-nowrap ml-4">
                      {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-xs text-gray-800 leading-relaxed whitespace-pre-line mt-1">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.project && data.project.length > 0 && (
          <section className="mb-5">
            <h2 className="text-base font-bold mb-2 pb-1 border-b-2 uppercase tracking-wide" style={{ borderColor: accentColor }}>
              Projects
            </h2>
            <div className="space-y-2">
              {data.project.map((proj, index) => (
                <div key={index} className="mb-2">
                  <h3 className="text-sm font-bold">{proj.name}</h3>
                  <p className="text-xs text-gray-800 leading-relaxed mt-1">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <section className="mb-5">
            <h2 className="text-base font-bold mb-2 pb-1 border-b-2 uppercase tracking-wide" style={{ borderColor: accentColor }}>
              Education
            </h2>
            <div className="space-y-2">
              {data.education.map((edu, index) => (
                <div key={index} className="mb-2">
                  <h3 className="text-sm font-bold text-gray-900">{edu.degree}</h3>
                  {edu.field && <p className="text-sm text-gray-700">{edu.field}</p>}
                  <p className="text-sm text-gray-700 font-medium">{edu.institution}</p>
                  <p className="text-xs text-gray-600">{formatDate(edu.graduation_date)}</p>
                  {edu.gpa && <p className="text-xs text-gray-600">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <section className="mb-4">
            <h2 className="text-base font-bold mb-2 pb-1 border-b-2 uppercase tracking-wide" style={{ borderColor: accentColor }}>
              Skills
            </h2>
            <div className="flex flex-wrap gap-1">
              {data.skills.map((skill, index) => (
                <span key={index} className="text-xs text-gray-800">
                  {index > 0 && "• "}{skill}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
