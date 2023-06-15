 import prisma from "../../lib";

const post = {
  deleteAll: () => {
    return prisma.post.deleteMany();
  },

  create: (reqbody) => {
    const {title, body, attachment, authorId} = reqbody
    return prisma.post.create({
      data: {
        title: title,
        body: body,
        attachment: attachment ? attachment : null,
        authorId: authorId
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

      }
    })
  },
};

export default post;