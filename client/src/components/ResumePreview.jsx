import React from "react";
import ClassicTemplate from "../assets/templates/ClassicTemplate";
import ModernTemplate from "../assets/templates/ModernTemplate";
import MinimalTemplate from "../assets/templates/MinimalTemplate";
import MinimalImageTemplate from "../assets/templates/MinimalImageTemplate";
import JakesResumeTemplate from "./templates/JakesResumeTemplate";
import ExecutiveTemplate from "./templates/ExecutiveTemplate";
import TwoColumnTemplate from "./templates/TwoColumnTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";
import ProfessionalTemplate from "./templates/ProfessionalTemplate";
import CompactTemplate from "./templates/CompactTemplate";
import TimelineTemplate from "./templates/TimelineTemplate";
import ElegantTemplate from "./templates/ElegantTemplate";

const ResumePreview = ({ data, template, accentColor, classes = "" }) => {
  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={data} accentColor={accentColor} />;
      case "minimal":
        return <MinimalTemplate data={data} accentColor={accentColor} />;
      case "minimal-image":
        return <MinimalImageTemplate data={data} accentColor={accentColor} />;
      case "jakes-resume":
        return <JakesResumeTemplate data={data} accentColor={accentColor} />;
      case "executive":
        return <ExecutiveTemplate data={data} accentColor={accentColor} />;
      case "two-column":
        return <TwoColumnTemplate data={data} accentColor={accentColor} />;
      case "creative":
        return <CreativeTemplate data={data} accentColor={accentColor} />;
      case "professional":
        return <ProfessionalTemplate data={data} accentColor={accentColor} />;
      case "compact":
        return <CompactTemplate data={data} accentColor={accentColor} />;
      case "timeline":
        return <TimelineTemplate data={data} accentColor={accentColor} />;
      case "elegant":
        return <ElegantTemplate data={data} accentColor={accentColor} />;
      default:
        return <ClassicTemplate data={data} accentColor={accentColor} />;
    }
  };

  return (
    <div className="w-full bg-gray-100">
      <div
        id="resume-preview"
        className={
          "border border-gray-200 print:shadow-none print:border-none " +
          classes
        }
      >
        {renderTemplate()}
      </div>

      <style>
        {`
          @page {
            size: letter;
            margin: 0;
          }
          
          @media print {
            /* Remove all browser headers, footers, URL, date, page numbers */
            @page {
              size: A4;
              margin: 0mm;
            }
            
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            
            html, body {
              width: 210mm;
              height: 297mm;
              margin: 0 !important;
              padding: 0 !important;
              overflow: hidden;
              background: white;
            }
            
            /* Hide everything except resume */
            body * {
              visibility: hidden;
            }
            
            #resume-preview,
            #resume-preview * {
              visibility: visible;
            }
            
            /* Full page resume layout */
            #resume-preview {
              position: absolute;
              left: 0;
              top: 0;
              width: 210mm;
              height: 297mm;
              margin: 0 !important;
              padding: 0 !important;
              box-shadow: none !important;
              border: none !important;
              background: white !important;
              overflow: hidden;
            }
            
            /* Preserve grid layouts */
            .grid {
              display: grid !important;
            }
            
            /* Preserve flex layouts */
            .flex {
              display: flex !important;
            }
            
            /* Ensure two-column layouts work */
            [style*="grid-template-columns"] {
              display: grid !important;
            }
            
            /* Preserve background colors */
            [style*="background-color"],
            [style*="backgroundColor"] {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            /* Preserve border colors */
            [style*="border-color"],
            [style*="borderColor"] {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            /* Prevent page breaks */
            #resume-preview > div {
              page-break-inside: avoid;
              page-break-after: avoid;
              page-break-before: avoid;
            }
            
            /* ATS-Friendly Typography */
            #resume-preview h1,
            #resume-preview h2,
            #resume-preview h3,
            #resume-preview h4,
            #resume-preview h5,
            #resume-preview h6 {
              page-break-after: avoid;
              break-after: avoid;
              orphans: 3;
              widows: 3;
            }
            
            #resume-preview p,
            #resume-preview li,
            #resume-preview div {
              orphans: 2;
              widows: 2;
            }
            
            #resume-preview section {
              page-break-inside: avoid;
              break-inside: avoid;
            }
            
            /* Ensure images render */
            #resume-preview img {
              max-width: 100%;
              height: auto;
              page-break-inside: avoid;
            }
            
            /* Preserve rounded corners */
            .rounded-full,
            .rounded,
            .rounded-lg,
            .rounded-md {
              border-radius: inherit !important;
            }
            
            /* Clean list formatting */
            #resume-preview ul,
            #resume-preview ol {
              margin: 0.25rem 0;
              padding-left: 1.2em;
            }
            
            #resume-preview li {
              margin-bottom: 0.15rem;
            }
            
            /* Proper link formatting for ATS */
            #resume-preview a {
              color: inherit;
              text-decoration: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ResumePreview;
