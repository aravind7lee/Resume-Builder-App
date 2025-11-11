import { Mail, Phone, MapPin } from "lucide-react";

const MinimalImageTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800 print:text-[5px]">
      <div className="grid grid-cols-3 print:grid-cols-3">
        <div className="col-span-1 py-10 print:py-0.5">
          {/* Image */}
          {data.personal_info?.image &&
          typeof data.personal_info.image === "string" ? (
            <div className="mb-6 print:mb-0.5">
              <img
                src={data.personal_info.image}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full mx-auto print:w-16 print:h-16 print:rounded-full"
                style={{ background: accentColor + "70", borderRadius: "50%" }}
              />
            </div>
          ) : data.personal_info?.image &&
            typeof data.personal_info.image === "object" ? (
            <div className="mb-6 print:mb-0.5">
              <img
                src={URL.createObjectURL(data.personal_info.image)}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full mx-auto print:w-16 print:h-16 print:rounded-full"
                style={{ borderRadius: "50%" }}
              />
            </div>
          ) : null}
        </div>

        {/* Name + Title */}
        <div className="col-span-2 flex flex-col justify-center py-10 px-8 print:py-0.5 print:px-1">
          <h1 className="text-4xl font-bold text-zinc-700 tracking-widest print:text-[8px]">
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <p className="uppercase text-zinc-600 font-medium text-sm tracking-widest print:text-[4px]">
            {data?.personal_info?.profession || "Profession"}
          </p>
        </div>

        {/* Left Sidebar */}
        <aside className="col-span-1 border-r border-zinc-400 p-6 pt-0 print:p-0.5 print:pt-0">
          {/* Contact */}
          <section className="mb-8 print:mb-0.5">
            <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3 print:text-[5px] print:mb-0">
              CONTACT
            </h2>
            <div className="space-y-2 text-sm print:space-y-0 print:text-[4px]">
              {data.personal_info?.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={14} style={{ color: accentColor }} />
                  <span>{data.personal_info.phone}</span>
                </div>
              )}
              {data.personal_info?.email && (
                <div className="flex items-center gap-2">
                  <Mail size={14} style={{ color: accentColor }} />
                  <span>{data.personal_info.email}</span>
                </div>
              )}
              {data.personal_info?.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={14} style={{ color: accentColor }} />
                  <span>{data.personal_info.location}</span>
                </div>
              )}
            </div>
          </section>

          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section className="mb-8 print:mb-0.5">
              <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3 print:text-[5px] print:mb-0">
                EDUCATION
              </h2>
              <div className="space-y-4 text-sm print:space-y-0 print:text-[4px]">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <p className="font-semibold uppercase print:text-[4px]">{edu.degree}</p>
                    <p className="text-zinc-600 print:text-[3px]">{edu.institution}</p>
                    <p className="text-xs text-zinc-500 print:text-[3px]">
                      {formatDate(edu.graduation_date)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3 print:text-[5px] print:mb-0">
                SKILLS
              </h2>
              <ul className="space-y-1 text-sm print:space-y-0 print:text-[4px]">
                {data.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </section>
          )}
        </aside>

        {/* Right Content */}
        <main className="col-span-2 p-8 pt-0 print:p-1 print:pt-0">
          {/* Summary */}
          {data.professional_summary && (
            <section className="mb-8 print:mb-0.5">
              <h2
                className="text-sm font-semibold tracking-widest mb-3 print:text-[5px] print:mb-0"
                style={{ color: accentColor }}
              >
                SUMMARY
              </h2>
              <p className="text-zinc-700 leading-relaxed print:text-[4px] print:leading-tight">
                {data.professional_summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <section>
              <h2
                className="text-sm font-semibold tracking-widest mb-4 print:text-[5px] print:mb-0"
                style={{ color: accentColor }}
              >
                EXPERIENCE
              </h2>
              <div className="space-y-6 mb-8 print:space-y-0 print:mb-0.5">
                {data.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-zinc-900 print:text-[5px]">
                        {exp.position}
                      </h3>
                      <span className="text-xs text-zinc-500 print:text-[3px]">
                        {formatDate(exp.start_date)} -{" "}
                        {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>
                    <p className="text-sm mb-2 print:text-[4px] print:mb-0" style={{ color: accentColor }}>
                      {exp.company}
                    </p>
                    {exp.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700 leading-relaxed space-y-1 print:text-[4px] print:leading-tight print:space-y-0">
                        {exp.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.project && data.project.length > 0 && (
            <section>
              <h2
                className="text-sm uppercase tracking-widest font-semibold print:text-[5px] print:mb-0"
                style={{ color: accentColor }}
              >
                PROJECTS
              </h2>
              <div className="space-y-4 print:space-y-0">
                {data.project.map((project, index) => (
                  <div key={index}>
                    <h3 className="text-md font-medium text-zinc-800 mt-3 print:text-[5px] print:mt-0">
                      {project.name}
                    </h3>
                    <p className="text-sm mb-1 print:text-[4px] print:mb-0" style={{ color: accentColor }}>
                      {project.type}
                    </p>
                    {project.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1 print:text-[4px] print:leading-tight print:space-y-0">
                        {project.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default MinimalImageTemplate;
