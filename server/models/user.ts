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
        zipcode: userInfo.zipcode,
        favoriteAnime: userInfo.favoriteAnimeId ? {
          connect: {id: userInfo.favoriteAnimeId}
        } : undefined,
        favoriteCharater: userInfo.favoriteCharacterId ? {
          connect: {id: userInfo.favoriteCharacterId}
        } : undefined,
      }
    })
  }
}

export default userAction;