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
            /* Remove browser headers and footers */
            @page {
              size: letter;
              margin: 0;
            }
            
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            
            html, body {
              width: 8.5in;
              height: 11in;
              margin: 0 !important;
              padding: 0 !important;
              overflow: visible;
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
              width: 8.5in;
              height: 11in;
              margin: 0;
              padding: 0.5in;
              box-shadow: none !important;
              border: none !important;
              background: white !important;
              page-break-after: auto;
              overflow: hidden;
            }
            
            /* Remove extra spacing */
            #resume-preview > * {
              margin-top: 0 !important;
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
              margin-top: 0.5rem;
              margin-bottom: 0.25rem;
            }
            
            #resume-preview p,
            #resume-preview li,
            #resume-preview div {
              orphans: 2;
              widows: 2;
            }
            
            /* Prevent awkward breaks */
            #resume-preview section {
              page-break-inside: avoid;
              break-inside: avoid;
            }
            
            /* Ensure proper spacing */
            #resume-preview * {
              box-sizing: border-box;
            }
            
            /* Remove shadows and borders for clean PDF */
            #resume-preview *:not(hr) {
              box-shadow: none !important;
              text-shadow: none !important;
            }
            
            /* Ensure images are properly sized */
            #resume-preview img {
              max-width: 100%;
              height: auto;
              page-break-inside: avoid;
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
            
            /* Optimize spacing */
            #resume-preview .flex {
              gap: 0.25rem;
            }
            
            /* Compact spacing for professional look */
            #resume-preview p {
              margin: 0.15rem 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ResumePreview;
