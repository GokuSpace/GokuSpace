import prisma from '../../lib';

const userAction = {
  create: (account, userInfo) => {
    return prisma.user.create({
      data: {
        accountId: account.id,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        username: userInfo.userName,
        zipcode: userInfo.zipcode,
      }
    })
  }
}

export default userAction;