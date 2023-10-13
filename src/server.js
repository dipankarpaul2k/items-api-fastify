import Fastify from "fastify";
const fastify = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

// import and register "fastify-openapi-docs" for auto documentation
import fastifyOpenapiDocs from "fastify-openapi-docs";
fastify.register(fastifyOpenapiDocs, {
  openapi: {
    openapi: "3.0.3",
    info: {
      title: "Item API | fastify",
      description: "API documentation for Item API using Fastify.",
      contact: {
        name: "Dipankar Paul",
        email: "dipankarpaul2k@gmail.com",
      },
    },
  },
});

// import and register item routes
import { itemRoutes } from "./routes/items.routes.js";
fastify.register(itemRoutes);

const PORT = 5000;
const start = async () => {
  try {
    await fastify.listen({ port: PORT });
    fastify.log.info(`listening to port ${PORT}.`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal, async () => {
    await fastify.close();
    process.exit(0);
  });
});

start();
