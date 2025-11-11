import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ModernTemplate = ({ data, accentColor = '#3B82F6' }) => {
	const formatDate = (dateStr) => {
		if (!dateStr) return "";
		const [year, month] = dateStr.split("-");
		return new Date(year, month - 1).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short"
		});
	};

	return (
		<div className="max-w-[8.5in] mx-auto bg-white text-gray-800">
			{/* Header */}
			<header className="p-6 text-white" style={{ backgroundColor: accentColor }}>
				<h1 className="text-2xl font-bold mb-2">
					{data.personal_info?.full_name || "Your Name"}
				</h1>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
					{data.personal_info?.email && (
						<div className="flex items-center gap-2">
							<Mail className="size-4" />
							<span>{data.personal_info.email}</span>
						</div>
					)}
					{data.personal_info?.phone && (
						<div className="flex items-center gap-2">
							<Phone className="size-4" />
							<span>{data.personal_info.phone}</span>
						</div>
					)}
					{data.personal_info?.location && (
						<div className="flex items-center gap-2">
							<MapPin className="size-4" />
							<span>{data.personal_info.location}</span>
						</div>
					)}
					{data.personal_info?.linkedin && (
						<a target="_blank" href={data.personal_info?.linkedin} className="flex items-center gap-2">
							<Linkedin className="size-4" />
							<span className="break-all text-xs">{data.personal_info.linkedin.split("https://www.")[1] ? data.personal_info.linkedin.split("https://www.")[1] : data.personal_info.linkedin}</span>
						</a>
					)}
					{data.personal_info?.website && (
						<a target="_blank" href={data.personal_info?.website} className="flex items-center gap-2">
							<Globe className="size-4" />
							<span className="break-all text-xs">{data.personal_info.website.split("https://")[1] ? data.personal_info.website.split("https://")[1] : data.personal_info.website}</span>
						</a>
					)}
				</div>
			</header>

			<div className="p-6">
				{/* Professional Summary */}
				{data.professional_summary && (
					<section className="mb-5">
						<h2 className="text-base font-bold mb-2 pb-1 border-b border-gray-300 uppercase tracking-wide">
							Professional Summary
						</h2>
						<p className="text-sm text-gray-700 leading-relaxed">{data.professional_summary}</p>
					</section>
				)}

				{/* Experience */}
				{data.experience && data.experience.length > 0 && (
					<section className="mb-5">
						<h2 className="text-base font-bold mb-2 pb-1 border-b border-gray-300 uppercase tracking-wide">
							Experience
						</h2>

						<div className="space-y-3">
							{data.experience.map((exp, index) => (
								<div key={index} className="mb-3">
									<div className="flex justify-between items-start mb-1">
										<div className="flex-1">
											<h3 className="text-sm font-bold text-gray-900">{exp.position}</h3>
											<p className="text-sm font-medium text-gray-700">{exp.company}</p>
										</div>
										<div className="text-xs text-gray-600 ml-4">
											<span className="whitespace-nowrap">{formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}</span>
										</div>
									</div>
									{exp.description && (
										<div className="text-xs text-gray-700 leading-relaxed mt-1 whitespace-pre-line">
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
						<h2 className="text-base font-bold mb-2 pb-1 border-b border-gray-300 uppercase tracking-wide">
							Projects
						</h2>

						<div className="space-y-2">
							{data.project.map((p, index) => (
								<div key={index} className="mb-2">
									<h3 className="text-sm font-bold text-gray-900">{p.name}</h3>
									{p.description && (
										<p className="text-xs text-gray-700 leading-relaxed mt-1">{p.description}</p>
									)}
								</div>
							))}
						</div>
					</section>
				)}

				{/* Education */}
				{data.education && data.education.length > 0 && (
					<section className="mb-5">
						<h2 className="text-base font-bold mb-2 pb-1 border-b border-gray-300 uppercase tracking-wide">
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
										<span className="whitespace-nowrap">{formatDate(edu.graduation_date)}</span>
									</div>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Skills */}
				{data.skills && data.skills.length > 0 && (
					<section className="mb-4">
						<h2 className="text-base font-bold mb-2 pb-1 border-b border-gray-300 uppercase tracking-wide">
							Skills
						</h2>

						<div className="flex flex-wrap gap-1">
							{data.skills.map((skill, index) => (
								<span key={index} className="text-xs text-gray-700">
									{index > 0 && "• "}{skill}
								</span>
							))}
						</div>
					</section>
				)}
			</div>
		</div>
	);
}

export default ModernTemplate;