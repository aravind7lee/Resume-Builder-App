import { Mail, Phone, MapPin, Award, Briefcase, FolderOpen, GraduationCap } from "lucide-react";

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
    <div className="max-w-4xl mx-auto bg-white text-gray-900 print:text-sm">
      {/* Creative Header */}
      <header className="relative mb-8 print:mb-4">
        <div className="absolute top-0 left-0 w-32 h-32 opacity-10 print:w-16 print:h-16" style={{ backgroundColor: accentColor }}></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 print:w-12 print:h-12" style={{ backgroundColor: accentColor }}></div>
        
        <div className="relative p-12 text-center print:p-6">
          <h1 className="text-5xl font-bold mb-3 print:text-2xl print:mb-2" style={{ color: accentColor }}>
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          {data.personal_info?.profession && (
            <p className="text-xl text-gray-600 mb-4 print:text-base print:mb-2">{data.personal_info.profession}</p>
          )}
          <div className="flex justify-center gap-4 text-sm text-gray-700 flex-wrap items-center print:gap-2.5 print:text-xs">
            {data.personal_info?.email && <span className="flex items-center gap-1"><Mail size={14} />{data.personal_info.email}</span>}
            {data.personal_info?.phone && <span>•</span>}
            {data.personal_info?.phone && <span className="flex items-center gap-1"><Phone size={14} />{data.personal_info.phone}</span>}
            {data.personal_info?.location && <span>•</span>}
            {data.personal_info?.location && <span className="flex items-center gap-1"><MapPin size={14} />{data.personal_info.location}</span>}
          </div>
        </div>
      </header>

      <div className="px-12 pb-12 print:px-6 print:pb-6">
        {/* About Me */}
        {data.professional_summary && (
          <section className="mb-10 print:mb-3">
            <div className="flex items-center gap-3 mb-4 print:gap-2 print:mb-2">
              <Award size={20} style={{ color: accentColor }} className="print:w-4 print:h-4" />
              <div className="w-12 h-1 print:w-8 print:h-0.5" style={{ backgroundColor: accentColor }}></div>
              <h2 className="text-2xl font-bold print:text-base" style={{ color: accentColor }}>About Me</h2>
            </div>
            <p className="text-gray-800 leading-relaxed print:text-sm print:leading-normal">{data.professional_summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-10 print:mb-3">
            <div className="flex items-center gap-3 mb-4 print:gap-2 print:mb-2">
              <Briefcase size={20} style={{ color: accentColor }} className="print:w-4 print:h-4" />
              <div className="w-12 h-1 print:w-8 print:h-0.5" style={{ backgroundColor: accentColor }}></div>
              <h2 className="text-2xl font-bold print:text-base" style={{ color: accentColor }}>Experience</h2>
            </div>
            <div className="space-y-6 print:space-y-2">
              {data.experience.map((exp, index) => (
                <div key={index} className="flex gap-3 print:gap-2">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full mt-1.5 print:w-2 print:h-2 print:mt-0.5" style={{ backgroundColor: accentColor }}></div>
                    <div className="w-0.5 flex-1 mt-2 print:w-px print:mt-1" style={{ backgroundColor: accentColor }}></div>
                  </div>
                  <div className="flex-1 pb-4 print:pb-2">
                    <div className="flex justify-between items-start mb-2 print:mb-1">
                      <div>
                        <h3 className="text-lg font-bold print:text-sm">{exp.position}</h3>
                        <p className="text-gray-700 font-medium print:text-xs">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-600 whitespace-nowrap ml-4 print:text-xs print:ml-2">
                        {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="text-gray-800 leading-relaxed whitespace-pre-line print:text-xs print:leading-normal">{exp.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.project && data.project.length > 0 && (
          <section className="mb-10 print:mb-3">
            <div className="flex items-center gap-3 mb-4 print:gap-2 print:mb-2">
              <FolderOpen size={20} style={{ color: accentColor }} className="print:w-4 print:h-4" />
              <div className="w-12 h-1 print:w-8 print:h-0.5" style={{ backgroundColor: accentColor }}></div>
              <h2 className="text-2xl font-bold print:text-base" style={{ color: accentColor }}>Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 print:gap-2">
              {data.project.map((proj, index) => (
                <div key={index} className="p-4 border-l-4 print:p-2 print:border-l-2" style={{ borderColor: accentColor }}>
                  <h3 className="text-lg font-bold mb-2 print:text-sm print:mb-1">{proj.name}</h3>
                  <p className="text-gray-800 leading-relaxed print:text-xs print:leading-normal">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-8 print:gap-4" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-4 print:gap-2 print:mb-2">
                <GraduationCap size={18} style={{ color: accentColor }} className="print:w-4 print:h-4" />
                <div className="w-8 h-1 print:w-6 print:h-0.5" style={{ backgroundColor: accentColor }}></div>
                <h2 className="text-xl font-bold print:text-base" style={{ color: accentColor }}>Education</h2>
              </div>
              <div className="space-y-3 print:space-y-2">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold print:text-sm">{edu.degree}</h3>
                    {edu.field && <p className="text-gray-700 print:text-xs">{edu.field}</p>}
                    <p className="text-gray-700 print:text-xs">{edu.institution}</p>
                    <p className="text-sm text-gray-600 print:text-xs">{formatDate(edu.graduation_date)}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-4 print:gap-2 print:mb-2">
                <div className="w-8 h-1 print:w-6 print:h-0.5" style={{ backgroundColor: accentColor }}></div>
                <h2 className="text-xl font-bold print:text-base" style={{ color: accentColor }}>Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2 print:gap-2">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full border-2 print:px-2.5 print:py-1 print:text-xs print:border"
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
