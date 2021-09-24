import lodash from 'lodash';

export default (users, args) => {
  console.log({ users, args });
  return lodash.find(users, { id: args.id });
};
