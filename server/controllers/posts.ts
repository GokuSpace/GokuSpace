import { Request, Response } from 'express';
import prisma from '../../lib';

export default {

  getPosts: async function(req: Request, res: Response) {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
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