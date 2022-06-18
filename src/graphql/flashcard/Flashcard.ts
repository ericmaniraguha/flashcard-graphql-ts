import { objectType } from 'nexus';

// Criminal Law Flashcards
export const card = objectType({
  name: 'card',
  definition(t) {
    t.nonNull.int('id'),
      t.nonNull.string('question'),
      t.nonNull.string('answer');
  },
});
