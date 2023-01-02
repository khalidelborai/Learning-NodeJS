const {
  jsonResponse,
  htmlResponse,
  textResponse,
  notFoundResponse,
} = require("./utils");
const Url = require("url");
const querystring = require("querystring");

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

const form = (req, res) => {
  htmlResponse(
    res,
    200,
    `
    <html>
    <head>
    <title>Form</title>
    </head>
    <body>
    <h1>Form</h1>
    <form action="/query" method="GET">
      <label for="name">Name</label>
      <input type="text" name="name" />
      <label for="age">Age</label>
      <input type="text" name="age" />
      <input type="submit" value="Submit" />
    </form>
    </body>
    </html>
  `
  );
};

const postForm = (req, res) => {
  htmlResponse(
    res,
    200,
    `
    <html>
    <head>
    <title>Form</title>
    </head>
    <body>
    <h1>Form</h1>
    <form action="/body" method="POST">
      <label for="name">Name</label>
      <input type="text" name="name" />
      <label for="age">Age</label>
      <input type="text" name="age" />
      <input type="submit" value="Submit" />
    </form>
    </body>
    </html>
  `
  );
};

const body = (req, res) => {
  // content type
  const contentType = req.headers["content-type"];
  if (contentType === "application/json") {
    let body = "";
    req.on("data", function (chunk) {
      body += chunk.toString();
    });
    req.on("end", function () {
      jsonResponse(res, 200, JSON.parse(body));
    });
  } else if (contentType === "application/x-www-form-urlencoded") {
    let body = "";
    req.on("data", function (chunk) {
      body += chunk.toString();
    });
    req.on("end", function () {
      jsonResponse(res, 200, querystring.parse(body));
    });
  }
};
module.exports = {
  users,
  home,
  about,
  notFound,
  query,
  form,
  postForm,
  body,
};
