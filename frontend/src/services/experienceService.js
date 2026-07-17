import api from "./api";

export const experienceService = {

    // Get All Experiences
    async getAllExperiences() {

        const response = await api.get("/getallexperiences");

        return response.data;

    },

    // Get Experience By ID
    async getExperienceById(id) {

        const response = await api.get(`/experience/${id}`);

        return response.data;

    },

    // Create Experience
    async createExperience(experience) {

        const response = await api.post("/experience/create", experience);

        return response.data;

    },

    // Update Experience
    async updateExperience(experience) {

        const response = await api.put("/experience/update", experience);

        return response.data;

    },

    // Delete Experience
    async deleteExperience(id) {

        const response = await api.delete(`/experience/delete/${id}`);

        return response.data;

    }

};