import api from "./api";

export const userService={

    getAllUsers(){

        return api.get("/getallusers");

    },

    getUser(id){

        return api.get(`/user/${id}`);

    },

    createUser(user){

        return api.post("/user/create",user);

    },

    updateUser(user){

        return api.put("/user/update",user);

    },

    deleteUser(id){

        return api.delete(`/user/delete/${id}`);

    }

}