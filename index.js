const mongoose = require('mongoose');
const {ApolloServer} = require('apollo-server')

const typeDefs = require('./schema')
const resolvers = require('./resolver')

mongoose.connect('mongodb://localhost:27017/db-employee', { useNewUrlParser: true, useUnifiedTopology: true});

const server = new ApolloServer ({typeDefs,resolvers});

server.listen()
      .then(({url}) =>{
        console.log(`System berjalan di ${url}`);
      })