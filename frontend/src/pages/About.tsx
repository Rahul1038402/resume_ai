
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-resume-primary mb-4">About ResumeAI</h1>
            <p className="text-xl text-gray-600">
              Helping job seekers optimize their resumes with advanced AI
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              ResumeAI is a cutting-edge tool designed to help job seekers optimize their resumes 
              for specific job positions. Our advanced AI technology analyzes your resume against 
              job requirements, providing personalized feedback and recommendations to improve 
              your chances of landing interviews.
            </p>
            
            <h2>Our Technology</h2>
            <p>
              Our resume analyzer uses Natural Language Processing (NLP) and machine learning 
              algorithms to extract skills, experience, and other relevant information from 
              your resume. It then compares this information to the requirements of your target 
              job position, identifying matches and gaps in your qualifications.
            </p>
            
            <h2>How It Works</h2>
            <ol>
              <li>
                <strong>Upload Your Resume</strong>: Start by uploading your resume in PDF or DOCX format.
              </li>
              <li>
                <strong>Select a Target Job</strong>: Choose the job position you're targeting or get a 
                general analysis of your resume.
              </li>
              <li>
                <strong>Receive Detailed Analysis</strong>: Get a comprehensive analysis of your resume, 
                including matched skills, missing skills, and a resume score.
              </li>
              <li>
                <strong>Follow Recommendations</strong>: Use our personalized recommendations to improve 
                your resume and increase your chances of success.
              </li>
            </ol>
            
            <h2>Our Mission</h2>
            <p>
              We believe that every job seeker deserves feedback on their resume to help them 
              stand out in competitive job markets. Our mission is to make professional resume 
              analysis accessible to everyone, empowering job seekers to present their best selves 
              to potential employers.
            </p>
            
            <h2>Privacy Commitment</h2>
            <p>
              We take your privacy seriously. Your resume data is securely processed and is never 
              shared with third parties. Our analysis is performed in real-time, and we do not 
              store your resume data unless you explicitly opt to save your analysis.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
