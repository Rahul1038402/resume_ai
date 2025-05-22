import { Mail, Github, Linkedin } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Footer Navigation */}
      <div className="bg-resume-light dark:bg-gray-900 pt-12 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
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
        <footer className="w-full bg-gray-400 py-8 px-4 mt-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-black">
            {/* Left Profile */}
            <div className="flex items-center space-x-4">
              <div className="border-2 border-black w-12 h-12 relative -top-2"></div>
              <div>
                <div className="font-medium">Mohd Zuhaib Khan</div>
                <div className="flex space-x-2 mt-1">
                  <a href="#" className="hover:text-blue-700">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-[#6e5494]">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-[#EA4335]">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="relative w-[48px] h-[48px]">

              <div className="absolute top-[3px] left-[3px] w-3 h-3 bg-black rounded-full" />

              <div className="absolute top-0 left-[32px] w-4 h-px bg-white" />
              <div className="absolute top-0 left-[32px] w-px h-4 bg-white" />
              <div className="absolute top-0 left-[47px] w-px h-4 bg-white" />

              <div className="absolute top-[16px] left-[16px] w-px h-4 bg-white" />
              <div className="absolute top-[16px] left-[32px] w-px h-4 bg-white" />

              <div className="absolute top-[47px] left-0 w-4 h-px bg-white" />
              <div className="absolute top-[32px] left-0 w-px h-4 bg-white" />
              <div className="absolute top-[32px] left-[16px] w-px h-4 bg-white" />

              <div className="absolute top-[47px] left-[32px] w-4 h-px bg-white" />
              <div className="absolute top-[32px] left-[32px] w-px h-4 bg-white" />
              <div className="absolute top-[32px] left-[48px] w-px h-4 bg-white" />

              <div className="absolute top-[16px] left-[16px] w-8 h-px bg-white" />

              <div className="absolute top-[31px] left-0 w-8 h-px bg-white" />

              <div className="absolute top-[31px] left-[16px] w-8 h-px bg-white" />

            </div>

            {/* Right Profile */}
            <div className="flex items-center space-x-4">
              <div className="border-2 border-black w-12 h-12 relative -top-2"></div>
              <div>
                <div className="font-medium">Rahul Kumar Mall</div>
                <div className="flex space-x-2 mt-1">
                  <a href="#" className="hover:text-blue-700">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-[#6e5494]">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-[#EA4335]">
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
