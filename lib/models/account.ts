import prisma from '../index';

const accountAction = {
  create: (body) => {
    return prisma.account.create({
      data: {
        email: body.email,
        password: body.password,
      }
    })
  },
  verify: (body) => {
    return prisma.account.findUnique({
      where: {
        email: body.email,
      }
    })
  }
};

export default accountAction;