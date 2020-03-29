const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
      ip: String
  }
`);

const loggingMiddleware = (req, res, next) => {
  console.log("ip:", req.ip);
  next();
};

const root = {
  ip: function(arg, request) {
    return request.ip;
  }
};

const app = express();
app.use(loggingMiddleware);
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
