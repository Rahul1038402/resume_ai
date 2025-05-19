
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-resume-light py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-resume-primary mb-4">ResumeAI</h3>
            <p className="text-gray-600 mb-4">
              Advanced resume analysis powered by AI to help you land your dream job.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-resume-dark mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-resume-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/analyzer" className="text-gray-600 hover:text-resume-primary transition-colors">Resume Analyzer</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-resume-primary transition-colors">About</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-resume-dark mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-resume-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-resume-primary transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} ResumeAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
