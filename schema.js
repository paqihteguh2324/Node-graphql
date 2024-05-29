const { gql } = require('apollo-server');

const typeDefs = gql`
    type Employee{
        _id: ID!,
        name: String,
        age: Int,
        address: String
    }

    type Query {
        getAllEmployee: [Employee]!
    }

    type Mutation {
        createEmployee(
            name: String,
            age: Int,
            address: String
        ):Employee!,

        updateEmployee(
            _id: ID!,
            name: String,
            age: Int,
            address: String
        ):Employee!,
        
        deleteEmployee(
            _id:ID!
        ):Boolean
    }
`;

module.exports = typeDefs;