// this code emulates a client-side request to our GraphQL API
const fetch = require("node-fetch");

const author = "pfdzm";
const content = "fuck it dude, let's go bowling";
const query = `
  mutation CreateMessage($input: MessageInput) {
      createMessage(input: $input) {
        id
      }
    }
  `;

fetch("http://localhost:4000", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify({
    query,
    variables: {
      input: {
        author,
        content
      }
    }
  })
})
  .then(r => r.json())
  .then(data => console.log("data returned: ", data));
