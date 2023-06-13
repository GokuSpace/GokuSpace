import prisma from '../../lib';

const userAction = {
  create: (account, userInfo) => {
    console.log(account)
    return prisma.user.create({
      data: {
        account: {
          connect: {id: account.id}
        },
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        username: userInfo.username,
        zipcode: Number(userInfo.zipcode),
        favoriteAnimeId: userInfo.favoriteAnimeId,
        favoriteCharacterId: userInfo.favoriteCharacterId,
      }
    })
  }
}

export default userAction;