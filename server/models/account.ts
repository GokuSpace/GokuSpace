import prisma from '../../lib';

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
    return prisma.user.findFirst({
      where: {
        account: {
          email: body.email,
        }
      },
      select: {
        account: true,
      }
    })
  },
};

export default accountAction;