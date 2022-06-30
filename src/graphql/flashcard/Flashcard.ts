import { objectType, enumType } from 'nexus';

// Criminal Law Flashcards  -- This is a flashcard type
export const card = objectType({
  name: 'card',
  definition(t) {
    t.nonNull.int('id'),
      t.nonNull.string('question'),
      t.nonNull.string('answer');
  },
});
export const Sort = enumType({
  name: 'Sort',
  members: ['asc', 'desc'],
});
