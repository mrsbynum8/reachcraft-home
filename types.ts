export interface NavItem {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StepItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface TrustedCompany {
  name: string;
  logoUrl?: string; // Optional URL, we might use text placeholders if no image
}
