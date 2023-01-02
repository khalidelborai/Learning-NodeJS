// Importing the http module
const http = require("http");
const { users, home, about, notFound } = require("./handlers");

const routesMap = {
  "/users": users,
  "/": home,
  "/about": about,
};

// requestListener is a function that will be called every time a request is made to the server
const requestListener = (req, res) => {
  const { url } = req;
  const route = routesMap[url] || notFound;
  route(req, res);
};

// Creating a server with the requestListener function
const server = http.createServer(requestListener);

// Starting the server on port 3000
server.listen(3000);

console.log("Server is running on port 3000, http://localhost:3000");
