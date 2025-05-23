import { Mail, Github, Linkedin } from 'lucide-react';
import { Link } from "react-router-dom";
import Orb from '@/components/ui/Orb';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Footer Navigation */}
      <div className="bg-resume-light dark:bg-gray-900 pt-12 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-resume-primary dark:text-white mb-4">ResumeAI</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Advanced resume analysis powered by AI to help you land your dream job.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-resume-dark dark:text-gray-200 mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-resume-primary dark:text-gray-300 dark:hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/analyzer" className="text-gray-600 hover:text-resume-primary dark:text-gray-300 dark:hover:text-white transition-colors">Resume Analyzer</Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-resume-primary dark:text-gray-300 dark:hover:text-white transition-colors">About</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-resume-dark dark:text-gray-200 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-gray-600 hover:text-resume-primary dark:text-gray-300 dark:hover:text-white transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-600 hover:text-resume-primary dark:text-gray-300 dark:hover:text-white transition-colors">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full bg-gray-400 py-6 px-4 mt-4">

          <div className="max-w-7xl mx-auto flex justify-between items-start text-black">
            {/* Left Profile */}
            <div className="relative flex items-start space-x-4">
              {/* Decorative Square and Lines */}
              <div className="relative w-12 h-12">
                {/* Inner solid square */}
                <div className="absolute top-1 left-2 w-full h-full border-[3px] border-black  z-10"></div>
                {/* Outer line square */}
                <div className="absolute top-0 left-1 w-full h-full border border-black z-0"></div>
                {/* Circle */}
                <div className="absolute -top-2 left-2 w-2 h-2 bg-black rounded-full z-20"></div>
              </div>

              {/* Name and Social Links */}
              <div>
                <div className="hidden sm:block font-medium" style={{ fontFamily: "'Advent Pro', sans-serif", letterSpacing: '0.1em' }}>
                  Mohd Zuhaib Khan
                </div>

                {/* Short name for small screens (≤640px) */}
                <div className="block sm:hidden font-medium" style={{ fontFamily: "'Advent Pro', sans-serif", letterSpacing: '0.1em' }}>
                  Zuhaib
                </div>
                <div className="flex space-x-2 mt-1">
                  <a href="https://www.linkedin.com/in/m-zuhaib-kh/" className="hover:text-blue-700">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/Mzuhaibkhan" className="hover:text-[#6e5494]">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="mailto:khanzuhaib966@gmail.com" className="hover:text-[#EA4335]">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="hidden sm:block" style={{ width: '10%', height: '70px', position: 'relative' }}>
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
            </div>

            {/* Right Profile */}
            <div className="flex items-start space-x-4">
              <div className="relative w-12 h-12">
                {/* Inner solid square */}
                <div className="absolute top-1 left-2 w-full h-full border-[3px] border-black  z-10"></div>
                {/* Outer line square */}
                <div className="absolute top-0 left-1 w-full h-full border border-black z-0"></div>
                {/* Circle */}
                <div className="absolute -top-2 left-2 w-2 h-2 bg-black rounded-full z-20"></div>
              </div>

              {/* Name and Social Links */}
              <div>
                {/* Full name for large screens */}
                <div className="hidden sm:block font-medium" style={{ fontFamily: "'Advent Pro', sans-serif", letterSpacing: '0.1em' }}>
                  Rahul Kumar Mall
                </div>

                {/* Short name for small screens (≤640px) */}
                <div className="block sm:hidden font-medium" style={{ fontFamily: "'Advent Pro', sans-serif", letterSpacing: '0.1em' }}>
                  Rahul
                </div>

                <div className="flex space-x-2 mt-1">
                  <a href="https://www.linkedin.com/in/rahul-malll-85989327b/" className="hover:text-blue-700">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/Rahul1038402" className="hover:text-[#6e5494]">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="mailto:rahul1038402@gmail.com" className="hover:text-[#EA4335]">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </footer>
      </div>
    </>


  );
};

export default Footer;