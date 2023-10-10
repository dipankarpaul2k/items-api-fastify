import fakeItems from "../fakeItemsDB.js";
import { nanoid } from "nanoid";

export async function getAllItems(req, reply) {
  return reply.send(fakeItems);
}

export async function getItemById(req, reply) {
  const { itemId } = req.params;
  const item = fakeItems.find((item) => item.id === itemId);
  return reply.send(item);
}

export async function addItem(req, reply) {
  const { name } = req.body;
  const newItem = {
    id: nanoid(),
    name,
  };

  fakeItems.unshift(newItem);
  return reply.send(newItem);
}

export async function updateItemById(req, reply) {
  const { itemId } = req.params;
  const { name } = req.body;
  const updatedItem = {
    id: itemId,
    name,
  };

  const index = fakeItems.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    fakeItems[index] = updatedItem;
  }

  return reply.send(updatedItem);
}

export async function deleteItemById(req, reply) {
  const { itemId } = req.params;
  const index = fakeItems.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    fakeItems.splice(index, 1);
  }

  return reply.send({ message: `Item id ${itemId} has been delete.` });
}
