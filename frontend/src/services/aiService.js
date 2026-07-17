import api from "./api";

export const aiService = {

    async chat(message) {

        const response = await api.post("/ai/chat", {
            message: message
        });

        return response.data.reply;
    }

};