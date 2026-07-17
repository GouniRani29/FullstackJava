import api from "./api";

export const authService = {

    async login(email, password) {

        const response = await api.post("/login", {
            email,
            password
        });

        // Save JWT
        localStorage.setItem("token", response.data.token);

        return response.data;
    },

    async register(user) {

        const response = await api.post("/user/create", user);

        return response.data;
    },

    logout() {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

    },

    getCurrentUser() {

        const user = localStorage.getItem("user");

        return user ? JSON.parse(user) : null;

    }

};