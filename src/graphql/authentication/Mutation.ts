import { extendType, nonNull, stringArg } from 'nexus';
import { login, SignupResolver } from './Resolver';

export const signup = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('Signup', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
        names: nonNull(stringArg()),
      },
      resolve: SignupResolver,
    });
    t.nonNull.field('login', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: login,
    });
  },
});
