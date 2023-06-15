 import prisma from "../../lib";

const post = {
  delete: (id) => {
    return prisma.post.delete({
      where: {
        id: id,
      }
    });
  },

  create: (reqbody) => {
    const {title, body, attachment, authorId} = reqbody
    return prisma.post.create({
      data: {
        title: title,
        body: body,
        attachment: attachment ? attachment : null,
        author: {
          connect: {id: authorId}
        }
      },
      include: {
        author: true,
      }
    })
  },

  getAll: () => {
    return prisma.post.findMany({
      select: {
        id: true,
        title: true,
        body: true,
        isDeleted: true,
        attachment: true,
        author: true,
      },
    })
  },
};

export default post;