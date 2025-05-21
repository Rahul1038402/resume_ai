import { useState } from "react";
import Layout from "@/components/Layout";
import ResumeUploader from "@/components/ResumeUploader";
import JobSelector from "@/components/JobSelector";
import ResumeResults from "@/components/ResumeResults";
import { AnalysisResult } from "@/types/analysis";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { analyzeResume } from "@/api/resumeService";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const Analyzer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [targetJob, setTargetJob] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelected = (selectedFile: File) => {
    setFile(selectedFile);
    setResult(null);
    setError(null);
  };

  const handleJobSelected = (selectedJob: string | null) => {
    setTargetJob(selectedJob);
    setResult(null);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!file) {
      toast.error("Please upload a resume first");
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    
    try {
      const analysisResult = await analyzeResume(file, targetJob);
      setResult(analysisResult);
      toast.success("Analysis completed successfully!");
    } catch (err) {
      console.error("Analysis error:", err);
      const errorMessage = err instanceof Error ? err.message : "Analysis failed";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-resume-primary dark:text-white mb-4">
              Resume Analyzer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Upload your resume, choose a target job, and get AI-powered analysis
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <ResumeUploader onFileSelected={handleFileSelected} />
              <JobSelector onJobSelected={handleJobSelected} />
            </div>
            
            <Card className="bg-resume-light dark:bg-gray-800 p-6 text-center">
              <Button 
                className="w-full sm:w-auto bg-resume-primary hover:bg-resume-primary/90 dark:bg-resume-secondary dark:hover:bg-resume-secondary/90 px-8"
                size="lg"
                onClick={handleAnalyze}
                disabled={!file || isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Analyze Resume"
                )}
              </Button>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                We'll analyze your resume against {targetJob || "general"} requirements
              </p>
            </Card>
            
            <ResumeResults 
              result={result} 
              loading={isAnalyzing}
              error={error}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analyzer;