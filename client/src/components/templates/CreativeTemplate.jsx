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
    <div className="max-w-4xl mx-auto bg-white text-gray-900">
      {/* Creative Header */}
      <header className="relative mb-8">
        <div className="absolute top-0 left-0 w-32 h-32 opacity-10" style={{ backgroundColor: accentColor }}></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10" style={{ backgroundColor: accentColor }}></div>
        
        <div className="relative p-12 text-center">
          <h1 className="text-5xl font-bold mb-3" style={{ color: accentColor }}>
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          {data.personal_info?.profession && (
            <p className="text-xl text-gray-600 mb-4">{data.personal_info.profession}</p>
          )}
          <div className="flex justify-center gap-4 text-sm text-gray-700 flex-wrap items-center">
            {data.personal_info?.email && <span className="flex items-center gap-1"><Mail size={14} />{data.personal_info.email}</span>}
            {data.personal_info?.phone && <span>•</span>}
            {data.personal_info?.phone && <span className="flex items-center gap-1"><Phone size={14} />{data.personal_info.phone}</span>}
            {data.personal_info?.location && <span>•</span>}
            {data.personal_info?.location && <span className="flex items-center gap-1"><MapPin size={14} />{data.personal_info.location}</span>}
          </div>
        </div>
      </header>

      <div className="px-12 pb-12">
        {/* About Me */}
        {data.professional_summary && (
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Award size={20} style={{ color: accentColor }} />
              <div className="w-12 h-1" style={{ backgroundColor: accentColor }}></div>
              <h2 className="text-2xl font-bold" style={{ color: accentColor }}>About Me</h2>
            </div>
            <p className="text-gray-800 leading-relaxed pl-15">{data.professional_summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase size={20} style={{ color: accentColor }} />
              <div className="w-12 h-1" style={{ backgroundColor: accentColor }}></div>
              <h2 className="text-2xl font-bold" style={{ color: accentColor }}>Experience</h2>
            </div>
            <div className="space-y-6 pl-15">
              {data.experience.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-15 top-2 w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }}></div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold">{exp.position}</h3>
                      <p className="text-gray-700 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-600 whitespace-nowrap ml-4">
                      {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-gray-800 leading-relaxed whitespace-pre-line">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.project && data.project.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FolderOpen size={20} style={{ color: accentColor }} />
              <div className="w-12 h-1" style={{ backgroundColor: accentColor }}></div>
              <h2 className="text-2xl font-bold" style={{ color: accentColor }}>Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 pl-15">
              {data.project.map((proj, index) => (
                <div key={index} className="p-4 border-l-4" style={{ borderColor: accentColor }}>
                  <h3 className="text-lg font-bold mb-2">{proj.name}</h3>
                  <p className="text-gray-800 leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-8">
          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap size={18} style={{ color: accentColor }} />
                <div className="w-8 h-1" style={{ backgroundColor: accentColor }}></div>
                <h2 className="text-xl font-bold" style={{ color: accentColor }}>Education</h2>
              </div>
              <div className="space-y-3">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold">{edu.degree}</h3>
                    {edu.field && <p className="text-gray-700">{edu.field}</p>}
                    <p className="text-gray-700">{edu.institution}</p>
                    <p className="text-sm text-gray-600">{formatDate(edu.graduation_date)}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1" style={{ backgroundColor: accentColor }}></div>
                <h2 className="text-xl font-bold" style={{ color: accentColor }}>Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full border-2"
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
