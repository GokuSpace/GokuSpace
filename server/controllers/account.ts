import accountAction from '../../lib/models';
import userAction from '../../lib/models';
import bcrypt from 'bcryptjs-react';

const account = {
  post: (req, res) => {
    accountAction.create(req.body)
      .then((result) => {
        userAction.create(result, req.body)
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
    accountAction.verify(req.body)
      .then((result) => {
        if (bcrypt.compare(req.body.password, result.password)) {
          res.status(200).send(JSON.stringify(result.user));
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