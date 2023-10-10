import * as itemController from "./items.handlers.js";

const itemSchema = {
  id: { type: "string" },
  name: { type: "string" },
};

export const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: itemSchema,
        },
      },
    },
  },
  handler: itemController.getAllItems,
};

export const getItemByIdOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: itemSchema,
      },
    },
  },
  handler: itemController.getItemById,
};

export const addItemsOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
    },
    response: {
      200: {
        type: "object",
        properties: itemSchema,
      },
    },
  },
  handler: itemController.addItem,
};

export const updateItemBuIdOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
    },
    response: {
      200: {
        type: "object",
        properties: itemSchema,
      },
    },
  },
  handler: itemController.updateItemById,
};

export const deleteItemByIdOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: itemController.deleteItemById,
};
