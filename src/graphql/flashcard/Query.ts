import { extendType, intArg, nonNull, stringArg } from 'nexus';
import { getAllCards, getOneCard } from './Resolver';

export const getCards = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('getCards', {
      type: 'card',
      resolve: getAllCards,
    });
    t.nonNull.field('getOneCard', {
      type: 'card',
      args: {
        id: nonNull(intArg()),
      },
      resolve: getOneCard,
    });
  },
});
