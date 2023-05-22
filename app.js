const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger_output.json"); // Path to your generated swagger_output.json file

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Your API routes and other middleware
app.get("/api/users", (req, res) => {
  // Your logic to retrieve users from the database or any other data source
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ];

  res.json(users);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/api-docs");
});

// npm run generate-swagger
// node app.js
