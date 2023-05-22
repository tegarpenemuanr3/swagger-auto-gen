const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./app.js"]; // Replace './app.js' with the path to your Express.js app file

const doc = {
  info: {
    title: "Your API Title",
    description: "Your API Description",
  },
  host: "localhost:3000", // Replace with your API host
  basePath: "/",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Example",
      description: "Example endpoints",
    },
  ],
  securityDefinitions: {
    // Add your security definitions if needed
  },
  definitions: {
    // Add your definitions if needed
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
