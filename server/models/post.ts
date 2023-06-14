import prisma from "../../lib";

const post = {
  deleteAll: () => {
    return prisma.post.deleteMany();
  }
}

export default post;