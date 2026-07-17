import api from "./api";

export const certificateService = {

    // Get All Certificates
    async getAllCertificates() {

        const response = await api.get("/getallcertifications");

        return response.data;

    },

    // Get Certificate By ID
    async getCertificateById(id) {

        const response = await api.get(`/certification/${id}`);

        return response.data;

    },

    // Create Certificate
    async createCertificate(certificate) {

        const response = await api.post("/certification/create", certificate);

        return response.data;

    },

    // Update Certificate
    async updateCertificate(certificate) {

        const response = await api.put("/certification/update", certificate);

        return response.data;

    },

    // Delete Certificate
    async deleteCertificate(id) {

        const response = await api.delete(`/certification/delete/${id}`);

        return response.data;

    }

};