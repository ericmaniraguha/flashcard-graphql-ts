import { extendType, nonNull, stringArg } from 'nexus';
import { getAllUser, getOneUser } from './resolver';

export const getUsers = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('getUsers', {
      type: 'user',
      resolve: getAllUser,
    });
    t.nonNull.field('getOneUser', {
      type: 'user',
      args: {
        email: nonNull(stringArg()),
      },
      resolve: getOneUser,
    });
  },
});
