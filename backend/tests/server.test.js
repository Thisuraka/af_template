const app = require("../server");
// const Post = require("../models/Post");
const mongoose = require("mongoose");
const supertest = require("supertest");

afterEach((done) => {
  mongoose.connection.close(() => done());
});
test("GET /calculation", async () => {
  const array = [100, 20, 40, 60, 80];
  await supertest(app)
    .get(`/calculation?array=${array}`)
    .expect(200)
    .then((response) => {
      expect(response.text).toBe("300");
    });
}, 60000);
