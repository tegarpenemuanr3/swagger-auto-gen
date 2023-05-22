const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger_output.json"); // Path to your generated swagger_output.json file

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Your API routes and other middleware

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/api-docs");
});
