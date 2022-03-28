import axios from "axios";
export default axios.create({
    /*
    * initialize axios to connect to the back end
    *
    * baseURL:
    *   The url of the backend sever
    * headers:
    *   axios req headers
    */
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json"
    }
});