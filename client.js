// this code emulates a client-side request to our GraphQL API
const fetch = require("node-fetch");

fetch("http://localhost:4000/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify({
    query: `query {
      getDie(numSides: 6) {
        rollOnce
        roll(numRolls: 3)
      }
    }`
  })
})
  .then(r => r.json())
  .then(data => console.log("data returned: ", data));
