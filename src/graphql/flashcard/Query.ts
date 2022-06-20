import { extendType, intArg, nonNull, stringArg } from 'nexus';
import { getAllCards, getCardOwners, getOneCard } from './Resolver';

export const getCards = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('getAllCards', {
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

    t.nonNull.list.field('getCardOwners', {
      type: 'card',
      resolve: getCardOwners,
    });
  },
});
