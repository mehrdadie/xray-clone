import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — CRM Integration, Automation & Dashboard Results | DataLift",
  description:
    "Real case studies showing how DataLift connected CRM, marketing, payment, and education systems for businesses worldwide. See hours saved, errors eliminated, and better decisions through data integration, workflow automation, and real-time dashboards.",
  keywords: [
    "CRM integration case studies",
    "Salesforce automation results",
    "business automation case studies",
    "data integration examples",
    "workflow automation results",
    "real-time dashboard case studies",
    "Chargebee integration",
    "GoHighLevel automation",
    "n8n workflow automation",
    "system integration case studies",
    "marketing automation ROI",
    "business dashboard results",
  ],
  openGraph: {
    title: "Case Studies — CRM Integration, Automation & Dashboard Results | DataLift",
    description:
      "See how DataLift connected disconnected systems and automated data flow for businesses worldwide. Hours saved, errors eliminated, better decisions.",
    type: "website",
    url: "https://xray-clone.vercel.app/case-studies",
  },
  alternates: {
    canonical: "https://xray-clone.vercel.app/case-studies",
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies — DataLift",
    description:
      "Real results from businesses DataLift helped connect systems, automate workflows, and build real-time dashboards.",
    url: "https://xray-clone.vercel.app/case-studies",
    about: [
      { "@type": "Thing", name: "CRM Integration" },
      { "@type": "Thing", name: "Workflow Automation" },
      { "@type": "Thing", name: "Business Dashboards" },
      { "@type": "Thing", name: "Data Integration" },
    ],
    mainEntity: {
      "@type": "Organization",
      name: "DataLift",
      url: "https://xray-clone.vercel.app",
      description:
        "DataLift connects CRM, sales, marketing, and payment systems for businesses. We build dashboards and automate workflows.",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
