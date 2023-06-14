const User = require("./models/Usermodel");

const resolvers = {
  Query: {
    getUser: async (_, { email }) => {
      return await User.findOne({email: email});
    },
  },
};

module.exports = resolvers;
