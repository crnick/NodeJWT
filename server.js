require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

app.get("/posts", authenticateUser, (req, resp) => {});

app.post("/", (req, resp) => {
  const username = req.body.username;
  const user = { name: username }; //what you want to serialize
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN); //if u need expiration un need to have refresh token
  resp.json({ accessToken: accessToken }); //create a access token for a user to contain the information
});

function authenticateUser(req, resp, next) {
  const authHeader = req.headers["authorization"]; //retrieve the token from the header
}

app.listen(3000, () => console.log("server is running"));
