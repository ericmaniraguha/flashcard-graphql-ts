import { objectType } from 'nexus';
// import { userUniqueCard } from './resolver';

export const user = objectType({
  name: 'user',
  definition(t) {
    t.nonNull.int('id'),
      t.nonNull.string('names'),
      t.nonNull.string('email'),
      t.nonNull.string('password'),
      t.nonNull.list.nonNull.field('cards', {
        type: 'card',
        resolve(parent, args, context) {
          return context.prisma.user
            .findUnique({ where: { id: parent.id } })
            .flashcards();
        },
      });
  },
});
