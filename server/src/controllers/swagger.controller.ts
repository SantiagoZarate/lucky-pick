import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { envs } from "../config/envs";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Lucky Pick API",
      version: "1.0.0",
      description: "API documentation for lucky pick",
    },
    servers: [
      {
        url: `http://localhost:${envs.PORT}`,
      },
    ],
  },
  apis: ["openapi.yaml"],
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
