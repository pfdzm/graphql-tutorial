var { graphql, buildSchema } = require("graphql");

// construct a schema, using GraphQL schema language
var schema = buildSchema(`
type Query {
    hello: String
}`);

// the root provides a resolver function for each API endpoint

var root = {
  hello: () => {
    return "Hello world!";
  }
};

// run the graphql query '{ hello }' and print out the response

graphql(schema, "{ hello }", root).then(response => {
  console.log(response);
});
