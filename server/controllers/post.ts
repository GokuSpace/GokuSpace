import { Request, Response } from 'express';
import prisma from '../../lib';

const post = {

  getPosts: async function(req: Request, res: Response) {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        body: true,
        isDeleted: true,

      }
    });
    res.json(posts);
  },
  addPost: async function(req, res) {
    const {title, body, attachment, authorId} = req.body
    const newPost= await prisma.post.create({
      data: {
        title: title,
        body: body,
        attachment: attachment ? attachment : null,
        authorId: authorId
      }
    })
    res.json(newPost);
  },

}

export default post;