import api from "./api";

export const educationService={

    getAll(){

        return api.get("/getalleducations");

    },

    get(id){

        return api.get(`/education/${id}`);

    },

    create(data){

        return api.post("/education/create",data);

    },

    update(data){

        return api.put("/education/update",data);

    },

    delete(id){

        return api.delete(`/education/delete/${id}`);

    }

}