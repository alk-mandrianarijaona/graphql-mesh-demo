import { Resolvers } from "./generated/mesh";

export const resolvers: Resolvers = {
  User: {
    isAlkemicsAdmin: () => {
      return false;
    },
    recentOrders: async (root, args, context) => {
      const FakeQL = context["FakeQL Shop"];
      const result = await FakeQL.api.orders({ limit: 20 });
      return result;
    },
  },
};
