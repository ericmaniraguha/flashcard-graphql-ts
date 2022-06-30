import { Context, context } from '../../context';
import _ from 'lodash';

const getAllCards = async (parent: any, args: any, context: any) => {
  const allCards = await context.prisma.flashcard.findMany();
  if (args.orderBy) {
    return _.orderBy(allCards, ['question'], [args.orderBy]);
  }
  return allCards;
};

const getOneCard = async (parent: any, args: any, context: any) => {
  const existingCard = await context.prisma.flashcard.findUnique({
    where: {
      id: args.id,
    },
  });
  if (!existingCard) throw new Error('There is no flashcard with such ID');
  return existingCard;
};

const getOwnersCard = async (parent: any, args: any, context: any) => {
  const userId = context.userId;
  if (!userId) throw new Error('Access denied');
  const ownCards = await context.prisma.flashcard.findMany({
    where: { createdById: userId },
  });
  if (args.orderBy) {
    return _.orderBy(ownCards, ['question'], [args.orderBy]);
  }
  return ownCards;
};

const createNewCard = async (parent: any, args: any, context: any) => {
  const userId = context.userId;
  if (!userId) throw new Error('Access denied');
  const createACard = await context.prisma.flashcard.create({
    data: {
      question: args.question,
      answer: args.answer,
      createdById: userId,
    },
  });

  return createACard;
};

const updateCard = async (parent: any, args: any, context: any) => {
  const userId = context.userId;
  if (!userId) throw new Error('Access denied');

  const cardToBeUpdate = await context.prisma.flashcard.findUnique({
    where: {
      id: args.id,
    },
  });
  if (!cardToBeUpdate) throw new Error('No such card found.');
  if (cardToBeUpdate.createdById !== userId)
    throw new Error('You have no access to this card.');

  const updatedCard = await context.prisma.flashcard.update({
    where: {
      id: args.id,
    },
    data: {
      question: args.question,
      answer: args.answer,
    },
  });
  return updatedCard;
};

const deleteCard = async (parent: any, args: any, context: any) => {
  const userId = context.userId;
  if (!userId) throw new Error('Access denied!');
  const cardToDelete = await context.prisma.flashcard.findUnique({
    where: {
      id: args.id,
    },
  });
  if (!cardToDelete) throw new Error('No such card found.');
  if (cardToDelete.createdById !== userId)
    throw new Error('You have no access to this card.');
  await context.prisma.flashcard.delete({
    where: { id: args.id },
  });
  return 'The has been Successful deleted.';
};

export {
  getAllCards,
  getOneCard,
  createNewCard,
  updateCard,
  deleteCard,
  getOwnersCard,
};
