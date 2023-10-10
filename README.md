# Items API using Fastify 😊

I am learning about APIs and CURD operations.This is the second time I am buildin an API. This is a simple API using nodejs and fastify framework. I have used a fake data created by ChatGPT to build this API.

## Table of Contents 👇

1. [Documentation](#documentation)
2. [Installation & Usage](#installation--usage)
3. [Endpoints](#endpoints)
4. [Dependencies](#dependencies)
5. [Author](#author)


## Documentation

I have used `fasify-openapi-docs` plugin to generate docs autometically.

```
localhost:5000/docs/
```

## Installation & Usage

- Fork the repository in your account in Github.
- Make project directory and go inside the directory.
- Clone the repository.
- Install dependencies.
- Start or run your API on the local machine.
- Access the API in your browser or tools like Postman. I have used Rest Client VS Code extension.

```terminal
# Make a directory
mkdir items-api-fastify

# go inside the directory
cd items-api-fastify

# Clone the repo
git clone https://github.com/...(repo url)

# Install dependencies
npm install

# Start the API
npm start

# Access the API in your web browser
http://localhost:5000/items
```

## Endpoints

### GET

```
# To get all the todos.
localhost:5000/items

# To get a single todo.
localhost:5000/items/:itemId
```

### POST

```
# To add a new todo.
localhost:5000/items
```

### PUT

```
# To update a single todo.
localhost:5000/items/:itemId
```

### DELETE

```
# To delete a single todo.
localhost:5000/items/:itemId
```

## Dependencies
Here are some of the major dependencies used in this project:

- Fastify: [^4.23.2]
- fastify-openapi-docs: [^2.2.1]
- nanoid: [^5.0.1]
- nodemon: [^3.0.1]
- pino-pretty: [^10.2.3]

## Author

Dipankar Paul | dipankarpaul2k@gmail.com