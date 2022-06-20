"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCardOwners = exports.deleteCard = exports.updateCard = exports.createNewCard = exports.getOneCard = exports.getAllCards = void 0;
const getAllCards = async (parent, args, context) => {
    const allCards = await context.prisma.flashcard.findMany();
    return allCards;
};
exports.getAllCards = getAllCards;
const getOneCard = async (parent, args, context) => {
    const existingCard = await context.prisma.flashcard.findUnique({
        where: {
            id: args.id,
        },
    });
    if (!existingCard)
        throw new Error('There is no flashcard with such ID');
    return existingCard;
};
exports.getOneCard = getOneCard;
const getCardOwners = async (parent, args, context) => {
    const userId = context.userId;
    if (!userId)
        throw new Error('Access denied');
    const cardOwner = await context.prisma.flashcard.findMany({
        where: { createdById: userId },
    });
    return cardOwner;
};
exports.getCardOwners = getCardOwners;
const createNewCard = async (parent, args, context) => {
    const userId = context.userId;
    if (!userId)
        throw new Error('Access denied');
    const createACard = await context.prisma.flashcard.create({
        data: {
            question: args.question,
            answer: args.answer,
            createdById: userId,
        },
    });
    return createACard;
};
exports.createNewCard = createNewCard;
const updateCard = async (parent, args, context) => {
    const userId = context.userId;
    if (!userId)
        throw new Error('Access denied');
    const cardToBeUpdate = await context.prisma.flashcard.findUnique({
        where: {
            id: args.id,
        },
    });
    if (!cardToBeUpdate)
        throw new Error('No such card found.');
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
exports.updateCard = updateCard;
const deleteCard = async (parent, args, context) => {
    const userId = context.userId;
    if (!userId)
        throw new Error('Access denied!');
    const cardToDelete = await context.prisma.flashcard.findUnique({
        where: {
            id: args.id,
        },
    });
    if (!cardToDelete)
        throw new Error('No such card found.');
    if (cardToDelete.createdById !== userId)
        throw new Error('You have no access to this card.');
    await context.prisma.flashcard.delete({
        where: { id: args.id },
    });
    return 'The has been Successful deleted.';
};
exports.deleteCard = deleteCard;
//# sourceMappingURL=Resolver.js.map