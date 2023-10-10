import * as itemSchemas from "../controllers/items.schemas.js";

export function itemRoutes(fastify, options, done) {
  // testing routes
  fastify.get("/", (req, reply) => {
    reply.send({ message: "Route is working👍😊" });
  });
  // get all items
  fastify.get("/items", itemSchemas.getItemsOpts);
  // get item by id
  fastify.get("/items/:itemId", itemSchemas.getItemByIdOpts);
  // add a new item
  fastify.post("/items", itemSchemas.addItemsOpts);
  // update a item
  fastify.put("/items/:itemId", itemSchemas.updateItemBuIdOpts);
  // delete a item
  fastify.delete("/items/:itemId", itemSchemas.deleteItemByIdOpts);
  done();
}
