import api from "./api";

export const achievementService = {

    // Get All Achievements
    async getAllAchievements() {

        const response = await api.get("/getallachievements");

        return response.data;

    },

    // Get Achievement By ID
    async getAchievementById(id) {

        const response = await api.get(`/achievement/${id}`);

        return response.data;

    },

    // Create Achievement
    async createAchievement(achievement) {

        const response = await api.post("/achievement/create", achievement);

        return response.data;

    },

    // Update Achievement
    async updateAchievement(achievement) {

        const response = await api.put("/achievement/update", achievement);

        return response.data;

    },

    // Delete Achievement
    async deleteAchievement(id) {

        const response = await api.delete(`/achievement/delete/${id}`);

        return response.data;

    }

};