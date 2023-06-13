import models from '../models';
import userAction from '../models';
import bcrypt from 'bcryptjs-react';

const account = {
  post: (req, res) => {
    models.accountAction.create(req.body)
      .then((result) => {
        models.userAction.create(result, req.body)
          .then (result => {
            res.status(201).send(JSON.stringify(result))
          })
          .catch(err => {
            console.error(err)
            res.sendStatus(500)
          })
      })
      .catch(err => {
        console.error(err)
        res.sendStatus(406)
      })
  },
  login: (req, res) => {
    models.accountAction.verify(req.body)
      .then((result) => {
        if (bcrypt.compare(req.body.password, result.account.password)) {
          res.status(200).send(JSON.stringify({...result, account: undefined}));
        } else {
          res.sendStatus(401)
        }
      })
      .catch(err => {
        console.error(err)
        res.sendStatus(404)
      })
  },
}

export default account;