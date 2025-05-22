import spacy
import re
import fitz  # PyMuPDF
from docx import Document
from collections import defaultdict
import io
from typing import Tuple, Dict, List, Optional


class ResumeAnalyzer:
    def __init__(self):
        """Initialize the analyzer with skills database and NLP pipeline"""
        self.admin_skills = {
            # Technical Skills
            "Python": 5, "Java": 4, "JavaScript": 4, "C++": 3, "SQL": 5,
            "Machine Learning": 5, "Data Analysis": 4, "Statistics": 4,
            "Deep Learning": 4, "TensorFlow": 3, "PyTorch": 3, "AWS": 3,
            "React": 4, "Node.js": 3, "HTML": 3, "CSS": 3, "Docker": 3,
            "Kubernetes": 3, "Git": 3, "Spark": 3, "Pandas": 4, "Numpy": 3,

            # Soft Skills
            "Communication": 2, "Leadership": 2, "Teamwork": 2, "Problem Solving": 3
        }

        self.job_requirements = {
            "Data Scientist": {
                "Python": 5, "Machine Learning": 5, "Statistics": 4, "SQL": 4,
                "Data Analysis": 4, "Deep Learning": 3, "TensorFlow": 3, "Pandas": 4
            },
            "Frontend Developer": {
                "JavaScript": 5, "React": 5, "HTML": 4, "CSS": 4,
                "TypeScript": 3, "UI/UX": 3, "Node.js": 3
            },
            "Backend Developer": {
                "Python": 4, "Java": 4, "SQL": 4, "AWS": 3,
                "Docker": 3, "Kubernetes": 3, "Node.js": 4
            },
            "DevOps Engineer": {
                "Docker": 5, "Kubernetes": 5, "AWS": 4, "Git": 4,
                "Python": 3, "Linux": 4, "CI/CD": 4
            }
        }

        # Initialize NLP pipeline
        self.nlp = spacy.load("en_core_web_lg")
        self.skill_patterns = self._create_skill_patterns()

        # Configure skill extraction
        self.skill_threshold = 0.8  # Similarity threshold for skill matching

    def _create_skill_patterns(self) -> List[Dict]:
        """Create spaCy entity ruler patterns for skill extraction"""
        patterns = []
        skill_variations = {
            "ML": "Machine Learning",
            "DL": "Deep Learning",
            "JS": "JavaScript",
            "DB": "Database",
            "AI": "Artificial Intelligence"
        }

        for skill in self.admin_skills:
            # Add full skill name pattern
            skill_parts = skill.split()
            pattern = [{"LOWER": part.lower()} for part in skill_parts]
            patterns.append({"label": "SKILL", "pattern": pattern})

            # Add abbreviations
            for abbr, full in skill_variations.items():
                if full == skill:
                    patterns.append({"label": "SKILL", "pattern": [{"LOWER": abbr.lower()}]})

        return patterns

    def extract_text_from_uploaded_file(self, file_content: io.BytesIO) -> str:
        """
        Extract text from uploaded file (PDF/DOCX/txt)

        Args:
            file_content: In-memory file content as BytesIO

        Returns:
            Extracted text as string
        """
        file_start = file_content.read(4)
        file_content.seek(0)

        # PDF Extraction
        if file_start == b'%PDF':
            try:
                doc = fitz.open("pdf", file_content.read())
                return "\n".join([page.get_text() for page in doc])
            except Exception as e:
                raise ValueError(f"PDF parsing failed: {str(e)}")

        # DOCX Extraction
        file_content.seek(0)
        try:
            doc = Document(file_content)
            return "\n".join([para.text for para in doc.paragraphs])
        except:
            pass

        # Plain Text Fallback
        file_content.seek(0)
        try:
            return file_content.read().decode('utf-8', errors='ignore')
        except Exception as e:
            raise ValueError(f"File parsing failed: {str(e)}")

    def extract_skills(self, text: str) -> Tuple[set, Dict[str, set]]:
        """
        Extract skills from resume text using NLP

        Args:
            text: Resume text content

        Returns:
            tuple: (unique_skills, project_skills) where:
                - unique_skills: Set of all unique skills found
                - project_skills: Dict mapping project names to their skills
        """
        ruler = self.nlp.add_pipe("entity_ruler", before="ner")
        ruler.add_patterns(self.skill_patterns)

        doc = self.nlp(text)
        unique_skills = set()
        project_skills = defaultdict(set)
        current_project = "General Experience"

        # First pass: Exact matches using entity ruler
        for sent in doc.sents:
            # Detect project/experience sections
            if "project" in sent.text.lower() or "experience" in sent.text.lower():
                current_project = sent.text[:100].strip()

            for ent in sent.ents:
                if ent.label_ == "SKILL":
                    normalized_skill = self._normalize_skill(ent.text)
                    if normalized_skill:
                        unique_skills.add(normalized_skill)
                        project_skills[current_project].add(normalized_skill)

        # Second pass: Fuzzy matching using word vectors
        for token in doc:
            if token.is_alpha and not token.is_stop:
                for skill in self.admin_skills:
                    if skill.lower() not in [s.lower() for s in unique_skills]:
                        similarity = token.similarity(self.nlp(skill)[0])
                        if similarity > self.skill_threshold:
                            unique_skills.add(skill)
                            project_skills[current_project].add(skill)

        self.nlp.remove_pipe("entity_ruler")
        return unique_skills, project_skills

    def _normalize_skill(self, skill_text: str) -> Optional[str]:
        """Normalize extracted skill to match known skills"""
        skill_text = skill_text.lower()
        for known_skill in self.admin_skills:
            if known_skill.lower() in skill_text:
                return known_skill
            # Handle abbreviations
            if len(skill_text) <= 3 and f" {skill_text} " in f" {known_skill.lower()} ":
                return known_skill
        return None

    def calculate_score(self, resume_text: str, target_job: Optional[str] = None) -> Dict:
        """
        Analyze resume and calculate match score

        Args:
            resume_text: Text content of resume
            target_job: Optional job title to match against

        Returns:
            Analysis result dictionary with:
                - score: Match percentage (0-100)
                - matched_skills: Dict of matched skills with weights
                - missing_skills: Dict of important missing skills
                - recommendations: List of improvement suggestions
                - target_job: The job title analyzed against
        """
        unique_skills, project_skills = self.extract_skills(resume_text)
        relevant_skills = self.job_requirements.get(target_job, self.admin_skills)

        # Calculate base score from skill matches
        base_score = sum(relevant_skills.get(skill, 0) for skill in unique_skills)

        # Add bonus for skills demonstrated in multiple projects
        skill_project_count = defaultdict(int)
        for skills in project_skills.values():
            for skill in skills:
                skill_project_count[skill] += 1

        diversity_bonus = sum(
            (count - 1) * relevant_skills.get(skill, 0) * 0.2
            for skill, count in skill_project_count.items()
            if count > 1
        )

        # Calculate final score (0-100 scale)
        total_score = base_score + diversity_bonus
        max_possible = sum(relevant_skills.values()) * 1.2  # 20% bonus potential
        final_score = min(100, round((total_score / max_possible) * 100, 1))

        # Prepare results
        matched_skills = {
            skill: relevant_skills[skill]
            for skill in unique_skills
            if skill in relevant_skills
        }

        missing_skills = {
            skill: weight
            for skill, weight in relevant_skills.items()
            if skill not in unique_skills and weight >= 3  # Only show important missing skills
        }

        # Pass final_score here to avoid recursion
        recommendations = self._generate_recommendations(
            unique_skills, project_skills, target_job, score=final_score
        )

        return {
            "score": final_score,
            "matched_skills": dict(sorted(matched_skills.items(), key=lambda x: -x[1])),
            "missing_skills": dict(sorted(missing_skills.items(), key=lambda x: -x[1])),
            "recommendations": recommendations,
            "target_job": target_job if target_job else "General",
            "projects": {k: list(v) for k, v in project_skills.items()}
        }

    def _generate_recommendations(
        self,
        skills: set,
        project_skills: Dict[str, set],
        target_job: Optional[str],
        score: float  # Added score parameter to avoid recursion
    ) -> List[str]:
        """Generate personalized recommendations to improve resume"""
        recommendations = []
        relevant_skills = self.job_requirements.get(target_job, self.admin_skills)

        # Missing important skills
        missing_skills = set(relevant_skills.keys()) - skills
        if missing_skills:
            top_missing = sorted(
                missing_skills,
                key=lambda skill: relevant_skills[skill],
                reverse=True
            )[:3]
            rec = (
                f"Consider adding experience with: {', '.join(top_missing)}. "
                "These are high-value skills in your target domain."
            )
            recommendations.append(rec)

        # Skills only appearing once
        single_project_skills = [
            skill for skill in skills
            if sum(skill in proj_skills for proj_skills in project_skills.values()) == 1
        ]
        if single_project_skills:
            rec = (
                "Some skills only appear in one context. Consider demonstrating "
                f"{', '.join(single_project_skills[:3])} in multiple projects."
            )
            recommendations.append(rec)

        # Project diversity
        if len(project_skills) < 2:
            recommendations.append(
                "Highlight more projects/work experiences to demonstrate skill diversity."
            )

        # Score-specific advice
        if score < 70:
            recommendations.append(
                "Increase quantifiable achievements (e.g., 'Improved performance by 30%')."
            )
        if score < 60:
            recommendations.append(
                "Reorganize resume to better highlight technical skills near the top."
            )

        return recommendations
