import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ClassicTemplate = ({ data, accentColor = '#3B82F6' }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-[8.5in] mx-auto p-8 bg-white text-gray-800 leading-normal">
            {/* Header */}
            <header className="text-center mb-6 pb-4 border-b-2" style={{ borderColor: accentColor }}>
                <h1 className="text-2xl font-bold mb-3 tracking-wide" style={{ color: accentColor }}>
                    {data.personal_info?.full_name || "Your Name"}
                </h1>

                <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-700">
                    {data.personal_info?.email && (
                        <div className="flex items-center gap-1">
                            <Mail className="size-4" />
                            <span>{data.personal_info.email}</span>
                        </div>
                    )}
                    {data.personal_info?.phone && (
                        <div className="flex items-center gap-1">
                            <Phone className="size-4" />
                            <span>{data.personal_info.phone}</span>
                        </div>
                    )}
                    {data.personal_info?.location && (
                        <div className="flex items-center gap-1">
                            <MapPin className="size-4" />
                            <span>{data.personal_info.location}</span>
                        </div>
                    )}
                    {data.personal_info?.linkedin && (
                        <div className="flex items-center gap-1">
                            <Linkedin className="size-4" />
                            <span className="break-all">{data.personal_info.linkedin}</span>
                        </div>
                    )}
                    {data.personal_info?.website && (
                        <div className="flex items-center gap-1">
                            <Globe className="size-4" />
                            <span className="break-all">{data.personal_info.website}</span>
                        </div>
                    )}
                </div>
            </header>

            {/* Professional Summary */}
            {data.professional_summary && (
                <section className="mb-5">
                    <h2 className="text-base font-bold mb-2 uppercase tracking-wide" style={{ color: accentColor }}>
                        Professional Summary
                    </h2>
                    <p className="text-sm text-gray-800 leading-relaxed">{data.professional_summary}</p>
                </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
                <section className="mb-5">
                    <h2 className="text-base font-bold mb-2 uppercase tracking-wide" style={{ color: accentColor }}>
                        Professional Experience
                    </h2>

                    <div className="space-y-3">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="mb-3">
                                <div className="flex justify-between items-start mb-1">
                                    <div className="flex-1">
                                        <h3 className="text-sm font-bold text-gray-900">{exp.position}</h3>
                                        <p className="text-sm text-gray-700 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-right text-xs text-gray-600 ml-4">
                                        <p className="whitespace-nowrap">{formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}</p>
                                    </div>
                                </div>
                                {exp.description && (
                                    <div className="text-xs text-gray-700 leading-relaxed whitespace-pre-line mt-1">
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
                    <h2 className="text-base font-bold mb-2 uppercase tracking-wide" style={{ color: accentColor }}>
                        Projects
                    </h2>

                    <div className="space-y-2">
                        {data.project.map((proj, index) => (
                            <div key={index} className="mb-2">
                                <h3 className="text-sm font-bold text-gray-800">{proj.name}</h3>
                                <p className="text-xs text-gray-700 leading-relaxed mt-1">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {data.education && data.education.length > 0 && (
                <section className="mb-5">
                    <h2 className="text-base font-bold mb-2 uppercase tracking-wide" style={{ color: accentColor }}>
                        Education
                    </h2>

                    <div className="space-y-2">
                        {data.education.map((edu, index) => (
                            <div key={index} className="flex justify-between items-start mb-2">
                                <div className="flex-1">
                                    <h3 className="text-sm font-bold text-gray-900">
                                        {edu.degree} {edu.field && `in ${edu.field}`}
                                    </h3>
                                    <p className="text-sm text-gray-700">{edu.institution}</p>
                                    {edu.gpa && <p className="text-xs text-gray-600 mt-0.5">GPA: {edu.gpa}</p>}
                                </div>
                                <div className="text-xs text-gray-600 ml-4">
                                    <p className="whitespace-nowrap">{formatDate(edu.graduation_date)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
                <section className="mb-4">
                    <h2 className="text-base font-bold mb-2 uppercase tracking-wide" style={{ color: accentColor }}>
                        Skills
                    </h2>

                    <div className="flex gap-2 flex-wrap">
                        {data.skills.map((skill, index) => (
                            <span key={index} className="text-xs text-gray-700">
                                {index > 0 && "• "}{skill}
                            </span>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

export default ClassicTemplate;