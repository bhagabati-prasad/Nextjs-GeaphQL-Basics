import getAllUsers from './getAllUsers';
import getSingleUser from './getSingleUser';
import userData from '../demoData';

const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      return 'World!';
    },
    users: (_, __, ___) => getAllUsers(userData),
    singleUser: (_, args, ___) => getSingleUser(userData, args),
  },
};

export default resolvers;
