import { Resolvers } from "./generated/mesh";
const gravatar = require("gravatar.js");

export const resolvers: Resolvers = {
  Vehicle: {
    isOwnedByAlkemics: () => {
      return Math.random() >= 0.5;
    },
  },
  User: {
    slackName: () => {
      return "@thadeo";
    },
    gravatarUrl: (root) => {
      return gravatar.url(root.username);
    },
  },
};
