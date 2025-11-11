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
        <div className="max-w-[8.5in] mx-auto p-6 bg-white text-gray-800 leading-tight print:min-h-[11in] print:p-10 print:leading-normal">
            {/* Header */}
            <header className="text-center mb-4 pb-3 border-b-2 print:mb-7 print:pb-5" style={{ borderColor: accentColor }}>
                <h1 className="text-xl font-bold mb-2 tracking-wide print:text-2xl print:mb-2" style={{ color: accentColor }}>
                    {data.personal_info?.full_name || "Your Name"}
                </h1>

                <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-700 print:gap-4 print:text-sm">
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
                <section className="mb-3 print:mb-5">
                    <h2 className="text-sm font-bold mb-1.5 uppercase tracking-wide print:text-base print:mb-2" style={{ color: accentColor }}>
                        Professional Summary
                    </h2>
                    <p className="text-xs text-gray-800 leading-snug print:text-sm print:leading-normal">{data.professional_summary}</p>
                </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
                <section className="mb-3 print:mb-5">
                    <h2 className="text-sm font-bold mb-1.5 uppercase tracking-wide print:text-base print:mb-3" style={{ color: accentColor }}>
                        Professional Experience
                    </h2>

                    <div className="space-y-2 print:space-y-3">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="mb-2 print:mb-3">
                                <div className="flex justify-between items-start mb-0.5 print:mb-1.5">
                                    <div className="flex-1">
                                        <h3 className="text-xs font-bold text-gray-900 print:text-sm">{exp.position}</h3>
                                        <p className="text-xs text-gray-700 font-medium print:text-xs">{exp.company}</p>
                                    </div>
                                    <div className="text-right text-[10px] text-gray-600 ml-4 print:text-xs">
                                        <p className="whitespace-nowrap">{formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}</p>
                                    </div>
                                </div>
                                {exp.description && (
                                    <div className="text-[10px] text-gray-700 leading-snug whitespace-pre-line mt-0.5 print:text-xs print:leading-normal">
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
                <section className="mb-3 print:mb-5">
                    <h2 className="text-sm font-bold mb-1.5 uppercase tracking-wide print:text-base print:mb-3" style={{ color: accentColor }}>
                        Projects
                    </h2>

                    <div className="space-y-1.5 print:space-y-3">
                        {data.project.map((proj, index) => (
                            <div key={index} className="mb-1.5 print:mb-2">
                                <h3 className="text-xs font-bold text-gray-800 print:text-sm">{proj.name}</h3>
                                <p className="text-[10px] text-gray-700 leading-snug mt-0.5 print:text-xs print:leading-normal">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {data.education && data.education.length > 0 && (
                <section className="mb-3 print:mb-5">
                    <h2 className="text-sm font-bold mb-1.5 uppercase tracking-wide print:text-base print:mb-3" style={{ color: accentColor }}>
                        Education
                    </h2>

                    <div className="space-y-1.5 print:space-y-3">
                        {data.education.map((edu, index) => (
                            <div key={index} className="flex justify-between items-start mb-1.5 print:mb-2">
                                <div className="flex-1">
                                    <h3 className="text-xs font-bold text-gray-900 print:text-sm">
                                        {edu.degree} {edu.field && `in ${edu.field}`}
                                    </h3>
                                    <p className="text-xs text-gray-700 print:text-xs">{edu.institution}</p>
                                    {edu.gpa && <p className="text-[10px] text-gray-600 mt-0.5 print:text-xs">GPA: {edu.gpa}</p>}
                                </div>
                                <div className="text-[10px] text-gray-600 ml-4 print:text-xs">
                                    <p className="whitespace-nowrap">{formatDate(edu.graduation_date)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
                <section className="mb-2 print:mb-5">
                    <h2 className="text-sm font-bold mb-1.5 uppercase tracking-wide print:text-base print:mb-3" style={{ color: accentColor }}>
                        Skills
                    </h2>

                    <div className="flex gap-1.5 flex-wrap print:gap-3">
                        {data.skills.map((skill, index) => (
                            <span key={index} className="text-[10px] text-gray-700 print:text-xs">
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