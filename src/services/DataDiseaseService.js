import http from "../http-common";

class DiseaseDataService {
    getAll() {
        return http.get("/diseases");
    }

    get(id) {
        return http.get(`/diseases/${id}`);
    }

    create(data) {
        return http.post("/diseases", data);
    }

    update(id, data) {
        return http.put(`/diseases/${id}`, data);
    }

    delete(id) {
        return http.delete(`/diseases/${id}`);
    }

    deleteAll() {
        return http.delete("/diseases");
    }

    findByTitle(name) {
        return http.get(`/diseases?name=${name}`);
    }

}

export default new DiseaseDataService();
