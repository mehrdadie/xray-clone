export type BlogPost = {
  slug: string;
  title: string;
  tag: string;
  image: string;
  desc: string;
  body: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'connect-salesforce-marketing-tools',
    title: 'How to Connect Salesforce With Your Marketing Tools (Without a Developer)',
    tag: 'Integration',
    image: '/assets/blog-1.png',
    desc: 'A practical guide to syncing Salesforce with GoHighLevel, Mailchimp, and other marketing platforms — no code required.',
    body: 'If your sales team lives in Salesforce but your marketing team lives in Mailchimp, data tends to get stuck. The usual fix is hiring a developer. The easier fix is connecting the systems you already use with lightweight automation.\n\nStart with one workflow: when a lead is created in Salesforce, add them to the right Mailchimp list and update their status when they buy. That one flow removes duplicate data entry and gives marketing real visibility.\n\nTools like Zapier, Make, or n8n can do this without touching Salesforce metadata. The key is keeping the sync small, documented, and tested with sample records first.\n\nOnce that works, you can expand to lead scoring, event-triggered emails, and revenue reporting without rebuilding everything.',
  },
  {
    slug: 'crm-payments-should-talk',
    title: 'Why Your CRM and Payment System Should Talk to Each Other',
    tag: 'Automation',
    image: '/assets/blog-2.png',
    desc: 'Disconnected CRM and billing means lost revenue and wasted hours. Here is how to fix it with tools you already have.',
    body: 'Most UK businesses store customer data in one system and payment records in another. That sounds harmless until someone asks: “How many people paid but never got a welcome email?” or “Which campaigns actually produced revenue?”\n\nThe missing link is usually a simple sync: payment status → CRM, CRM customer type → billing notes, failed payment → support task. That removes the spreadsheet reconciliation that eats hours every week.\n\nFor property trainers, course providers, and subscription businesses, this also reduces churn. When billing and CRM agree, your team can act on the same truth instead of guessing.',
  },
  {
    slug: 'ai-dashboards-non-technical-teams',
    title: 'Building AI Dashboards for Non-Technical Teams',
    tag: 'AI',
    image: '/assets/blog-3.png',
    desc: 'How UK businesses use AI-powered dashboards to turn raw data from multiple systems into clear, actionable decisions.',
    body: 'A dashboard only helps if the person looking at it can answer a question in seconds. For non-technical teams, that means hiding the joins, filters, and API errors behind plain English summaries.\n\nThe best dashboards start with a question: “Which campaign drove bookings this week?” or “Who is at risk of churning this month?” Then the data is pulled automatically from CRM, payments, and marketing into one view.\n\nAI can summarise that view daily: trends, exceptions, and recommended actions. The team still needs to approve decisions, but the manual report-writing disappears.',
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs() {
  return blogPosts.map((post) => post.slug);
}
