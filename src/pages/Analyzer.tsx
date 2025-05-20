import { useState } from "react";
import Layout from "@/components/Layout";
import ResumeUploader from "@/components/ResumeUploader";
import JobSelector from "@/components/JobSelector";
import ResumeResults from "@/components/ResumeResults";
import { AnalysisResult } from "@/types/analysis";
import FixedResumeResults from "@/components/FixedResumeResults";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { analyzeResume } from "@/services/resumeApi";
import { toast } from "sonner";

const Analyzer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [targetJob, setTargetJob] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const handleFileSelected = (selectedFile: File) => {
    setFile(selectedFile);
    setResult(null);
  };

  const handleJobSelected = (selectedJob: string | null) => {
    setTargetJob(selectedJob);
    if (result) setResult(null);
  };

  const handleAnalyze = async () => {
    if (!file) {
      toast.error("Please upload a resume first");
      return;
    }

    setAnalyzing(true);
    
    try {
      const result = await analyzeResume(file, targetJob);
      setResult(result);
    } catch (error) {
      console.error("Error analyzing resume:", error);
      toast.error("Failed to analyze resume. Please try again.");
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-resume-primary dark:text-white mb-4">Resume Analyzer</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Upload your resume, choose a target job, and get AI-powered analysis and recommendations
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
              <div className="space-y-6">
                <ResumeUploader onFileSelected={handleFileSelected} />
              </div>
              <div className="space-y-6">
                <JobSelector onJobSelected={handleJobSelected} />
              </div>
            </div>
            
            <Card className="bg-resume-light dark:bg-gray-800 p-6 text-center">
              <Button 
                className="bg-resume-primary hover:bg-resume-primary/90 dark:bg-resume-secondary dark:hover:bg-resume-secondary/90 px-8"
                size="lg"
                onClick={handleAnalyze}
                disabled={!file || analyzing}
              >
                {analyzing ? 'Analyzing...' : 'Analyze Resume'}
              </Button>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                We'll analyze your resume against the selected job requirements
              </p>
            </Card>
            
            {(analyzing || result) && (
              <div>
                <ResumeResults result={result} loading={analyzing} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analyzer;
