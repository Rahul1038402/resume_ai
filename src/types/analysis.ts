
export interface AnalysisResult {
  resumeText?: string;
  selectedJob?: string;
  overallScore?: number;
  matchedSkills?: string[];
  missingSkills?: string[];
  recommendations?: string[];
  improvementAreas?: string[];
  strengths?: string[];
}
