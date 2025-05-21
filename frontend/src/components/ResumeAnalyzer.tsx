import { useState } from 'react';
import { analyzeResume } from '@/api/resumeService';
import JobSelector from './JobSelector';
import ResumeUploader from './ResumeUploader';
import ResumeResults from './ResumeResults';
import { toast } from 'sonner';
import { Button } from 'react-day-picker';
import { AnalysisResult } from '@/types/analysis';

export default function ResumeAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [targetJob, setTargetJob] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!file) {
      toast.error('Please upload a resume first');
      return;
    }

    setLoading(true);
    try {
      const analysis = await analyzeResume(file, targetJob);
      setResult(analysis);
    } catch (error) {
      toast.error('Analysis failed. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center dark:text-white">
        Resume Analyzer
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <ResumeUploader onFileSelected={setFile} />
          <JobSelector onJobSelected={setTargetJob} />
        </div>

        <div>
          <ResumeResults result={result} loading={loading} />
          {file && (
            <Button 
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full mt-4"
            >
              {loading ? 'Analyzing...' : 'Analyze Resume'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}