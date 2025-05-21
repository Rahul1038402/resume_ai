export interface AnalysisResult {
  score: number;
  matched_skills: Record<string, number>;
  missing_skills: Record<string, number>;
  recommendations: string[];
  target_job: string;
}