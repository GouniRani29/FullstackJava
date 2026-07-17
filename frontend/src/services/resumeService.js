import api from "./api";

export const resumeService = {

  // Get all resumes
  async getAllResumes() {
    const response = await api.get("/getallresumes");
    return response.data;
  },

  // Get resume by ID
  async getResumeById(id) {
    const response = await api.get(`/resume/${id}`);
    return response.data;
  },

  // Create resume
  async createResume(resume) {
    const response = await api.post("/resume/create", resume);
    return response.data;
  },

  // Update resume
  async updateResume(resume) {
    const response = await api.put("/resume/update", resume);
    return response.data;
  },

  // Delete resume
  async deleteResume(id) {
    const response = await api.delete(`/resume/delete/${id}`);
    return response.data;
  }

};