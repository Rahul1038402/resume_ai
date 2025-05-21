
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-resume-light dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-700">
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
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {currentYear} ResumeAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
