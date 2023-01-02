const {
  jsonResponse,
  htmlResponse,
  textResponse,
  notFoundResponse,
} = require("./utils");
const Url = require("url");

const users = (req, res) => {
  jsonResponse(res, 200, {
    users: [
      {
        id: 1,
        name: "John Doe",
      },
      {
        id: 2,
        name: "Jane Doe",
      },
    ],
  });
};

const home = (req, res) => {
  htmlResponse(res, 200, "<h1>Hello World</h1>");
};

const about = (req, res) => {
  textResponse(res, 200, "About Page");
};

const notFound = (req, res) => {
  notFoundResponse(res);
};

const query = (req, res) => {
  const { url } = req;
  const { query } = Url.parse(url, true);
  jsonResponse(res, 200, query);
};

module.exports = {
  users,
  home,
  about,
  notFound,
  query,
};
