const enums = require("../../../src/enums");
const keywords = require("../keywords");
const speaker = require("../people/tanmai-gopal");

module.exports = {
  speakers: [speaker],
  title: "Writing a realtime GraphQL backend as a compiler in Haskell",
  description: `At Hasura, we’ve been building a high-performance GraphQL backend that can handle a large number of subscription connections. We took a few interesting approaches to tackle this problem, and in this talk I’ll go over the key architectural decisions, programming constructs and of course the unforeseen implementation pitfalls we ran into. I’ll also cover tools from the Haskell ecosystem that made this possible. These are some of the topics I’ll touch upon:

* Fast GraphQL parsing with parser combinators
* Modelling and manipulating the GraphQL AST with algebraic data types
* Software Transactional Memory: Concurrency constructs for scaling graphql subscriptions
`,
  type: enums.LIGHTNING_TALK,
  keywords: [keywords.GRAPHQL],
};
