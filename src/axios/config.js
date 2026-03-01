import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
        customHeader: "TESTE",
    },
});

export default blogFetch;