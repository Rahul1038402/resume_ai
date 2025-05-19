
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export interface AnalysisResult {
  score: number;
  matched_skills: Record<string, number>;
  missing_skills: Record<string, number>;
  recommendations: string[];
  target_job: string;
}

interface ResumeResultsProps {
  result: AnalysisResult | null;
  loading: boolean;
}

const ResumeResults = ({ result, loading }: ResumeResultsProps) => {
  if (loading) {
    return <ResultsLoadingSkeleton />;
  }

  if (!result) {
    return null;
  }

  const { score, matched_skills, missing_skills, recommendations, target_job } = result;

  // Calculate score color based on value
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 dark:text-green-400";
    if (score >= 60) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  // Get weight color based on importance
  const getWeightColor = (weight: number) => {
    const colors = [
      "bg-gray-200 dark:bg-gray-600",
      "bg-blue-200 dark:bg-blue-700",
      "bg-blue-300 dark:bg-blue-600",
      "bg-blue-400 dark:bg-blue-500",
      "bg-blue-500 dark:bg-blue-400",
    ];
    return colors[weight - 1] || colors[0];
  };

  // Sort skills by weight for display
  const sortedMatchedSkills = Object.entries(matched_skills)
    .sort(([, a], [, b]) => b - a);
    
  const sortedMissingSkills = Object.entries(missing_skills)
    .sort(([, a], [, b]) => b - a);

  return (
    <div className="space-y-6">
      <Card className="dark:bg-gray-800">
        <CardHeader className="pb-3">
          <CardTitle className="text-2xl flex items-baseline justify-between dark:text-white">
            <span>Resume Analysis Results</span>
            <span className={`text-3xl font-bold ${getScoreColor(score)}`}>
              {score}/100
            </span>
          </CardTitle>
          <Progress 
            value={score} 
            className="h-2 mt-2" 
            // Remove indicatorClassName as it's not supported
          />
        </CardHeader>
        <CardContent>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Target Job: <span className="font-medium text-resume-primary dark:text-resume-secondary">{target_job}</span>
          </div>
          
          <Separator className="my-4 dark:bg-gray-700" />
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3 dark:text-white">Matched Skills</h3>
              {sortedMatchedSkills.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-sm">No matching skills found.</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {sortedMatchedSkills.map(([skill, weight]) => (
                    <div key={skill} className="flex items-center gap-1.5">
                      <Badge variant="outline" className="py-1.5 px-3 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
                        {skill}
                        <span className={`ml-1.5 w-2 h-2 rounded-full inline-block ${getWeightColor(weight)}`} />
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 dark:text-white">Missing Important Skills</h3>
              {sortedMissingSkills.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-sm">No important skills are missing.</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {sortedMissingSkills.map(([skill, weight]) => (
                    <div key={skill} className="flex items-center gap-1.5">
                      <Badge variant="outline" className="py-1.5 px-3 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/30 dark:text-red-200">
                        {skill}
                        <span className={`ml-1.5 w-2 h-2 rounded-full inline-block ${getWeightColor(weight)}`} />
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 dark:text-white">Recommendations</h3>
              {recommendations.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-sm">No recommendations available.</p>
              ) : (
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {recommendations.map((recommendation, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-resume-secondary dark:text-resume-secondary mr-2">•</span>
                      <span>{recommendation}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ResultsLoadingSkeleton = () => {
  return (
    <Card className="dark:bg-gray-800">
      <CardHeader className="pb-3">
        <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse-slow mb-2" />
        <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse-slow" />
      </CardHeader>
      <CardContent>
        <div className="h-5 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse-slow mb-4" />
        <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse-slow my-4" />
        
        <div className="space-y-6">
          <div>
            <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse-slow mb-3" />
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse-slow" />
              ))}
            </div>
          </div>
          
          <div>
            <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse-slow mb-3" />
            <div className="flex flex-wrap gap-2">
              {[1, 2].map((i) => (
                <div key={i} className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse-slow" />
              ))}
            </div>
          </div>
          
          <div>
            <div className="h-6 w-36 bg-gray-200 dark:bg-gray-700 rounded animate-pulse-slow mb-3" />
            <div className="space-y-2">
              {[1, 2].map((i) => (
                <div key={i} className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse-slow" />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResumeResults;
