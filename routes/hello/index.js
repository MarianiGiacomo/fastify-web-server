'use strict'

//So hello.html can be accessed both from /hello and /hello.html
module.exports = async (fastify, opts) => {
  fastify.get('/', async (request, reply) => {
    return reply.sendFile('hello.html')
  })
}