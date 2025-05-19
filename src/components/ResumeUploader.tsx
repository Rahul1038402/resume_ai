
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface ResumeUploaderProps {
  onFileSelected: (file: File) => void;
}

const ResumeUploader = ({ onFileSelected }: ResumeUploaderProps) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      validateAndSetFile(file);
    }
  };

  const validateAndSetFile = (file: File) => {
    // Check if file is PDF or DOCX
    const validTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    
    if (!validTypes.includes(file.type)) {
      toast.error("Please upload a PDF or DOCX file only.");
      return;
    }

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size exceeds 5MB limit.");
      return;
    }

    setFileName(file.name);
    onFileSelected(file);
    toast.success("Resume uploaded successfully!");
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      validateAndSetFile(files[0]);
    }
  };

  return (
    <Card className={`p-8 border-2 border-dashed ${isDragging ? 'border-resume-secondary bg-resume-light' : 'border-gray-300'} rounded-lg transition-colors`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-resume-light rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-resume-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-2">
          {fileName ? 'Resume Uploaded' : 'Upload Your Resume'}
        </h3>
        
        <p className="text-sm text-gray-500 mb-4">
          {fileName || 'Drop your PDF or DOCX file here, or click to browse'}
        </p>
        
        <div className="file-input-wrapper relative">
          <Button variant="outline" className="relative z-10">
            {fileName ? 'Change File' : 'Browse Files'}
          </Button>
          <input 
            type="file" 
            accept=".pdf,.docx" 
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
        
        {fileName && (
          <div className="mt-4 flex items-center justify-center">
            <div className="text-sm bg-resume-light rounded-full px-3 py-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-resume-primary mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{fileName}</span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ResumeUploader;
