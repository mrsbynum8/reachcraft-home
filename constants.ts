import { NavItem, FAQItem, StepItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Our Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

export const EMAIL_CONTACT = "hello@reachcraft.com";

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How do I know if I'm ready for the full partnership?",
    answer: "You should be generating at least mid-six figures annually, ready to invest $25k-$45k monthly in growth, and prepared for a two-year commitment. Most importantly, you need to be coachable and ready to follow our proven process without second-guessing every recommendation."
  },
  {
    question: "What makes ReachCraft different from other agencies?",
    answer: "We're the anti-agency. While others focus on impressive credentials and industry buzzwords, we focus on family-like partnerships with radical transparency. Plus, we separate media spend from strategy fees—we succeed when you succeed. A novel concept in 2025, apparently."
  },
  {
    question: "Can I upgrade from a breakthrough to the full partnership?",
    answer: "Absolutely. Our breakthrough clients often become our best full partnership candidates because they've experienced our process firsthand and seen the results. No more wondering \"will this actually work?\""
  }
];

export const PROCESS_STEPS: StepItem[] = [
  {
    id: 'activate',
    number: '01',
    title: 'Activate',
    description: 'We start by auditing your current reality. No guessing. We dive into your financials, customer data, and current funnel performance to stop the bleeding and identify immediate leverage points.'
  },
  {
    id: 'diagnose',
    number: '02',
    title: 'Diagnose',
    description: 'We reconstruct your market positioning. We move you from a commodity provider to a category of one. This involves deep competitor analysis and crafting a narrative that your market cannot ignore.'
  },
  {
    id: 'build',
    number: '03',
    title: 'Build',
    description: 'We deploy the new infrastructure. High-converting assets, automated systems, and a content engine that operates without your daily input. This is where chaos turns into a machine.'
  },
  {
    id: 'optimize',
    number: '04',
    title: 'Optimize',
    description: 'We scale aggressively. With the foundation set, we pour fuel on the fire. Constant iteration, split testing, and expanding into new channels to dominate market share.'
  }
];

export const WHY_CARDS = [
  {
    title: "A True Partnership",
    description: "Our approach combines strategic insights with genuine care for your success. You'll always know what we're doing and why."
  },
  {
    title: "Results, Not Markup",
    description: "We separate media investment from strategy fees. This means we're focused on results that grow your bottom line, not our commissions."
  },
  {
    title: "Radical Transparency",
    description: "No more mysterious reports. We provide clear, concise updates that show real progress towards your goals."
  }
];
