import { Resolvers } from "./generated/mesh";

export const resolvers: Resolvers = {
  Vehicle: {
    isOwnedByAlkemics: () => {
      return Math.random() >= 0.5;
    },
  },
};
