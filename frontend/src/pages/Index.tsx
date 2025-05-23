
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import Aurora from '@/components/ui/Aurora';
import ShinyText from "@/components/ui/ShinyText";
import GradientText from "@/components/ui/GradientText";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pb-36">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={7}
              showBorder={false}
              className="text-4xl font-semibold pb-8"
            >
              Analyze Your Resume Using AI
            </GradientText>
            <p className="text-xl mb-8">
              Get personalized feedback and recommendations to improve your resume
              and match your target job positions.
            </p>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-gray-800 dark:hover:bg-gray-900 px-8 py-6 text-lg"
              asChild
            >
              <Link to="/analyzer"><ShinyText text="Analyze Your Resume" disabled={false} speed={5} className='custom-class' /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-resume-primary dark:text-white">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-resume-primary dark:bg-gray-800 dark:border-t-resume-secondary">
              <CardContent className="pt-6">
                <div className="bg-resume-light dark:bg-gray-700 h-12 w-12 flex items-center justify-center rounded-full mb-4">
                  <span className="text-xl font-bold text-resume-primary dark:text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Upload Your Resume</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Upload your resume in PDF or DOCX format. Our AI will extract and process all the relevant information.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-resume-secondary dark:bg-gray-800 dark:border-t-resume-accent">
              <CardContent className="pt-6">
                <div className="bg-resume-light dark:bg-gray-700 h-12 w-12 flex items-center justify-center rounded-full mb-4">
                  <span className="text-xl font-bold text-resume-secondary dark:text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Select a Target Job</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Choose from common job titles or get a general analysis. The AI will tailor its feedback to your career goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-resume-accent dark:bg-gray-800 dark:border-t-resume-primary">
              <CardContent className="pt-6">
                <div className="bg-resume-light dark:bg-gray-700 h-12 w-12 flex items-center justify-center rounded-full mb-4">
                  <span className="text-xl font-bold text-resume-accent dark:text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Get Detailed Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Receive a comprehensive analysis with matched skills, missing skills, and personalized recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-resume-primary dark:text-white">Stand Out From The Competition</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
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
                <h3 className="text-lg font-bold mb-2 dark:text-resume-secondary">Match Job Requirements</h3>
                <p className="text-gray-600 dark:text-gray-300">
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
                <h3 className="text-lg font-bold mb-2 dark:text-resume-secondary">Highlight Key Skills</h3>
                <p className="text-gray-600 dark:text-gray-300">
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
                <h3 className="text-lg font-bold mb-2 dark:text-resume-secondary">Personalized Recommendations</h3>
                <p className="text-gray-600 dark:text-gray-300">
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
                <h3 className="text-lg font-bold mb-2 dark:text-resume-secondary">Immediate Feedback</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No more waiting for feedback. Get instant analysis powered by advanced AI technology.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              className="bg-resume-primary hover:bg-resume-primary/90 dark:bg-resume-secondary dark:hover:bg-resume-secondary/90 px-8 text-white"
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
