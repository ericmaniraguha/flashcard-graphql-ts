"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUniqueCard = exports.getOneUser = exports.createNewUser = exports.getAllUser = void 0;
const getAllUser = async (parent, args, context) => {
    const allUsers = await context.prisma.user.findMany();
    return allUsers;
};
exports.getAllUser = getAllUser;
const getOneUser = async (parent, args, context) => {
    const existingUser = await context.prisma.user.findUnique({
        where: {
            email: args.email,
        },
    });
    return existingUser;
};
exports.getOneUser = getOneUser;
const createNewUser = async (parent, args, context) => {
    const createAUser = await context.prisma.user.create({
        data: {
            names: args.names,
            email: args.email,
            password: args.password,
        },
    });
    return createAUser;
};
exports.createNewUser = createNewUser;
const userUniqueCard = async (parent, args, context) => {
    const userCard = await context.prisma.flashcard.findUnique({
        where: {
            id: args.id,
        },
    });
    return userCard;
};
exports.userUniqueCard = userUniqueCard;
//# sourceMappingURL=resolver.js.map