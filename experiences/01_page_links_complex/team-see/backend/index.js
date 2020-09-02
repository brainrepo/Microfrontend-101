const R = require("ramda");
const fs = require("fs");
const fastify = require("fastify")({
  logger: false,
});
const pageLimit = 40;
fastify.register(require("fastify-cors"), {
  origin: "*",
});


fastify.get("/:id", (request, reply) => {
  const page = request?.query?.page || 0;
  fs.readFile("./database.json", (err, data) => {
    if (err) {
      console.log(err);
      reply.err(err);
    }
    element = JSON.parse(data).filter(e => e.imdbID == request.params.id)[0] || {error: 'not found'};
    reply.type("application/json").code(200);
    reply.send(element);
  });
});

fastify.get("/", (request, reply) => {
  const page = request?.query?.page || 0;
  fs.readFile("./database.json", (err, data) => {
    if (err) {
      console.log(err);
      reply.err(err);
    }
    data = R.slice(
      page * pageLimit,
      page * pageLimit + pageLimit,
      JSON.parse(data)
    );
    reply.type("application/json").code(200);
    reply.send(data);
  });
});




fastify.listen(3000, "0.0.0.0", (err, address) => {
  if (err) {
    throw err;
  }
  fastify.log.info(`server listening on ${address}`);
});
