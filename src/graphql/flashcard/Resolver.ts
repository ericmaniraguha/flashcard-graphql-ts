import { Context, context } from '../../context';

const getAllCards = async (parent: any, args: any, context: Context) => {
  const allCards = await context.prisma.flashcard.findMany();
  return allCards;
};

const getOneCard = async (parent: any, args: any, context: Context) => {
  const existingCard = await context.prisma.flashcard.findUnique({
    where: {
      id: args.id,
    },
  });
  return existingCard;
};

const createNewCard = async (parent: any, args: any, context: Context) => {
  const createACard = await context.prisma.flashcard.create({
    data: {
      question: args.question,
      answer: args.answer,
    },
  });

  return createACard;
};

const updateCard = async (parent: any, args: any, context: Context) => {
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

const deleteCard = async (parent: any, args: any, context: Context) => {
  const deletedCard = await context.prisma.flashcard.delete({
    where: {
      id: args.id,
    },
  });

  return deletedCard;
};



export { getAllCards, getOneCard, createNewCard, updateCard, deleteCard };
