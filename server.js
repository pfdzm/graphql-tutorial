const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

// construct a schema, using GraphQL schema language
const schema = buildSchema(`
type Query {
    hello: String
}`);

// the root provides a resolver function for each API endpoint

const root = {
  hello: () => {
    return "Hello world!";
  }
};

// run the graphql query '{ hello }' and print out the response
const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
const PORT = process.env.PORT || 4000;
app.listen(PORT);
console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
