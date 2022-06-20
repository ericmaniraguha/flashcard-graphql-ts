import { extendType, nonNull, stringArg } from 'nexus';
import { createNewUser } from './resolver';

export const createUser = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createNewUser', {
      type: 'user',
      args: {
        names: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: createNewUser,
    });
  },
});
