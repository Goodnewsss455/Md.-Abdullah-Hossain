import { Link } from 'react-router-dom';
import { Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-[#ff6b6b] rounded-lg flex items-center justify-center text-white">
              <Code2 size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight">DevCraft</span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Empowering businesses with modern WordPress solutions, advanced security, and AI-driven automation.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:text-black hover:border-black transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:text-black hover:border-black transition-all">
              <Github size={18} />
            </a>
            <a href="#" className="p-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:text-black hover:border-black transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Services</h4>
          <ul className="space-y-4">
            <li><Link to="/#services" className="text-gray-500 hover:text-black text-sm transition-colors">WordPress Development</Link></li>
            <li><Link to="/#services" className="text-gray-500 hover:text-black text-sm transition-colors">Malware Removal</Link></li>
            <li><Link to="/#services" className="text-gray-500 hover:text-black text-sm transition-colors">Speed Optimization</Link></li>
            <li><Link to="/#services" className="text-gray-500 hover:text-black text-sm transition-colors">AI Automation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Company</h4>
          <ul className="space-y-4">
            <li><Link to="/#about" className="text-gray-500 hover:text-black text-sm transition-colors">About Us</Link></li>
            <li><Link to="/#services" className="text-gray-500 hover:text-black text-sm transition-colors">Our Work</Link></li>
            <li><Link to="/#contact" className="text-gray-500 hover:text-black text-sm transition-colors">Contact</Link></li>
            <li><Link to="/#pricing" className="text-gray-500 hover:text-black text-sm transition-colors">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Newsletter</h4>
          <p className="text-gray-500 text-sm mb-4">Subscribe to get the latest tech updates.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            />
            <button className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-all">
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 flex flex-col md:row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} DevCraft Portfolio. All rights reserved.
          </p>
          <Link to="/admin" className="text-gray-300 hover:text-orange-500 text-xs font-bold transition-colors">
            Admin Portal
          </Link>
        </div>
        <p className="text-gray-400 text-xs text-center">
          Designed with ❤️ for modern web experiences.
        </p>
      </div>
    </footer>
  );
}
