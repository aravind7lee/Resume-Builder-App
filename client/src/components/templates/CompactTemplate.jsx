import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const CompactTemplate = ({ data, accentColor = '#3B82F6' }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return `${month}/${year}`;
  };

  return (
    <div className="max-w-[8.5in] mx-auto bg-white text-gray-900 p-8">
      {/* Header */}
      <header className="mb-5 pb-3 border-b-2" style={{ borderColor: accentColor }}>
        <h1 className="text-2xl font-bold mb-2" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <div className="flex flex-wrap gap-2 text-xs text-gray-700 items-center">
          {data.personal_info?.email && <span className="flex items-center gap-1"><Mail size={11} />{data.personal_info.email}</span>}
          {data.personal_info?.phone && <span>|</span>}
          {data.personal_info?.phone && <span className="flex items-center gap-1"><Phone size={11} />{data.personal_info.phone}</span>}
          {data.personal_info?.location && <span>|</span>}
          {data.personal_info?.location && <span className="flex items-center gap-1"><MapPin size={11} />{data.personal_info.location}</span>}
          {data.personal_info?.linkedin && <span>|</span>}
          {data.personal_info?.linkedin && <span className="flex items-center gap-1"><Linkedin size={11} />{data.personal_info.linkedin.replace("https://", "")}</span>}
        </div>
      </header>

      {/* Summary */}
      {data.professional_summary && (
        <section className="mb-4">
          <h2 className="text-base font-bold uppercase mb-2 tracking-wide" style={{ color: accentColor }}>Summary</h2>
          <p className="text-xs text-gray-800 leading-relaxed">{data.professional_summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-4">
          <h2 className="text-base font-bold uppercase mb-2 tracking-wide" style={{ color: accentColor }}>Experience</h2>
          <div className="space-y-3">
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-bold flex-1">{exp.position}</h3>
                  <span className="text-xs text-gray-600 ml-4 whitespace-nowrap">
                    {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>
                <p className="text-xs text-gray-700 font-semibold mb-1">{exp.company}</p>
                {exp.description && (
                  <p className="text-xs text-gray-800 leading-relaxed whitespace-pre-line">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.project && data.project.length > 0 && (
        <section className="mb-4">
          <h2 className="text-base font-bold uppercase mb-2 tracking-wide" style={{ color: accentColor }}>Projects</h2>
          <div className="space-y-2">
            {data.project.map((proj, index) => (
              <div key={index} className="mb-2">
                <h3 className="text-sm font-bold">{proj.name}</h3>
                <p className="text-xs text-gray-800 leading-relaxed mt-0.5">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-4">
          <h2 className="text-base font-bold uppercase mb-2 tracking-wide" style={{ color: accentColor }}>Education</h2>
          <div className="space-y-2">
            {data.education.map((edu, index) => (
              <div key={index} className="mb-2">
                <h3 className="text-sm font-bold">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                <p className="text-xs text-gray-700">{edu.institution}</p>
                <p className="text-xs text-gray-600">{formatDate(edu.graduation_date)}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-4">
          <h2 className="text-base font-bold uppercase mb-2 tracking-wide" style={{ color: accentColor }}>Skills</h2>
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
  );
};

export default CompactTemplate;
