const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  const port = process.env.PORT || 5000;
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:" + port,
      changeOrigin: true,
    })
  );
};
