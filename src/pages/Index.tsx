
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Analyze Your Resume with AI
            </h1>
            <p className="text-xl mb-8">
              Get personalized feedback and recommendations to improve your resume
              and match your target job positions.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-resume-primary hover:bg-gray-100 px-8 py-6 text-lg"
              asChild
            >
              <Link to="/analyzer">Analyze Your Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-resume-primary">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-resume-primary">
              <CardContent className="pt-6">
                <div className="bg-resume-light h-12 w-12 flex items-center justify-center rounded-full mb-4">
                  <span className="text-xl font-bold text-resume-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Upload Your Resume</h3>
                <p className="text-gray-600">
                  Upload your resume in PDF or DOCX format. Our AI will extract and process all the relevant information.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-resume-secondary">
              <CardContent className="pt-6">
                <div className="bg-resume-light h-12 w-12 flex items-center justify-center rounded-full mb-4">
                  <span className="text-xl font-bold text-resume-secondary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Select a Target Job</h3>
                <p className="text-gray-600">
                  Choose from common job titles or get a general analysis. The AI will tailor its feedback to your career goals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-resume-accent">
              <CardContent className="pt-6">
                <div className="bg-resume-light h-12 w-12 flex items-center justify-center rounded-full mb-4">
                  <span className="text-xl font-bold text-resume-accent">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Get Detailed Analysis</h3>
                <p className="text-gray-600">
                  Receive a comprehensive analysis with matched skills, missing skills, and personalized recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-resume-primary">Stand Out From The Competition</h2>
            <p className="text-xl text-gray-600">
              Our AI-powered resume analyzer helps you optimize your resume for specific job positions
              and increase your chances of landing interviews.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="bg-resume-primary rounded-full p-2 text-white mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Match Job Requirements</h3>
                <p className="text-gray-600">
                  Get feedback on how well your skills match specific job requirements and what you need to improve.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-resume-primary rounded-full p-2 text-white mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Highlight Key Skills</h3>
                <p className="text-gray-600">
                  Identify your strongest skills and learn how to emphasize them effectively on your resume.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-resume-primary rounded-full p-2 text-white mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Personalized Recommendations</h3>
                <p className="text-gray-600">
                  Get tailored advice on what skills to develop and how to improve your resume's effectiveness.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-resume-primary rounded-full p-2 text-white mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Immediate Feedback</h3>
                <p className="text-gray-600">
                  No more waiting for feedback. Get instant analysis powered by advanced AI technology.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              className="bg-resume-primary hover:bg-resume-primary/90 px-8"
              size="lg"
              asChild
            >
              <Link to="/analyzer">Try It Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
