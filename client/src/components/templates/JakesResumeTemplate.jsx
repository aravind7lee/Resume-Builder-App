import { Mail, Phone, Linkedin, Globe } from "lucide-react";

const JakesResumeTemplate = ({ data, accentColor = '#3B82F6' }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="max-w-[8.5in] mx-auto bg-white text-black font-serif p-4 sm:p-6 md:p-8 leading-tight">
      {/* Header */}
      <header className="text-center mb-3 sm:mb-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <div className="text-[10px] sm:text-xs flex justify-center gap-2 sm:gap-3 flex-wrap items-center">
          {data.personal_info?.phone && (
            <span className="flex items-center gap-1">
              <Phone size={10} className="sm:w-3 sm:h-3" />
              {data.personal_info.phone}
            </span>
          )}
          {data.personal_info?.email && (
            <span className="flex items-center gap-1">
              <Mail size={10} className="sm:w-3 sm:h-3" />
              {data.personal_info.email}
            </span>
          )}
          {data.personal_info?.linkedin && (
            <span className="flex items-center gap-1">
              <Linkedin size={10} className="sm:w-3 sm:h-3" />
              {data.personal_info.linkedin.replace("https://", "").replace("http://", "")}
            </span>
          )}
          {data.personal_info?.website && (
            <span className="flex items-center gap-1">
              <Globe size={10} className="sm:w-3 sm:h-3" />
              {data.personal_info.website.replace("https://", "").replace("http://", "")}
            </span>
          )}
        </div>
      </header>

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-2 sm:mb-3">
          <h2 className="text-xs sm:text-sm font-bold mb-1 border-b" style={{ borderColor: accentColor }}>Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-1.5 sm:mb-2">
              <div className="flex flex-col sm:flex-row sm:justify-between text-[10px] sm:text-xs gap-0.5">
                <div>
                  <span className="font-bold">{edu.institution}</span>
                  {edu.location && <span className="italic"> {edu.location}</span>}
                </div>
                <span className="italic">{formatDate(edu.graduation_date)}</span>
              </div>
              <div className="text-[10px] sm:text-xs italic">
                {edu.degree} {edu.field && `in ${edu.field}`}
                {edu.gpa && `; GPA: ${edu.gpa}`}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-2 sm:mb-3">
          <h2 className="text-xs sm:text-sm font-bold mb-1 border-b" style={{ borderColor: accentColor }}>Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-1.5 sm:mb-2">
              <div className="flex flex-col sm:flex-row sm:justify-between text-[10px] sm:text-xs gap-0.5">
                <div>
                  <span className="font-bold">{exp.company}</span>
                  {exp.location && <span className="italic"> {exp.location}</span>}
                </div>
                <span className="italic">
                  {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                </span>
              </div>
              <div className="text-[10px] sm:text-xs italic mb-1">{exp.position}</div>
              {exp.description && (
                <ul className="list-disc ml-3 sm:ml-4 text-[10px] sm:text-xs space-y-0.5">
                  {exp.description.split("\n").filter(line => line.trim()).map((line, i) => (
                    <li key={i}>{line.trim()}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {data.project && data.project.length > 0 && (
        <section className="mb-2 sm:mb-3">
          <h2 className="text-xs sm:text-sm font-bold mb-1 border-b" style={{ borderColor: accentColor }}>Projects</h2>
          {data.project.map((proj, index) => (
            <div key={index} className="mb-1.5 sm:mb-2">
              <div className="text-[10px] sm:text-xs">
                <span className="font-bold">{proj.name}</span>
                {proj.technologies && <span className="italic"> | {proj.technologies}</span>}
              </div>
              {proj.description && (
                <ul className="list-disc ml-3 sm:ml-4 text-[10px] sm:text-xs space-y-0.5">
                  {proj.description.split("\n").filter(line => line.trim()).map((line, i) => (
                    <li key={i}>{line.trim()}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Technical Skills */}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-2 sm:mb-3">
          <h2 className="text-xs sm:text-sm font-bold mb-1 border-b" style={{ borderColor: accentColor }}>Technical Skills</h2>
          <div className="text-[10px] sm:text-xs">
            <span className="font-bold">Languages: </span>
            <span>{data.skills.join(", ")}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default JakesResumeTemplate;
