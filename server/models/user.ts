import prisma from '../../lib';

const userAction = {
  create: (account, userInfo) => {
    return prisma.user.create({
      data: {
        account: {
          connect: { id: account.id },
        },
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        username: userInfo.username,
        zipcode: userInfo.zipcode,
        latitude: userInfo.latitude,
        longitude: userInfo.longitude,
        favoriteAnime: userInfo.favoriteAnimeId
          ? {
              connect: { id: userInfo.favoriteAnimeId },
            }
          : undefined,
        favoriteCharater: userInfo.favoriteCharacterId
          ? {
              connect: { id: userInfo.favoriteCharacterId },
            }
          : undefined,
      },
    });
  },
};

export default userAction;
