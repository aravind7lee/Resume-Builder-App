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
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-10 print:p-6 print:text-xs">
      {/* Header */}
      <header className="text-center mb-10 print:mb-4">
        <h1 className="text-5xl font-bold mb-3 print:text-2xl print:mb-2" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        {data.personal_info?.profession && (
          <p className="text-lg text-gray-600 mb-4 print:text-sm print:mb-2">{data.personal_info.profession}</p>
        )}
        <div className="flex justify-center gap-4 text-sm text-gray-700 flex-wrap items-center print:gap-2.5 print:text-xs">
          {data.personal_info?.email && <span className="flex items-center gap-1"><Mail size={14} />{data.personal_info.email}</span>}
          {data.personal_info?.phone && <span>•</span>}
          {data.personal_info?.phone && <span className="flex items-center gap-1"><Phone size={14} />{data.personal_info.phone}</span>}
          {data.personal_info?.location && <span>•</span>}
          {data.personal_info?.location && <span className="flex items-center gap-1"><MapPin size={14} />{data.personal_info.location}</span>}
        </div>
        <div className="mt-4 h-1 w-32 mx-auto print:h-0.5 print:w-24 print:mt-2" style={{ backgroundColor: accentColor }}></div>
      </header>

      {/* Professional Summary */}
      {data.professional_summary && (
        <section className="mb-10 text-center max-w-3xl mx-auto print:mb-3">
          <p className="text-gray-800 leading-relaxed italic print:text-sm print:leading-normal">{data.professional_summary}</p>
        </section>
      )}

      {/* Experience Timeline */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-10 print:mb-3">
          <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2 print:text-lg print:mb-3 print:gap-1.5" style={{ color: accentColor }}>
            <Briefcase size={24} className="print:w-4 print:h-4" />
            Professional Journey
          </h2>
          <div className="space-y-8 print:space-y-3">
            {data.experience.map((exp, index) => (
              <div key={index} className="flex gap-4 print:gap-2">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full border-4 bg-white print:w-2.5 print:h-2.5 print:border-2" style={{ borderColor: accentColor }}></div>
                  <div className="w-1 flex-1 mt-2 print:w-px print:mt-1" style={{ backgroundColor: accentColor }}></div>
                </div>
                <div className="flex-1 pb-4 print:pb-2">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm print:p-2 print:rounded">
                    <div className="flex justify-between items-start mb-2 print:mb-1">
                      <div>
                        <h3 className="text-lg font-bold print:text-sm" style={{ color: accentColor }}>{exp.position}</h3>
                        <p className="text-gray-700 font-semibold print:text-xs">{exp.company}</p>
                      </div>
                      <span className="text-sm font-semibold text-gray-600 whitespace-nowrap ml-4 print:text-xs print:ml-2">
                        {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line print:text-xs print:leading-normal">{exp.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.project && data.project.length > 0 && (
        <section className="mb-10 print:mb-3">
          <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2 print:text-lg print:mb-3 print:gap-1.5" style={{ color: accentColor }}>
            <FolderOpen size={24} className="print:w-4 print:h-4" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-4 print:gap-2">
            {data.project.map((proj, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg border-l-4 print:p-2 print:rounded print:border-l-2" style={{ borderColor: accentColor }}>
                <h3 className="text-lg font-bold mb-2 print:text-sm print:mb-1">{proj.name}</h3>
                <p className="text-gray-800 leading-relaxed print:text-xs print:leading-normal">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-8 print:gap-4">
        {/* Education */}
        {data.education && data.education.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2 print:text-base print:mb-2 print:gap-1" style={{ color: accentColor }}>
              <GraduationCap size={20} className="print:w-4 print:h-4" />
              Education
            </h2>
            <div className="space-y-4 print:space-y-2">
              {data.education.map((edu, index) => (
                <div key={index} className="text-center bg-gray-50 p-4 rounded-lg print:p-2 print:rounded">
                  <h3 className="font-bold print:text-sm">{edu.degree}</h3>
                  {edu.field && <p className="text-gray-700 print:text-xs">{edu.field}</p>}
                  <p className="text-gray-700 font-medium print:text-xs">{edu.institution}</p>
                  <p className="text-sm text-gray-600 print:text-xs">{formatDate(edu.graduation_date)}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2 print:text-base print:mb-2 print:gap-1" style={{ color: accentColor }}>
              <Award size={20} className="print:w-4 print:h-4" />
              Skills
            </h2>
            <div className="flex flex-wrap gap-2 justify-center print:gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-medium rounded-full text-white print:px-2.5 print:py-1 print:text-xs"
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
