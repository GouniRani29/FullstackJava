import api from "./api";

export const skillService = {

    // Get All Skills
    async getAllSkills() {

        const response = await api.get("/getallskills");

        return response.data;

    },

    // Get Skill By ID
    async getSkillById(id) {

        const response = await api.get(`/skill/${id}`);

        return response.data;

    },

    // Create Skill
    async createSkill(skill) {

        const response = await api.post("/skill/create", skill);

        return response.data;

    },

    // Update Skill
    async updateSkill(skill) {

        const response = await api.put("/skill/update", skill);

        return response.data;

    },

    // Delete Skill
    async deleteSkill(id) {

        const response = await api.delete(`/skill/delete/${id}`);

        return response.data;

    }

};