const { buildSchema } = require('graphql');

const schema = buildSchema(`
  scalar Date

  type Car {
    _id: ID!
    number: String!
    model: String!
    createdAt: Date!
    updatedAt: Date!
  }

  type CarStatus {
    _id: ID!
    owner: String!
    status: String!
    carId: Car!
    createdAt: Date!
    updatedAt: Date!
  }

  input AddCarInput {
    number: String!
    model: String!
  }

  input UpdateCarInput {
    number: String
    model: String
  }

  input AddCarStatusInput {
    owner: String!
    status: String!
    carId: ID!
  }

  input UpdateCarStatusInput {
    owner: String
    status: String
    carId: ID
  }

  type Query {
    getCars: [Car!]!
    getCarById(id: ID!): Car
    getCarStatuses: [CarStatus!]!
    getCarStatusById(id: ID!): CarStatus
  }

  type Mutation {
    addCar(input: AddCarInput!): Car!
    updateCar(id: ID!, input: UpdateCarInput!): Car!
    deleteCar(id: ID!): Car!
    addCarStatus(input: AddCarStatusInput!): CarStatus!
    updateCarStatus(id: ID!, input: UpdateCarStatusInput!): CarStatus!
    deleteCarStatus(id: ID!): CarStatus!
  }
`);

module.exports = schema;
