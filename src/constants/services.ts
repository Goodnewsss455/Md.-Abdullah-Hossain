import { 
  Globe, 
  ShieldAlert, 
  Bug, 
  Zap, 
  Code2, 
  Cpu,
  type LucideIcon
} from 'lucide-react';

export interface ServiceProcess {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  lottieUrl: string;
  imageUrl: string;
  features: string[];
  process: ServiceProcess[];
  color: string;
  monthlyPrice: string;
  perProjectPrice: string;
  checkoutCode?: string;
}

export const SERVICES: Service[] = [
  {
    id: 'wordpress-dev',
    title: 'WordPress Web Development',
    shortDescription: 'Custom themes & plugins.',
    description: 'Custom WordPress themes and plugins tailored to your business needs.',
    fullDescription: 'We build high-performance, scalable, and secure WordPress websites. From custom theme development to complex plugin integrations, we ensure your site stands out with a cinematic user experience.',
    icon: Globe,
    lottieUrl: 'https://assets9.lottiefiles.com/packages/lf20_w51pcehl.json',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    features: ['Custom Theme Design', 'Plugin Development', 'E-commerce Integration', 'SEO Optimized'],
    process: [
      { title: 'Discovery', description: 'Understanding your brand and business goals.' },
      { title: 'Design', description: 'Creating high-fidelity cinematic mockups.' },
      { title: 'Development', description: 'Clean, efficient coding with WordPress standards.' },
      { title: 'Launch', description: 'Rigorous testing and final deployment.' }
    ],
    color: 'blue',
    monthlyPrice: '249',
    perProjectPrice: '499',
    checkoutCode: 'WP_DEV_01'
  },
  {
    id: 'malware-removal',
    title: 'Malware Removal',
    shortDescription: 'Deep cleanup & hardening.',
    description: 'Complete malware cleanup and security hardening for your WordPress site.',
    fullDescription: 'If your site is hacked, we provide comprehensive malware removal services. We clean the files, database, and implement advanced security measures to prevent future attacks.',
    icon: ShieldAlert,
    lottieUrl: 'https://assets10.lottiefiles.com/packages/lf20_Tkwu42.json',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    features: ['Deep Malware Scan', 'Blacklist Removal', 'Security Hardening', 'Vulnerability Patching'],
    process: [
      { title: 'Scan', description: 'Deep analysis of files and database for infections.' },
      { title: 'Clean', description: 'Surgical removal of malicious code and backdoors.' },
      { title: 'Harden', description: 'Implementing enterprise-grade security firewalls.' },
      { title: 'Monitor', description: '24/7 surveillance to prevent re-infection.' }
    ],
    color: 'red',
    monthlyPrice: '99',
    perProjectPrice: '199',
    checkoutCode: 'MALWARE_01'
  },
  {
    id: 'bug-fix',
    title: 'WordPress Bug Fixes',
    shortDescription: 'Quick error & layout fixes.',
    description: 'Quick and reliable fixes for any WordPress errors or layout issues.',
    fullDescription: 'Struggling with the "White Screen of Death" or broken layouts? Our experts can diagnose and fix any WordPress issue quickly, ensuring minimal downtime.',
    icon: Bug,
    lottieUrl: 'https://assets1.lottiefiles.com/packages/lf20_m6cuL6.json',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000',
    features: ['PHP Error Fixes', 'CSS/Layout Fixes', 'Plugin Conflicts', 'Database Optimization'],
    process: [
      { title: 'Diagnosis', description: 'Identifying the root cause of the error.' },
      { title: 'Fix', description: 'Applying the most efficient technical solution.' },
      { title: 'Test', description: 'Verifying the fix across all browsers and devices.' },
      { title: 'Report', description: 'Detailed explanation of what was fixed.' }
    ],
    color: 'orange',
    monthlyPrice: '39',
    perProjectPrice: '79',
    checkoutCode: 'BUG_FIX_01'
  },
  {
    id: 'speed-optimization',
    title: 'Speed Optimization',
    shortDescription: 'Boost Core Web Vitals.',
    description: 'Boost your site speed and Core Web Vitals for better SEO and UX.',
    fullDescription: 'Slow sites lose visitors. We optimize your WordPress site for lightning-fast loading speeds, improving user experience and search engine rankings.',
    icon: Zap,
    lottieUrl: 'https://assets5.lottiefiles.com/packages/lf20_v78z8v.json',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    features: ['Image Compression', 'Caching Setup', 'Database Cleanup', 'CDN Integration'],
    process: [
      { title: 'Audit', description: 'Measuring current performance and bottlenecks.' },
      { title: 'Optimize', description: 'Minifying assets and optimizing database.' },
      { title: 'Cache', description: 'Setting up advanced server-side caching.' },
      { title: 'Verify', description: 'Confirming high scores on Google PageSpeed.' }
    ],
    color: 'yellow',
    monthlyPrice: '149',
    perProjectPrice: '299',
    checkoutCode: 'SPEED_01'
  },
  {
    id: 'frontend-dev',
    title: 'Frontend Development',
    shortDescription: 'Modern React interfaces.',
    description: 'Modern, responsive, and interactive frontend solutions using React.',
    fullDescription: 'We create stunning, responsive user interfaces using the latest technologies like React, Tailwind CSS, and Framer Motion for smooth animations.',
    icon: Code2,
    lottieUrl: 'https://assets2.lottiefiles.com/packages/lf20_8u6v7v.json',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000',
    features: ['React/Next.js', 'Tailwind CSS', 'Responsive Design', 'Interactive UI'],
    process: [
      { title: 'Prototype', description: 'Building interactive wireframes and flows.' },
      { title: 'Code', description: 'Developing with component-based architecture.' },
      { title: 'Animate', description: 'Adding cinematic motion and transitions.' },
      { title: 'Deploy', description: 'Optimizing for production and hosting.' }
    ],
    color: 'purple',
    monthlyPrice: '399',
    perProjectPrice: '799',
    checkoutCode: 'FRONTEND_01'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    shortDescription: 'Smart workflow efficiency.',
    description: 'Integrate AI capabilities into your workflow for maximum efficiency.',
    fullDescription: 'Leverage the power of AI to automate repetitive tasks, generate content, and provide intelligent insights for your business.',
    icon: Cpu,
    lottieUrl: 'https://assets3.lottiefiles.com/packages/lf20_qpwb7v.json',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    features: ['Gemini API Integration', 'Workflow Automation', 'AI Content Generation', 'Smart Chatbots'],
    process: [
      { title: 'Analyze', description: 'Identifying automation opportunities in your workflow.' },
      { title: 'Integrate', description: 'Connecting AI models to your existing systems.' },
      { title: 'Train', description: 'Fine-tuning AI responses for your specific needs.' },
      { title: 'Scale', description: 'Expanding automation across your entire business.' }
    ],
    color: 'emerald',
    monthlyPrice: '299',
    perProjectPrice: '599',
    checkoutCode: 'AI_AUTO_01'
  }
];
