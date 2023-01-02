const jsonResponse = (res, statusCode, data) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("X-Powered-By", "NodeJS");
  res.statusCode = statusCode;
  res.end(JSON.stringify(data));
};

const htmlResponse = (res, statusCode, data) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("X-Powered-By", "NodeJS");
  res.statusCode = statusCode;
  res.end(data);
};

const textResponse = (res, statusCode, data) => {
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("X-Powered-By", "NodeJS");
  res.statusCode = statusCode;
  res.end(data);
};

const notFoundResponse = (res) => {
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("X-Powered-By", "NodeJS");
  res.statusCode = 404;
  res.end("Not Found");
};

module.exports = {
  jsonResponse,
  htmlResponse,
  textResponse,
  notFoundResponse,
};
