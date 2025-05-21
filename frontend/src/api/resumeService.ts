export const analyzeResume = async (file: File, targetJob: string | null) => {
  const formData = new FormData();
  formData.append('file', file);
  if (targetJob) formData.append('target_job', targetJob);

  try {
    const response = await fetch('http://localhost:5000/analyze', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to connect to the analysis service. Please try again later.');
  }
};