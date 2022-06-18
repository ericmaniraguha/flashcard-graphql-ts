import { Context, context } from '../../context';

const getAllUser = async (parent: any, args: any, context: Context) => {
  const allUsers = await context.prisma.user.findMany();
  return allUsers;
};

const getOneUser = async (parent: any, args: any, context: Context) => {
  const existingUser = await context.prisma.user.findUnique({
    where: {
      email: args.email,
    },
  });
  return existingUser;
};

const createNewUser = async (parent: any, args: any, context: Context) => {
  const createAUser = await context.prisma.user.create({
    data: {
      names: args.names,
      email: args.email,
      password: args.password,
    },
  });

  return createAUser;
};

const userUniqueCard = async (parent: any, args: any, context: Context) => {
  const userCard = await context.prisma.flashcard.findUnique({
    where: {
      id: args.id,
    },
  });
  return userCard;
};

export { getAllUser, createNewUser, getOneUser, userUniqueCard };
