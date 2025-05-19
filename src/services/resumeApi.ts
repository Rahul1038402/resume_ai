
import { AnalysisResult } from "@/components/ResumeResults";

// Simulated backend response for frontend development
// In production, this would be replaced with actual API calls to the Python backend
export const analyzeResume = async (
  file: File,
  targetJob: string | null
): Promise<AnalysisResult> => {
  return new Promise((resolve) => {
    console.log(`Analyzing resume ${file.name} for job position: ${targetJob || 'General'}`);
    
    // Simulate API call delay
    setTimeout(() => {
      // Mock response based on file name and job title
      // This simulates different results for different inputs
      const fileNameLower = file.name.toLowerCase();
      const baseScore = fileNameLower.includes('developer') ? 75 : 
                       fileNameLower.includes('data') ? 85 : 
                       fileNameLower.includes('resume') ? 65 : 55;
                       
      // Adjust score based on job target
      let score = baseScore;
      if (targetJob) {
        if (fileNameLower.includes(targetJob.toLowerCase())) {
          score += 15;
        } else {
          score -= 10;
        }
      }
      
      // Cap the score between 0-100
      score = Math.min(100, Math.max(0, score));
      
      // Generate mock matched skills based on job
      const matchedSkills: Record<string, number> = {};
      if (targetJob === "Data Scientist" || !targetJob) {
        matchedSkills["Python"] = 5;
        matchedSkills["Statistics"] = 4;
        if (score > 70) {
          matchedSkills["Machine Learning"] = 5;
          matchedSkills["SQL"] = 4;
        }
      }
      if (targetJob === "Frontend Developer" || !targetJob) {
        matchedSkills["JavaScript"] = 5;
        matchedSkills["HTML"] = 4;
        if (score > 70) {
          matchedSkills["React"] = 5;
          matchedSkills["CSS"] = 4;
        }
      }
      if (targetJob === "Backend Developer" || !targetJob) {
        matchedSkills["Python"] = 4;
        matchedSkills["SQL"] = 4;
        if (score > 70) {
          matchedSkills["Java"] = 4;
          matchedSkills["Docker"] = 3;
        }
      }
      
      // Generate mock missing skills based on job and score
      const missingSkills: Record<string, number> = {};
      if (targetJob === "Data Scientist") {
        if (score < 80) {
          missingSkills["Deep Learning"] = 3;
          missingSkills["TensorFlow"] = 3;
        }
        if (score < 70) {
          missingSkills["PyTorch"] = 3;
        }
      }
      if (targetJob === "Frontend Developer") {
        if (score < 80) {
          missingSkills["TypeScript"] = 3;
          missingSkills["UI/UX"] = 3;
        }
      }
      if (targetJob === "Backend Developer") {
        if (score < 80) {
          missingSkills["AWS"] = 3;
          missingSkills["Kubernetes"] = 3;
        }
      }
      
      // Generate recommendations
      const recommendations = [];
      if (Object.keys(missingSkills).length > 0) {
        const topMissing = Object.keys(missingSkills).slice(0, 3).join(", ");
        recommendations.push(`Consider adding experience with: ${topMissing}. These are high-value skills in your target domain.`);
      }
      
      if (score < 70) {
        recommendations.push("Highlight more projects/work experiences to demonstrate skill diversity.");
      }
      
      if (score < 60) {
        recommendations.push("Consider reformatting your resume to better highlight your technical skills and achievements.");
      }
      
      resolve({
        score: Math.round(score),
        matched_skills: matchedSkills,
        missing_skills: missingSkills,
        recommendations: recommendations,
        target_job: targetJob || "General",
      });
    }, 1500);
  });
};
