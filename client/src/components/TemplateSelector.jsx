import { Check, Layout } from "lucide-react";
import React, { useState } from "react";

const TemplateSelector = ({ selectedTemplate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const templates = [
    {
      id: "jakes-resume",
      name: "Jake's Resume",
      badge: "Most Popular",
      preview: "Most used ATS-friendly template. Perfect for job applications.",
    },
    {
      id: "classic",
      name: "Classic",
      badge: "Traditional",
      preview: "Timeless professional format. Ideal for conservative industries.",
    },
    {
      id: "modern",
      name: "Modern",
      badge: "Trending",
      preview: "Contemporary design with color accents. Great for tech roles.",
    },
    {
      id: "professional",
      name: "Professional",
      badge: "Corporate",
      preview: "Clean corporate style. Best for business professionals.",
    },
    {
      id: "executive",
      name: "Executive",
      badge: "Premium",
      preview: "Senior-level design. Perfect for leadership positions.",
    },
    {
      id: "minimal",
      name: "Minimal",
      badge: "Simple",
      preview: "Ultra-clean layout. Focuses attention on your content.",
    },
    {
      id: "two-column",
      name: "Two Column",
      badge: "Modern",
      preview: "Sidebar layout with skills highlight. Great for visual appeal.",
    },
    {
      id: "compact",
      name: "Compact",
      badge: "Space-Efficient",
      preview: "Fits more content. Ideal for experienced professionals.",
    },
    {
      id: "elegant",
      name: "Elegant",
      badge: "Sophisticated",
      preview: "Refined typography. Perfect for creative professionals.",
    },
    {
      id: "timeline",
      name: "Timeline",
      badge: "Visual",
      preview: "Career progression display. Shows growth over time.",
    },
    {
      id: "creative",
      name: "Creative",
      badge: "Unique",
      preview: "Distinctive design elements. Best for creative fields.",
    },
    {
      id: "minimal-image",
      name: "Minimal Image",
      badge: "Photo-Based",
      preview: "Includes profile photo. Suitable for international markets.",
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-xs sm:text-sm text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg"
      >
        <Layout className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 
        <span className="max-sm:hidden">Template</span>
      </button>
      {isOpen && (
        <div className="fixed sm:absolute top-0 sm:top-full left-0 sm:left-auto right-0 sm:right-auto w-full sm:w-80 md:w-96 h-full sm:h-auto sm:max-h-[70vh] overflow-y-auto p-4 sm:p-3 sm:mt-2 space-y-2.5 sm:space-y-3 z-50 bg-white sm:rounded-md border-0 sm:border border-gray-200 sm:shadow-lg">
          <div className="sm:hidden sticky top-0 bg-white pb-3 mb-2 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-800">Choose Template</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => {
                onChange(template.id);
                setIsOpen(false);
              }}
              className={`relative p-3 sm:p-3 border rounded-lg cursor-pointer transition-all active:scale-[0.98] ${
                selectedTemplate === template.id
                  ? "border-blue-400 bg-blue-50 sm:bg-blue-100"
                  : "border-gray-300 hover:border-gray-400 hover:bg-gray-50 sm:hover:bg-gray-100"
              }`}
            >
              {selectedTemplate === template.id && (
                <div className="absolute top-2 sm:top-2 right-2">
                  <div className="w-5 h-5 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center shadow-sm">
                    <Check className="w-3 h-3 sm:w-3 sm:h-3 text-white" />
                  </div>
                </div>
              )}

              <div className="space-y-1.5 sm:space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-semibold sm:font-medium text-sm sm:text-base text-gray-800">{template.name}</h4>
                  <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 bg-blue-500 text-white rounded-full font-medium whitespace-nowrap">
                    {template.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-xs text-gray-600 leading-relaxed pr-6 sm:pr-0">
                  {template.preview}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
