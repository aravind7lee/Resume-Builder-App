
const MinimalTemplate = ({ data, accentColor = '#3B82F6' }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-[8.5in] mx-auto p-8 bg-white text-gray-900">
            {/* Header */}
            <header className="mb-6">
                <h1 className="text-2xl font-bold mb-3 tracking-wide">
                    {data.personal_info?.full_name || "Your Name"}
                </h1>

                <div className="flex flex-wrap gap-3 text-xs text-gray-700">
                    {data.personal_info?.email && <span>{data.personal_info.email}</span>}
                    {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
                    {data.personal_info?.location && <span>{data.personal_info.location}</span>}
                    {data.personal_info?.linkedin && (
                        <span className="break-all">{data.personal_info.linkedin}</span>
                    )}
                    {data.personal_info?.website && (
                        <span className="break-all">{data.personal_info.website}</span>
                    )}
                </div>
            </header>

            {/* Professional Summary */}
            {data.professional_summary && (
                <section className="mb-5">
                    <p className="text-sm text-gray-700 leading-relaxed">
                        {data.professional_summary}
                    </p>
                </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
                <section className="mb-5">
                    <h2 className="text-base uppercase tracking-wide mb-2 font-bold" style={{ color: accentColor }}>
                        Experience
                    </h2>

                    <div className="space-y-3">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="mb-3">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-sm font-bold flex-1">{exp.position}</h3>
                                    <span className="text-xs text-gray-600 ml-4 whitespace-nowrap">
                                        {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-700 mb-1">{exp.company}</p>
                                {exp.description && (
                                    <div className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">
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
                <section className="mb-5">
                    <h2 className="text-base uppercase tracking-wide mb-2 font-bold" style={{ color: accentColor }}>
                        Projects
                    </h2>

                    <div className="space-y-2">
                        {data.project.map((proj, index) => (
                            <div key={index} className="mb-2">
                                <h3 className="text-sm font-bold">{proj.name}</h3>
                                <p className="text-xs text-gray-700 leading-relaxed mt-1">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {data.education && data.education.length > 0 && (
                <section className="mb-5">
                    <h2 className="text-base uppercase tracking-wide mb-2 font-bold" style={{ color: accentColor }}>
                        Education
                    </h2>

                    <div className="space-y-2">
                        {data.education.map((edu, index) => (
                            <div key={index} className="flex justify-between items-start mb-2">
                                <div className="flex-1">
                                    <h3 className="text-sm font-bold">
                                        {edu.degree} {edu.field && `in ${edu.field}`}
                                    </h3>
                                    <p className="text-sm text-gray-700">{edu.institution}</p>
                                    {edu.gpa && <p className="text-xs text-gray-600 mt-0.5">GPA: {edu.gpa}</p>}
                                </div>
                                <span className="text-xs text-gray-600 ml-4 whitespace-nowrap">
                                    {formatDate(edu.graduation_date)}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
                <section className="mb-4">
                    <h2 className="text-base uppercase tracking-wide mb-2 font-bold" style={{ color: accentColor }}>
                        Skills
                    </h2>

                    <div className="text-xs text-gray-700">
                        {data.skills.join(" • ")}
                    </div>
                </section>
            )}
        </div>
    );
}

export default MinimalTemplate;