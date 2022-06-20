import { extendType, nonNull, stringArg, intArg } from 'nexus';
import { createNewCard, deleteCard, updateCard } from './Resolver';

export const createCard = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createNewCard', {
      type: 'card',
      args: {
        question: nonNull(stringArg()),
        answer: nonNull(stringArg()),
      },
      resolve: createNewCard,
    });

    t.nonNull.field('updateCard', {
      type: 'card',
      args: {
        id: nonNull(intArg()),
        question: nonNull(stringArg()),
        answer: nonNull(stringArg()),
      },
      resolve: updateCard,
    });

    t.nonNull.field('deleteCard', {
      type: 'String',
      args: {
        id: nonNull(intArg()),
      },
      resolve: deleteCard,
    });
  },
});
