import api from "./api";

export const projectService = {

    // Get All Projects
    async getAllProjects() {

        const response = await api.get("/getallprojects");

        return response.data;

    },

    // Get Project By ID
    async getProjectById(id) {

        const response = await api.get(`/project/${id}`);

        return response.data;

    },

    // Create Project
    async createProject(project) {

        const response = await api.post("/project/create", project);

        return response.data;

    },

    // Update Project
    async updateProject(project) {

        const response = await api.put("/project/update", project);

        return response.data;

    },

    // Delete Project
    async deleteProject(id) {

        const response = await api.delete(`/project/delete/${id}`);

        return response.data;

    }

};