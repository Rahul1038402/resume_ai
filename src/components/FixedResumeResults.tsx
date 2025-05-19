
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export type { AnalysisResult } from './ResumeResults'; // Re-export
import { AnalysisResult } from "./ResumeResults";

interface ResumeResultsProps {
  result: AnalysisResult | null;
  loading: boolean;
}

const FixedResumeResults = ({ result, loading }: ResumeResultsProps) => {
  const [activeTab, setActiveTab] = useState<"matched" | "missing" | "recommendations">("matched");

  if (loading) {
    return (
      <Card className="p-6 bg-white dark:bg-gray-800 shadow-md">
        <div className="text-center">
          <div className="animate-pulse-slow mb-4">
            <h3 className="text-lg font-medium mb-2 dark:text-white">Analyzing your resume...</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">This may take a moment</p>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-700 h-2 rounded-full overflow-hidden mt-4">
            <div className="bg-resume-primary dark:bg-resume-secondary h-full animate-pulse w-4/5"></div>
          </div>
        </div>
      </Card>
    );
  }

  if (!result) {
    return null;
  }

  const { score, matched_skills, missing_skills, recommendations, target_job } = result;

  return (
    <Card className="p-6 bg-white dark:bg-gray-800 shadow-md">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-resume-primary dark:text-white">Resume Analysis for {target_job}</h2>
        <div className="mt-4 relative">
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-gray-200 dark:text-gray-700"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-resume-primary dark:text-resume-secondary"
                  strokeWidth="8"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                  strokeDasharray={`${(2 * Math.PI * 40) * (score / 100)} ${2 * Math.PI * 40}`}
                  strokeDashoffset="0"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div>
                  <span className="text-3xl font-bold text-resume-primary dark:text-resume-secondary">{score}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">/100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex border-b dark:border-gray-700 mb-4">
        <Button
          variant="ghost"
          className={cn(
            "flex-1 py-2 rounded-none dark:text-gray-300",
            activeTab === "matched" && "text-resume-primary dark:text-resume-secondary border-b-2 border-resume-primary dark:border-resume-secondary"
          )}
          onClick={() => setActiveTab("matched")}
        >
          Matched Skills
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "flex-1 py-2 rounded-none dark:text-gray-300",
            activeTab === "missing" && "text-resume-primary dark:text-resume-secondary border-b-2 border-resume-primary dark:border-resume-secondary"
          )}
          onClick={() => setActiveTab("missing")}
        >
          Missing Skills
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "flex-1 py-2 rounded-none dark:text-gray-300",
            activeTab === "recommendations" && "text-resume-primary dark:text-resume-secondary border-b-2 border-resume-primary dark:border-resume-secondary"
          )}
          onClick={() => setActiveTab("recommendations")}
        >
          Recommendations
        </Button>
      </div>

      <div className="mt-4">
        {activeTab === "matched" && (
          <>
            <h3 className="text-lg font-medium mb-3 dark:text-white">Matched Skills</h3>
            {skillItems(matched_skills, "No matched skills found")}
          </>
        )}

        {activeTab === "missing" && (
          <>
            <h3 className="text-lg font-medium mb-3 dark:text-white">Missing Skills</h3>
            {skillItems(missing_skills, "No critical missing skills")}
          </>
        )}

        {activeTab === "recommendations" && (
          <>
            <h3 className="text-lg font-medium mb-3 dark:text-white">Recommendations</h3>
            {recommendations.length > 0 ? (
              <ul className="list-disc pl-5 space-y-2">
                {recommendations.map((rec, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-300">{rec}</li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400 py-4">No specific recommendations</p>
            )}
          </>
        )}
      </div>
    </Card>
  );
};

const skillItems = (skills: Record<string, number>, isEmpty: string) => {
  return Object.keys(skills).length > 0 ? (
    <div className="space-y-4">
      {Object.entries(skills)
        .sort(([, a], [, b]) => b - a)
        .map(([skill, weight]) => (
          <div key={skill} className="space-y-1">
            <div className="flex justify-between">
              <span className="font-medium dark:text-gray-200">{skill}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{weight}/5</span>
            </div>
            <Progress 
              value={weight * 20} 
              className="h-2"
            />
          </div>
        ))}
    </div>
  ) : (
    <p className="text-center text-gray-500 dark:text-gray-400 py-4">{isEmpty}</p>
  );
};

// Export the component but import the AnalysisResult type from ResumeResults
export { FixedResumeResults as ResumeResults };
