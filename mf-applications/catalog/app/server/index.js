const fastify = require("fastify")({
  logger: false,
});
const R = require("ramda");
const fs = require("fs");
const Fuse = require('fuse.js')

const page = 30;


fastify.register(require('fastify-cors'), {
  "origin": "*"
})

fastify.get("/", (request, reply) => {
  fs.readFile('./database.json', (err, data) => {
    if(err) {
      reply.err(err)
    }
    data = R.slice(
      (+request?.query?.page || 0) * page,
      ((+request?.query?.page || 0) * page) +page,
      JSON.parse(data)
    );
    reply.type("application/json").code(200);
    reply.send(data)
  });
});

fastify.get("/search", (request, reply) => {
  fs.readFile('./database.json', (err, data) => {
    if(err) {
      reply.err(err)
    }
    
    const options = {
      includeScore: true,
      keys: ['Title','Genre', 'Writer', 'Actors','Plot', 'Production']
    }
    
    const fuse = new Fuse(JSON.parse(data), options)
    const result = fuse.search(request?.query?.q)


    reply.type("application/json").code(200);
    reply.send(result.map(e => e.item))
  });
});


fastify.listen(3000, (err, address) => {
  if (err) throw err;
  fastify.log.info(`server listening on ${address}`);
});
