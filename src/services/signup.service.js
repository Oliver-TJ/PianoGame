import http from "../http-common";

class SignUpDataService {
    getAll() {
        return http.get("/signup");
    }

    get(id) {
        return http.get(`/signup/${id}`);
    }

    create(data) {
        return http.post(`/signup/${data}`);
    }

    update(id, data) {
        return http.put(`/signup/${id}`, data);
    }

    delete(id) {
        return http.delete(`/signup/${id}`);
    }

    deleteAll() {
        return http.delete(`/signup`);
    }

    findByTitle(title) {
        return http.get(`signup?title=${title}`);
    }
}

export default new SignUpDataService();