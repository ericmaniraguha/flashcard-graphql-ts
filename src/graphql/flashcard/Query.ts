import { extendType, intArg, nonNull, arg } from 'nexus';
import { getAllCards, getOwnersCard, getOneCard } from './Resolver';

export const getCards = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('getAllCards', {
      type: 'card',
      args: {
        orderBy: arg({ type: 'Sort' }),
      },
      resolve: getAllCards,
    });

    t.nonNull.field('getOneCard', {
      type: 'card',
      args: {
        id: nonNull(intArg()),
      },
      resolve: getOneCard,
    });

    t.nonNull.list.field('getOwnersCard', {
      type: 'card',
      args: {
        orderBy: arg({ type: 'Sort' }),
      },
      resolve: getOwnersCard,
    });
  },
});
