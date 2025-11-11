import { Mail, Phone, MapPin, Linkedin, GraduationCap, Award } from "lucide-react";

const TwoColumnTemplate = ({ data, accentColor = '#3B82F6' }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short"
    });
  };

  return (
    <div className="max-w-[8.5in] mx-auto bg-white text-gray-900 flex">
      {/* Left Sidebar */}
      <aside className="w-1/3 text-white p-6" style={{ backgroundColor: accentColor }}>
        {/* Profile Image */}
        {data.personal_info?.image && (
          <div className="mb-6">
            <img
              src={typeof data.personal_info.image === "string" ? data.personal_info.image : URL.createObjectURL(data.personal_info.image)}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white mx-auto"
            />
          </div>
        )}

        {/* Name */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold mb-1">
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          {data.personal_info?.profession && (
            <p className="text-sm opacity-90">{data.personal_info.profession}</p>
          )}
        </div>

        {/* Contact */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wide mb-3 border-b border-white/30 pb-2">
            Contact
          </h2>
          <div className="space-y-2 text-xs">
            {data.personal_info?.email && (
              <div className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 flex-shrink-0" />
                <span className="break-all">{data.personal_info.email}</span>
              </div>
            )}
            {data.personal_info?.phone && (
              <div className="flex items-center gap-2">
                <Phone size={14} className="flex-shrink-0" />
                <span>{data.personal_info.phone}</span>
              </div>
            )}
            {data.personal_info?.location && (
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>{data.personal_info.location}</span>
              </div>
            )}
            {data.personal_info?.linkedin && (
              <div className="flex items-start gap-2">
                <Linkedin size={14} className="mt-0.5 flex-shrink-0" />
                <span className="break-all">{data.personal_info.linkedin.replace("https://", "")}</span>
              </div>
            )}
          </div>
        </section>

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wide mb-3 border-b border-white/30 pb-2 flex items-center gap-2">
              <GraduationCap size={16} />
              Education
            </h2>
            <div className="space-y-3 text-xs">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-bold">{edu.degree}</h3>
                  {edu.field && <p className="opacity-90">{edu.field}</p>}
                  <p className="opacity-90">{edu.institution}</p>
                  <p className="text-xs opacity-75">{formatDate(edu.graduation_date)}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wide mb-3 border-b border-white/30 pb-2 flex items-center gap-2">
              <Award size={16} />
              Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              {data.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </aside>

      {/* Right Content */}
      <main className="w-2/3 p-6">
        {/* Professional Summary */}
        {data.professional_summary && (
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3 uppercase tracking-wide border-b-2 pb-2" style={{ borderColor: accentColor, color: accentColor }}>
              Profile
            </h2>
            <p className="text-sm text-gray-800 leading-relaxed">{data.professional_summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3 uppercase tracking-wide border-b-2 pb-2" style={{ borderColor: accentColor, color: accentColor }}>
              Experience
            </h2>
            <div className="space-y-4">
              {data.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-sm font-semibold" style={{ color: accentColor }}>{exp.company}</p>
                    </div>
                    <span className="text-xs text-gray-600 whitespace-nowrap ml-4">
                      {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-line mt-1">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.project && data.project.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3 uppercase tracking-wide border-b-2 pb-2" style={{ borderColor: accentColor, color: accentColor }}>
              Projects
            </h2>
            <div className="space-y-3">
              {data.project.map((proj, index) => (
                <div key={index}>
                  <h3 className="text-sm font-bold text-gray-900">{proj.name}</h3>
                  <p className="text-xs text-gray-700 leading-relaxed mt-1">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default TwoColumnTemplate;
