import prisma from '../../lib';

const anime = {
  titles: () => {
    return prisma.anime.findMany({
      select: {
        id: true,
        title: true,
      }
    })
  },
  characters: () => {
    return prisma.character.findMany({
      select: {
        id: true,
        mal_id: true,
        name: true,
      }
    })
  },
  info: () => {
    return prisma.anime.findMany();
  }
};

export default anime;