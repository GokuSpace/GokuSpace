import { Request, Response } from 'express';
import models from '../models';

const post = {

  getPosts: async function(req: Request, res: Response) {
    models.post.getAll()
      .then(result => {
        res.status(200).send(JSON.stringify(result));
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(402)
      })
  },
  addPost: async function(req, res) {
    models.post.create(req.body)
      .then(result => {
        res.status(201).send(JSON.stringify(result));
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(402)
      })
  },
  delete: (req, res) => {
    models.post.deleteAll()
    .then(result => {
      res.sendStatus(200)
    })
    .catch(err => {
      console.log(err)
      res.status(402).send(err)
    })
  }

}

export default post;