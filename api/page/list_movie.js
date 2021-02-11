const supertest = require("supertest");
const env = require("dotenv").config();

const api = supertest(process.env.BASE_URL);

const getMovieList = (key, search) => api.get('')

    .set("Content-Type", 'application/json')
    .set("Accept", "application/json")
    .query({
        apiKey: key,
        s: search
    });

module.exports = {
    getMovieList,
}