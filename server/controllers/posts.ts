import { Request, Response } from 'express';
import prisma from '../../lib';

export default {

  getPosts: async function(req: Request, res: Response) {
    const posts = await prisma.post.findMany({
      include: {
        authorId: true,
      }
    });
    res.json(posts);
  },
  addPosts: async function(req, res) {
    const {title, body, attachment, author} = req.body
    const newPost= await prisma.post.create({
      data: {
        title: title,
        body: body,
        attachment: attachment ? attachment : null,
        author: author
      } 
    })
    res.json(newPost);
  },

}