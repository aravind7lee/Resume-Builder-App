import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

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
    <div className="max-w-5xl mx-auto bg-white text-gray-900 flex flex-col md:flex-row">
      {/* Left Sidebar */}
      <aside className="w-full md:w-1/3 p-4 sm:p-6 md:p-8 text-white" style={{ backgroundColor: accentColor }}>
        {/* Profile Image */}
        {data.personal_info?.image && (
          <div className="mb-6">
            <img
              src={typeof data.personal_info.image === "string" ? data.personal_info.image : URL.createObjectURL(data.personal_info.image)}
              alt="Profile"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mx-auto object-cover border-4 border-white"
            />
          </div>
        )}

        {/* Contact */}
        <section className="mb-6 sm:mb-7 md:mb-8">
          <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 pb-2 border-b-2 border-white">Contact</h2>
          <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
            {data.personal_info?.phone && (
              <div className="flex items-start gap-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="opacity-90">{data.personal_info.phone}</p>
                </div>
              </div>
            )}
            {data.personal_info?.email && (
              <div className="flex items-start gap-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="opacity-90 break-words">{data.personal_info.email}</p>
                </div>
              </div>
            )}
            {data.personal_info?.location && (
              <div className="flex items-start gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="opacity-90">{data.personal_info.location}</p>
                </div>
              </div>
            )}
            {data.personal_info?.linkedin && (
              <div className="flex items-start gap-2">
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="opacity-90 break-words text-xs">{data.personal_info.linkedin.replace("https://", "")}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <section className="mb-6 sm:mb-7 md:mb-8">
            <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 pb-2 border-b-2 border-white">Skills</h2>
            <div className="space-y-1.5 sm:space-y-2">
              {data.skills.map((skill, index) => (
                <div key={index} className="text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <section>
            <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 pb-2 border-b-2 border-white">Education</h2>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <p className="font-semibold">{edu.degree}</p>
                  {edu.field && <p className="opacity-90">{edu.field}</p>}
                  <p className="opacity-90">{edu.institution}</p>
                  <p className="text-xs opacity-75">{formatDate(edu.graduation_date)}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </aside>

      {/* Right Content */}
      <main className="w-full md:w-2/3 p-4 sm:p-6 md:p-8">
        {/* Name */}
        <header className="mb-6 sm:mb-7 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: accentColor }}>
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          {data.personal_info?.profession && (
            <p className="text-base sm:text-lg md:text-xl text-gray-600">{data.personal_info.profession}</p>
          )}
        </header>

        {/* Professional Summary */}
        {data.professional_summary && (
          <section className="mb-6 sm:mb-7 md:mb-8">
            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: accentColor }}>Profile</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed">{data.professional_summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-6 sm:mb-7 md:mb-8">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: accentColor }}>Experience</h2>
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                    <h3 className="text-base sm:text-lg font-semibold">{exp.position}</h3>
                    <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                      {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 font-medium mb-2">{exp.company}</p>
                  {exp.description && (
                    <p className="text-xs sm:text-sm text-gray-800 leading-relaxed whitespace-pre-line">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.project && data.project.length > 0 && (
          <section>
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: accentColor }}>Projects</h2>
            <div className="space-y-3 sm:space-y-4">
              {data.project.map((proj, index) => (
                <div key={index}>
                  <h3 className="text-base sm:text-lg font-semibold">{proj.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">{proj.description}</p>
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
